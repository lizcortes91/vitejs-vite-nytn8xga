import { Link } from 'react-router-dom';

export default function Home({ total }) {
  return (
    <section>
      <h2>Bienvenido</h2>
      <p>
        Esta aplicación permite gestionar usuarios: listarlos, crearlos,
        editarlos y eliminarlos. Actualmente hay <strong>{total}</strong>{' '}
        {total === 1 ? 'usuario registrado' : 'usuarios registrados'}.
      </p>
      <div className="acciones">
        <Link className="btn btn--primario" to="/usuarios">
          Ver usuarios
        </Link>
        <Link className="btn btn--secundario" to="/crear">
          Crear usuario
        </Link>
      </div>
    </section>
  );
}
