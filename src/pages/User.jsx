import UserList from '../components/UserList';

export default function Users({ users, onDelete }) {
  return (
    <section>
      <h2>Usuarios</h2>
      <UserList users={users} onDelete={onDelete} />
    </section>
  );
}
