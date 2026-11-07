import UserItem from './UserItem';

export default function UserList({ users, onDelete }) {
  if (users.length === 0) {
    return (
      <p className="vacio">
        No hay usuarios. Crea el primero desde “Crear usuario”.
      </p>
    );
  }

  return (
    <ul className="lista">
      {users.map((user) => (
        <UserItem key={user.id} user={user} onDelete={onDelete} />
      ))}
    </ul>
  );
}
