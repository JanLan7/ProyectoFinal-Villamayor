import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function CheckoutForm() {
  const { cart, clearCart, total } = useContext(CartContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [orderId, setOrderId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const order = {
      buyer: { name, email, address },
      items: cart,
      total,
      date: new Date()
    };
    const docRef = await addDoc(collection(db, 'orders'), order);
    setOrderId(docRef.id);
    clearCart();
  };

  if (orderId) {
    return <div>Gracias por tu compra. Tu número de orden es: {orderId}</div>;
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Checkout</h2>
      <input 
        type="text" 
        placeholder="Nombre" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        style={styles.input}
        required
      />
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        style={styles.input}
        required
      />
      <input 
        type="text" 
        placeholder="Dirección" 
        value={address} 
        onChange={(e) => setAddress(e.target.value)} 
        style={styles.input}
        required
      />
      <button type="submit" style={styles.button}>Finalizar Compra</button>
    </form>
  );
}

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '400px',
    margin: '0 auto',
    padding: '2rem',
    border: '1px solid #ddd',
    borderRadius: '8px'
  },
  input: {
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ddd'
  },
  button: {
    padding: '0.5rem 1rem',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};
