export default function ContactSearch({ search, setSearch }) {
  return (
    <input 
      type="text" 
      placeholder="Buscar contacto..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border p-2 rounded w-full mb-4"
    />
  );
}
