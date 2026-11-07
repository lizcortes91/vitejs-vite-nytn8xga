import { Link, useNavigate, useParams } from 'react-router-dom';
import UserForm from '../components/UserForm';

// Esta página sirve para crear (/crear) y para editar (/editar/:id).
// Si la URL trae un id, se carga el usuario y se entra en modo edición.
export default function CreateUser({ createUser, getUserById, updateUser }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const editando = id !== undefined;
  const usuario = editando ? getUserById(id) : undefined;

  if (editando && !usuario) {
    return (
      <section>
        <h2>Usuario no encontrado</h2>
        <p>No existe un usuario con el ID {id}.</p>
        <Link className="btn btn--secundario" to="/usuarios">
          Volver a la lista
        </Link>
      </section>
    );
  }

  const handleSubmit = (datos) => {
    if (editando) {
      updateUser(id, datos);
    } else {
      createUser(datos);
    }
    navigate('/usuarios');
  };

  return (
    <section>
      <h2>{editando ? 'Editar usuario' : 'Crear usuario'}</h2>
      <UserForm
        initialValues={usuario}
        onSubmit={handleSubmit}
        submitLabel={editando ? 'Guardar cambios' : 'Crear usuario'}
      />
    </section>
  );
}
