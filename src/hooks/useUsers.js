import { useState } from 'react';

const USUARIOS_INICIALES = [
  {
    id: 1,
    name: 'Camila Rojas',
    email: 'camila.rojas@correo.com',
    city: 'Bogotá',
  },
  {
    id: 2,
    name: 'Andrés Gómez',
    email: 'andres.gomez@correo.com',
    city: 'Medellín',
  },
  {
    id: 3,
    name: 'Valentina Pérez',
    email: 'valentina.perez@correo.com',
    city: 'Cali',
  },
];

// Custom hook que centraliza toda la lógica del CRUD (Paso 8)
export default function useUsers() {
  const [users, setUsers] = useState(USUARIOS_INICIALES);

  // READ: buscar un usuario por id (el id de la URL llega como texto)
  const getUserById = (id) => users.find((u) => u.id === Number(id));

  // CREATE
  const createUser = ({ name, email, city }) => {
    setUsers((prev) => {
      const nextId = prev.length ? Math.max(...prev.map((u) => u.id)) + 1 : 1;
      return [...prev, { id: nextId, name, email, city }];
    });
  };

  // UPDATE
  const updateUser = (id, changes) => {
    setUsers((prev) =>
      prev.map((u) => (u.id === Number(id) ? { ...u, ...changes } : u))
    );
  };

  // DELETE
  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  return { users, getUserById, createUser, updateUser, deleteUser };
}
