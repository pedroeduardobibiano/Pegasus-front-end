import { NavLink } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
  return (
    <nav className="admin-nav-container">
      <ul>
        <li>
          <NavLink to="/admin/products" className='admin-nav-item'>
            <p>Produtos</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/categories" className='admin-nav-item'>
            <p>Categoria</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/users" className='admin-nav-item'>
            <p>Usuário</p>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;