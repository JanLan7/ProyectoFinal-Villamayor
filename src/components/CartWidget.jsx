import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartWidget() {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link to="/cart" style={styles.container}>
      <img src="/cart-icon.png" alt="Carrito" style={styles.icon} />
      {totalItems > 0 && <span style={styles.badge}>{totalItems}</span>}
    </Link>
  );
}

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  },
  icon: {
    width: '24px',
    height: '24px'
  },
  badge: {
    position: 'absolute',
    top: '-5px',
    right: '-5px',
    backgroundColor: '#e74c3c',
    color: 'white',
    borderRadius: '50%',
    padding: '0.2rem 0.5rem',
    fontSize: '0.8rem'
  }
};
