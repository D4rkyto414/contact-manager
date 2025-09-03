import { Link } from "react-router-dom";

function ContactCard({ contact, onToggleFavorite, onDelete }) {
  return (
    <div className="border p-4 rounded-lg shadow flex justify-between items-center mb-3">
      <div>
        <h2 className="font-bold">{contact.name}</h2>
        <p>📞 {contact.phone}</p>
        <p>📂 {contact.category}</p>
      </div>
      <div className="flex gap-2">
        <button onClick={onToggleFavorite} className="px-2 py-1 bg-yellow-300 rounded">
          {contact.favorite ? "💚 Favorito" : "🤍"}
        </button>
        <Link to={`/edit/${contact.id}`} className="px-2 py-1 bg-blue-400 text-white rounded">
          ✏️ Editar
        </Link>
        <button onClick={onDelete} className="px-2 py-1 bg-red-400 text-white rounded">
          🗑️ Eliminar
        </button>
      </div>
    </div>
  );
}

export default ContactCard;
