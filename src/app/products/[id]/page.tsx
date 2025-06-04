import ProductDetail from '@/modules/products/components/ProductDetail';
import React, { Suspense } from 'react';
import { getProductById } from '@/modules/products/services';
import { ProductsWithImages } from '@/types';
import Spinner from '@/components/Spinner';
async function page({ params }: { params: Promise<{ id: string }> }) {
  const data = await params;
  const id = data.id;
  const product = (await getProductById(id)) as ProductsWithImages;
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <ProductDetail {...product} />
      </Suspense>
    </div>
  );
}

export default page;
