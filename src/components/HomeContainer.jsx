import { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import ProductCard from './ProductCard';
import { useParams } from 'react-router-dom';

export default function HomeContainer() {
  const [products, setProducts] = useState(null);
  const { catId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const q = catId ? query(collection(db, "items"), where("category", "==", catId)) : collection(db, "items");
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => {
        const product = { id: doc.id, ...doc.data() };
        return product;
      });
      console.log("Productos obtenidos:", data);
      setProducts(data);
    };
    fetchData();
  }, [catId]);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{catId ? `Categoría: ${catId}` : 'Todos los productos'}</h2>
      <div style={styles.grid}>
        {products?.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
          />
        ))}
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '2rem',
    justifyContent: 'center'
  }
}