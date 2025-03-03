import { useState, useEffect } from 'react';

export default function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(initial);

    useEffect(() => {
        console.log('Stock value:', stock);
    }, [stock]);

    const handleIncrement = () => {
        console.log('Increment button clicked');
        console.log('Current count:', count);
        if (count < stock) {
            setCount(count + 1);
            console.log('New count:', count + 1);
        } else {
            console.error('Stock limit reached');
        }
    };

    const handleDecrement = () => {
        console.log('Decrement button clicked');
        console.log('Current count:', count);
        if (count > 1) {
            setCount(count - 1);
            console.log('New count:', count - 1);
        } else {
            console.error('Minimum limit reached');
        }
    };

    const handleAddToCart = () => {
        console.log('Add to cart button clicked with count:', count);
        onAdd(count);
    };

    return (
        <div style={styles.container}>
            <div style={styles.controls}>
                <button onClick={handleDecrement} style={styles.button}>-</button>
                <span style={styles.count}>{count}</span>
                <button onClick={handleIncrement} style={styles.button}>+</button>
            </div>
            <button onClick={handleAddToCart} style={styles.addButton}>Agregar al carrito</button>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem'
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
    },
    button: {
        backgroundColor: '#3498db',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        padding: '0.5rem 1rem',
        cursor: 'pointer'
    },
    count: {
        fontSize: '1.5rem'
    },
    addButton: {
        backgroundColor: '#27ae60',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        padding: '0.5rem 1rem',
        cursor: 'pointer'
    }
};
