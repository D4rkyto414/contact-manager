import ContactCard from "./ContactCard";

export default function ContactList({ contacts, onToggleFavorite, onDelete }) {
  if (contacts.length === 0) {
    return <p className="text-gray-500">No hay contactos disponibles</p>;
  }

  return (
    <div>
      {contacts.map((c) => (
        <ContactCard 
          key={c.id} 
          contact={c} 
          onToggleFavorite={onToggleFavorite} 
          onDelete={onDelete} 
        />
      ))}
    </div>
  );
}
