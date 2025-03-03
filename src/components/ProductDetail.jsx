import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [addedToCart, setAddedToCart] = useState(false);
    const { addItem } = useContext(CartContext);

    useEffect(() => {
        const fetchProduct = async () => {
            const docRef = doc(db, "items", id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const productData = docSnap.data();
                productData.id = docSnap.id; // Asegurarse de que el producto tenga un identificador único
                console.log("Producto obtenido:", productData);
                setProduct(productData);
            } else {
                console.log("No such document!");
            }
        };
        fetchProduct();
    }, [id]);

    const handleAddToCart = (quantity) => {
        console.log('Adding to cart:', product, quantity);
        addItem(product, quantity); // Agrega la cantidad seleccionada del producto al carrito
        setAddedToCart(true);
    };

    if (!product) return <div>Cargando...</div>;

    console.log("Producto renderizado:", product);

    return (
        <div style={styles.container}>
            <div style={styles.imageContainer}>
                <img 
                    src={product.image} 
                    alt={product.title} 
                    style={styles.image}
                    onError={(e) => { console.error("Error cargando la imagen:", e.target.src); }}
                />
            </div>
            <div style={styles.info}>
                <h1 style={styles.title}>{product.title}</h1>
                <p style={styles.category}>{product.category}</p>
                <p style={styles.price}>${product.price}</p>
                <p style={styles.description}>{product.description}</p>
                {!addedToCart ? (
                    <ItemCount stock={product.stock} initial={1} onAdd={handleAddToCart} />
                ) : (
                    <p>Producto agregado al carrito</p>
                )}
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
  },
  button: {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '1rem 2rem',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  }
}