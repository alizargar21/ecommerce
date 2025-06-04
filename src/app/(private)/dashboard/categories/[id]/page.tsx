import Spinner from '@/components/Spinner';
import CategoriesDetailView from '@/modules/categories/views/CategoriesDetailView';
import React, { Suspense } from 'react';

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const data = await params;
  const { id } = data;

  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <CategoriesDetailView id={id} />
      </Suspense>
    </div>
  );
};

export default page;
