import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

export default function NavBar() {
    return (
        <nav style={styles.nav}>
            <NavLink to="/" exact activeClassName="active" style={styles.link}>Inicio</NavLink>
            <NavLink to="/category/cuerdas" activeClassName="active" style={styles.link}>Cuerdas</NavLink>
            <NavLink to="/category/viento" activeClassName="active" style={styles.link}>Viento</NavLink>
            <NavLink to="/category/percusion" activeClassName="active" style={styles.link}>Percusión</NavLink>
            <NavLink to="/contact" activeClassName="active" style={styles.link}>Contacto</NavLink>
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