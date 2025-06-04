import CatalogList from '@/components/catalog/List';
import CatalogSelector from '@/components/catalog/Selector';
import React from 'react';

function page() {
  return (
    <div>
      <CatalogList />
      <CatalogSelector />
    </div>
  );
}

export default page;
