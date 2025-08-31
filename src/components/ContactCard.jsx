export default function ContactCard({ contact, onToggleFavorite, onDelete }) {
  return (
    <div className="border rounded-lg p-3 flex justify-between items-center shadow-sm mb-2">
      <div>
        <p className="font-semibold">{contact.name}</p>
        <p className="text-gray-600">{contact.phone}</p>
      </div>
      <div className="flex gap-2">
        <button 
          onClick={() => onToggleFavorite(contact.id)} 
          className={`px-2 py-1 rounded ${contact.favorite ? "bg-yellow-400" : "bg-gray-300"}`}
        >
          ⭐
        </button>
        <button 
          onClick={() => onDelete(contact.id)} 
          className="px-2 py-1 rounded bg-red-400 text-white"
        >
          🗑
        </button>
      </div>
    </div>
  );
}
