import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

function ContactList({ contacts, filter, setContacts }) {
  const filteredContacts = contacts.filter((c) => {
    if (filter === "all") return true;
    if (filter === "favorites") return c.favorite;
    return c.category === filter;
  });

  const toggleFavorite = (id) => {
    setContacts((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, favorite: !c.favorite } : c
      )
    );
  };

  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="p-4">
      {filteredContacts.length === 0 ? (
        <p>No hay contactos disponibles.</p>
      ) : (
        filteredContacts.map((c) => (
          <ContactCard
            key={c.id}
            contact={c}
            onToggleFavorite={() => toggleFavorite(c.id)}
            onDelete={() => deleteContact(c.id)}
          />
        ))
      )}
    </div>
  );
}

export default ContactList;
