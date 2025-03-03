import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div style={styles.card}>
      <Link to={`/product/${product.id}`}>
        <img 
          src={product.image.replace(/^'|'$/g, '')} 
          alt={product.title.replace(/^'|'$/g, '')} 
          style={styles.image}
          onError={(e) => { console.error("Error cargando la imagen:", e.target.src); }}
        />
        <h3 style={styles.title}>{product.title.replace(/^'|'$/g, '')}</h3>
        <p style={styles.price}>${product.price}</p>
      </Link>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    textAlign: 'center',
    transition: 'transform 0.2s',
    cursor: 'pointer'
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover'
  },
  title: {
    fontSize: '1.2rem',
    color: '#2c3e50',
    margin: '0.5rem 0'
  },
  price: {
    fontSize: '1rem',
    color: '#27ae60',
    marginBottom: '1rem'
  }
};