import { NavLink, Route, Routes } from 'react-router-dom';
import useUsers from './hooks/useUsers';
import Home from './pages/Home';
import Users from './pages/Users';
import CreateUser from './pages/CreateUser';

export default function App() {
  // El hook se usa UNA sola vez aquí, en el componente raíz.
  // Así el estado vive mientras la app esté abierta y no se pierde
  // al cambiar de ruta (Paso 5).
  const { users, getUserById, createUser, updateUser, deleteUser } = useUsers();

  return (
    <>
      <header className="encabezado">
        <h1>CRUD de usuarios</h1>
        <nav className="menu" aria-label="Principal">
          <NavLink to="/" end>
            Inicio
          </NavLink>
          <NavLink to="/usuarios">Usuarios</NavLink>
          <NavLink to="/crear">Crear usuario</NavLink>
        </nav>
      </header>

      <main className="contenido">
        <Routes>
          <Route path="/" element={<Home total={users.length} />} />
          <Route
            path="/usuarios"
            element={<Users users={users} onDelete={deleteUser} />}
          />
          <Route
            path="/crear"
            element={<CreateUser createUser={createUser} />}
          />
          <Route
            path="/editar/:id"
            element={
              <CreateUser getUserById={getUserById} updateUser={updateUser} />
            }
          />
          <Route path="*" element={<p>La página no existe.</p>} />
        </Routes>
      </main>
    </>
  );
}
