import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import ItemList from './ItemList';

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "items"));
      const data = querySnapshot.docs.map(doc => {
        const product = { id: doc.id, ...doc.data() };
        // Elimina las comillas adicionales de los valores de cadena
        product.category = product.category.replace(/^'|'$/g, '');
        product.description = product.description.replace(/^'|'$/g, '');
        product.image = product.image.replace(/^'|'$/g, '');
        product.title = product.title.replace(/^'|'$/g, '');
        return product;
      });
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return <ItemList products={products} />;
}
