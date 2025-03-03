import ProductCard from './ProductCard';

export default function ItemList({ products }) {
  return (
    <div style={styles.grid}>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '2rem',
    justifyContent: 'center'
  }
};
