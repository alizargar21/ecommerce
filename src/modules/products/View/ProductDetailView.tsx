import React from 'react';
import ProductForm from '../components/ProductFormWithAction';
import { getCategories, getProductById } from '../services';

async function ProductDetailView(props: { id: string }) {
  const { id } = props;
  const product = await getProductById(id);
  const categories = await getCategories();
  return (
    <div>
      <ProductForm product={product} categories={categories} />
    </div>
  );
}

export default ProductDetailView;
