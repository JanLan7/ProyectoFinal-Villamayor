import ItemCount from './ItemCount';

export default function ItemDetail({ product }) {
  const handleAddToCart = (quantity) => {
    console.log(`Agregado ${quantity} ${product.title} al carrito`);
    // Aquí puedes agregar la lógica para agregar el producto al carrito
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img 
          src={product.image} 
          alt={product.title} 
          style={styles.image}
        />
      </div>
      <div style={styles.info}>
        <h1 style={styles.title}>{product.title}</h1>
        <p style={styles.category}>{product.category}</p>
        <p style={styles.price}>${product.price}</p>
        <p style={styles.description}>{product.description}</p>
        <ItemCount stock={product.stock} initial={1} onAdd={handleAddToCart} />
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    gap: '3rem',
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  imageContainer: {
    flex: 1,
    maxWidth: '500px'
  },
  image: {
    width: '100%',
    borderRadius: '8px'
  },
  info: {
    flex: 1
  },
  title: {
    fontSize: '2rem',
    color: '#2c3e50',
    marginBottom: '0.5rem'
  },
  category: {
    fontSize: '1.2rem',
    color: '#7f8c8d',
    marginBottom: '1rem'
  },
  price: {
    fontSize: '1.5rem',
    color: '#27ae60',
    fontWeight: 'bold',
    marginBottom: '2rem'
  },
  description: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    marginBottom: '2rem'
  }
};
