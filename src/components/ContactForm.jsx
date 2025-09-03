import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ContactForm({ contacts = [], onSave }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const contactToEdit = contacts.find((c) => c.id === Number(id));

  const [formData, setFormData] = useState(
    contactToEdit || { name: "", phone: "", category: "personal", favorite: false }
  );
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errs = {};
    if (!formData.name || formData.name.length < 3) {
      errs.name = "El nombre debe tener al menos 3 caracteres.";
    }
    if (!/^\d{9}$/.test(formData.phone)) {
      errs.phone = "El teléfono debe tener 9 dígitos.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSave(formData);
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto space-y-3">
      <input
        type="text"
        placeholder="Nombre"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="w-full border p-2 rounded"
      />
      {errors.name && <p className="text-red-500">{errors.name}</p>}

      <input
        type="text"
        placeholder="Teléfono"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        className="w-full border p-2 rounded"
      />
      {errors.phone && <p className="text-red-500">{errors.phone}</p>}

      <select
        value={formData.category}
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        className="w-full border p-2 rounded"
      >
        <option value="work">Trabajo</option>
        <option value="personal">Personal</option>
        <option value="family">Familia</option>
      </select>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={formData.favorite}
          onChange={(e) => setFormData({ ...formData, favorite: e.target.checked })}
        />
        Marcar como favorito
      </label>

      <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">
        💾 Guardar
      </button>
    </form>
  );
}

export default ContactForm;

