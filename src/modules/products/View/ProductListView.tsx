import React from 'react';
import ProductList from '../components/ProductList';
import { getProducts } from '../services/index';
import { ProductsWithImages } from '@/types';

async function ProductListView() {
  // const [products, setProducts] = useState<ProductsWithImages[]>([]);

  const res = await getProducts();

  //   const res = getProducts();
  return (
    <div>
      <ProductList products={res} />
    </div>
  );
}

export default ProductListView;
