import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario por correo electrónico
    console.log('Form data submitted:', formData);
  };

  return (
    <form className="max-w-md mx-auto p-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block font-medium mb-1">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-400"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block font-medium mb-1">
          Correo Electrónico
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-400"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block font-medium mb-1">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-400"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
      >
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;