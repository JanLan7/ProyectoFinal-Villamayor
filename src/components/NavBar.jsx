import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

export default function NavBar() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Inicio</Link>
      <Link to="/category/cuerdas" style={styles.link}>Cuerdas</Link>
      <Link to="/category/viento" style={styles.link}>Viento</Link>
      <Link to="/category/percusion" style={styles.link}>Percusión</Link>
      <Link to="/contact" style={styles.link}>Contacto</Link>
      <CartWidget />
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem',
    backgroundColor: '#3498db',
    color: 'white'
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    margin: '0 1rem'
  }
};