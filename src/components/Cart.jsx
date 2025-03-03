import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function Cart() {
  const { cart, removeItem, clearCart, total } = useContext(CartContext);

  if (cart.length === 0) return <div>El carrito está vacío</div>;

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Carrito de Compras</h2>
      <ul style={styles.list}>
        {cart.map(item => (
          <li key={item.id} style={styles.item}>
            <img src={item.image} alt={item.title} style={styles.image} />
            <div style={styles.info}>
              <h3 style={styles.title}>{item.title}</h3>
              <p style={styles.price}>${item.price}</p>
              <p style={styles.quantity}>Cantidad: {item.quantity}</p>
              <button onClick={() => removeItem(item.id)} style={styles.button}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
      <div style={styles.total}>
        <h3>Total: ${total}</h3>
        <button onClick={clearCart} style={styles.button}>Vaciar Carrito</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  title: {
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: '2rem'
  },
  list: {
    listStyle: 'none',
    padding: 0
  },
  item: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1rem'
  },
  image: {
    width: '100px',
    height: '100px',
    objectFit: 'cover'
  },
  info: {
    flex: 1
  },
  price: {
    fontSize: '1.2rem',
    color: '#27ae60'
  },
  quantity: {
    fontSize: '1rem',
    color: '#7f8c8d'
  },
  button: {
    padding: '0.5rem 1rem',
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  total: {
    textAlign: 'center',
    marginTop: '2rem'
  }
};
