import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";

function App() {
  const [contacts, setContacts] = useState([]);

  // 🔹 Cargar contactos desde API o LocalStorage
  useEffect(() => {
    const localData = localStorage.getItem("contacts");
    if (localData) {
      setContacts(JSON.parse(localData));
    } else {
      const fetchContacts = async () => {
        try {
          const response = await fetch("https://dummyjson.com/users");
          const data = await response.json();
          const mappedContacts = data.users.map((user) => ({
            id: user.id,
            name: `${user.firstName} ${user.lastName}`,
            phone: user.phone || "N/A",
            category: "work",
            favorite: false,
          }));
          setContacts(mappedContacts);
          localStorage.setItem("contacts", JSON.stringify(mappedContacts));
        } catch (error) {
          console.error("Error al cargar la API", error);
        }
      };
      fetchContacts();
    }
  }, []);

  // 🔹 Guardar en LocalStorage al actualizar
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  // 🔹 Agregar o editar contactos
  const handleSaveContact = (contact) => {
    if (contact.id) {
      // Edición
      setContacts((prev) =>
        prev.map((c) => (c.id === contact.id ? contact : c))
      );
    } else {
      // Nuevo contacto
      const newContact = { ...contact, id: Date.now() };
      setContacts((prev) => [...prev, newContact]);
    }
  };

  return (
    <Router>
      <Header />
      <nav className="flex gap-4 p-4 bg-gray-200">
        <Link to="/">Todos</Link>
        <Link to="/favorites">Favoritos</Link>
        <Link to="/work">Trabajo</Link>
        <Link to="/personal">Personal</Link>
        <Link to="/family">Familia</Link>
        <Link to="/new">➕ Nuevo</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ContactList contacts={contacts} filter="all" setContacts={setContacts} />} />
        <Route path="/favorites" element={<ContactList contacts={contacts} filter="favorites" setContacts={setContacts} />} />
        <Route path="/work" element={<ContactList contacts={contacts} filter="work" setContacts={setContacts} />} />
        <Route path="/personal" element={<ContactList contacts={contacts} filter="personal" setContacts={setContacts} />} />
        <Route path="/family" element={<ContactList contacts={contacts} filter="family" setContacts={setContacts} />} />
        <Route path="/new" element={<ContactForm onSave={handleSaveContact} />} />
        <Route path="/edit/:id" element={<ContactForm contacts={contacts} onSave={handleSaveContact} />} />
      </Routes>
    </Router>
  );
}

export default App;
