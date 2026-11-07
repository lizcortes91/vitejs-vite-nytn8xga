import { Link } from 'react-router-dom';

export default function UserItem({ user, onDelete }) {
  const handleDelete = () => {
    if (window.confirm(`¿Eliminar a ${user.name}?`)) {
      onDelete(user.id);
    }
  };

  return (
    <li className="tarjeta">
      <div>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <p>{user.city}</p>
      </div>
      <div className="acciones">
        <Link className="btn btn--secundario" to={`/editar/${user.id}`}>
          Editar
        </Link>
        <button
          type="button"
          className="btn btn--peligro"
          onClick={handleDelete}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
}
