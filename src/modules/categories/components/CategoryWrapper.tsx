'use client';
import { buildCategoryTree } from '@/lib/categoryTreeBuilder';
import CategoryTree from './CategoryTree';
import CategoryTreeChart from '../components/CategoryTreeChart';
const CategoryTreeWrapper = ({ flatCategories }: { flatCategories: any[] }) => {
  const tree = buildCategoryTree(flatCategories);
  return (
    <div className="p-4 border rounded">
      <h2 className="font-bold mb-2">Category Tree</h2>
      <CategoryTree nodes={tree} />
      <CategoryTreeChart flatCategories={flatCategories} />
    </div>
  );
};

export default CategoryTreeWrapper;
