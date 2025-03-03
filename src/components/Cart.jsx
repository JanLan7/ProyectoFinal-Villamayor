import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ErrorBoundary from './ErrorBoundary';

function Cart() {
    const { cartItems, removeItem, totalPrice } = useContext(CartContext);

    if (cartItems.length === 0) return <div style={styles.emptyCart}>El carrito está vacío</div>;

    return (
        <div style={styles.cartContainer}>
            {cartItems.map((item, index) => (
                <div key={index} style={styles.cartItem}>
                    <img src={item.image} alt={item.title} style={styles.cartItemImage} />
                    <div style={styles.cartItemInfo}>
                        <h2 style={styles.cartItemTitle}>{item.title}</h2>
                        <p style={styles.cartItemPrice}>${item.price}</p>
                        <p style={styles.cartItemQuantity}>Cantidad: {item.quantity}</p>
                        <button style={styles.removeButton} onClick={() => removeItem(item.id)}>Eliminar</button>
                    </div>
                </div>
            ))}
            <div style={styles.total}>
                <h2>Total: ${totalPrice}</h2>
            </div>
        </div>
    );
}

const styles = {
    cartContainer: {
        padding: '2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
    },
    emptyCart: {
        padding: '2rem',
        textAlign: 'center',
        fontSize: '1.5rem',
        color: '#7f8c8d'
    },
    cartItem: {
        display: 'flex',
        gap: '1rem',
        padding: '1rem',
        border: '1px solid #ecf0f1',
        borderRadius: '8px',
        alignItems: 'center'
    },
    cartItemImage: {
        width: '100px',
        height: '100px',
        objectFit: 'cover',
        borderRadius: '8px'
    },
    cartItemInfo: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem'
    },
    cartItemTitle: {
        fontSize: '1.2rem',
        color: '#2c3e50'
    },
    cartItemPrice: {
        fontSize: '1rem',
        color: '#27ae60',
        fontWeight: 'bold'
    },
    cartItemQuantity: {
        fontSize: '1rem',
        color: '#7f8c8d'
    },
    removeButton: {
        backgroundColor: '#e74c3c',
        color: 'white',
        padding: '0.5rem 1rem',
        border: 'none',
        borderRadius: '4px',
        fontSize: '0.9rem',
        cursor: 'pointer',
        transition: 'background-color 0.3s'
    },
    total: {
        textAlign: 'right',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#2c3e50'
    }
};

export default function CartWithBoundary() {
    return (
        <ErrorBoundary>
            <Cart />
        </ErrorBoundary>
    );
}
