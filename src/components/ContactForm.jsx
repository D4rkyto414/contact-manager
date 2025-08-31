import { useState } from "react";

export default function ContactForm({ onAddContact }) {
  const [form, setForm] = useState({ name: "", phone: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return alert("Todos los campos son requeridos");
    onAddContact(form);
    setForm({ name: "", phone: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
      <input 
        type="text" 
        name="name" 
        placeholder="Nombre" 
        value={form.name}
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <input 
        type="text" 
        name="phone" 
        placeholder="Teléfono"
        value={form.phone}
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-green-500 text-white px-3 py-2 rounded">
        Agregar
      </button>
    </form>
  );
}
