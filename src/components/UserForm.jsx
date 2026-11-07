import { useState } from 'react';

const VACIO = { name: '', email: '', city: '' };

// Formulario controlado: cada campo tiene su valor en el estado de React.
export default function UserForm({
  initialValues = VACIO,
  onSubmit,
  submitLabel,
}) {
  const [name, setName] = useState(initialValues.name);
  const [email, setEmail] = useState(initialValues.email);
  const [city, setCity] = useState(initialValues.city);
  const [error, setError] = useState('');

  const handleSubmit = (evento) => {
    evento.preventDefault();

    const datos = { name: name.trim(), email: email.trim(), city: city.trim() };

    if (!datos.name || !datos.email || !datos.city) {
      setError('Completa todos los campos.');
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(datos.email)) {
      setError('Escribe un email válido, por ejemplo nombre@correo.com.');
      return;
    }

    setError('');
    onSubmit(datos);
  };

  return (
    <form className="formulario" onSubmit={handleSubmit} noValidate>
      <label htmlFor="name">Nombre</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="city">Ciudad</label>
      <input
        id="city"
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      {error && (
        <p className="error" role="alert">
          {error}
        </p>
      )}

      <button type="submit" className="btn btn--primario">
        {submitLabel}
      </button>
    </form>
  );
}
