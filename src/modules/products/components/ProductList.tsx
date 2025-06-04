import React from 'react';
import ProductItem from './ProductItem';
import { FullProduct } from '@/types';

function productList(props: { products: FullProduct[] }) {
  const { products } = props;
  return (
    <div className="flex flex-wrap justify-start items-center w-full m-10 gap-4">
      {products.map((item) => {
        return <ProductItem key={item.name} product={item} />;
      })}
    </div>
  );
}

export default productList;
