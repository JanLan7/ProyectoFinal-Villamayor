import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, "items", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const productData = docSnap.data();
        // Elimina las comillas adicionales de los valores de cadena
        productData.category = productData.category.replace(/^'|'$/g, '');
        productData.description = productData.description.replace(/^'|'$/g, '');
        productData.image = productData.image.replace(/^'|'$/g, '');
        productData.title = productData.title.replace(/^'|'$/g, '');
        console.log("Producto obtenido:", productData);
        setProduct(productData);
      } else {
        console.log("No such document!");
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <div>Cargando...</div>;

  return <ItemDetail product={product} />;
}
