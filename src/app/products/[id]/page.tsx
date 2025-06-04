import ProductDetail from '@/modules/products/components/ProductDetail';
import React from 'react';
import { DATA } from '@/modules/products/mock/products';
async function page({ params }: { params: Promise<{ id: string }> }) {
  // const data = await params;
  const product = DATA[0]; 
  return <div>
    <ProductDetail {...product}/>
  </div>;
}

export default page;
