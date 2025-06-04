import React from 'react';
import { getCategories, getCategoryById } from '@/modules/products/services';
import CategoryFormWithActions from '../components/CategoryFormWithActions';
const CategoriesDetailView = async (props: { id: string }) => {
  const { id } = props;
  const category = await getCategoryById(id);
  const categories = await getCategories();

  return (
    <div>
      <CategoryFormWithActions category={category} categories={categories} />
    </div>
  );
};

export default CategoriesDetailView;
