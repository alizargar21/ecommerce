import { getCategories } from '@/modules/products/services';
import React from 'react';
import CategoriesTable from '../components/CategoriesTable';
import CategoryTreeWrapper from '../components/CategoryWrapper';
import CategoryTreeChart from '../components/CategoryTreeChart';

const DashboardCategoriesView = async () => {
  const categories = await getCategories();
  return (
    <div>
      <CategoriesTable categories={categories} />
      <CategoryTreeWrapper flatCategories={categories} />
    </div>
  );
};

export default DashboardCategoriesView;
