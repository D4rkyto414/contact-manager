import { useState } from "react";
import { contactsData } from "./data/contacts";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import ContactSearch from "./components/ContactSearch";

function App() {
  const [contacts, setContacts] = useState(contactsData);
  const [search, setSearch] = useState("");

  const handleAddContact = (newContact) => {
    setContacts([...contacts, { ...newContact, id: Date.now(), favorite: false }]);
  };

  const handleToggleFavorite = (id) => {
    setContacts(
      contacts.map((c) => 
        c.id === id ? { ...c, favorite: !c.favorite } : c
      )
    );
  };

  const handleDelete = (id) => {
    setContacts(contacts.filter((c) => c.id !== id));
  };

  const filteredContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-lg mx-auto p-4">
      <Header />
      <ContactSearch search={search} setSearch={setSearch} />
      <ContactForm onAddContact={handleAddContact} />
      <ContactList 
        contacts={filteredContacts} 
        onToggleFavorite={handleToggleFavorite} 
        onDelete={handleDelete} 
      />
      <p className="mt-4 text-sm text-gray-600">
        Total: {contacts.length} | Favoritos: {contacts.filter(c => c.favorite).length}
      </p>
    </div>
  );
}

export default App;
