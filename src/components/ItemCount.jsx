import { useState } from 'react';

export default function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div style={styles.container}>
      <button onClick={handleDecrement} style={styles.button}>-</button>
      <span style={styles.count}>{count}</span>
      <button onClick={handleIncrement} style={styles.button}>+</button>
      <button onClick={() => onAdd(count)} style={styles.addButton}>Agregar al carrito</button>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  button: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    cursor: 'pointer'
  },
  count: {
    fontSize: '1.5rem'
  },
  addButton: {
    padding: '0.5rem 1rem',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};
