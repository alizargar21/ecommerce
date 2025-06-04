'use client';
import React from 'react';
import Tree from 'react-d3-tree';
import { buildCategoryTree } from '../../../lib/categoryTreeBuilder';

const CategoryTreeChart = ({ flatCategories }: { flatCategories: any[] }) => {
  const treeData = buildCategoryTree(flatCategories);
  const root = {
    name: 'Root',
    children: treeData,
  };

  return (
    <div style={{ width: '100%', height: '500px', border: '1px solid #ccc' }}>
      <Tree data={root} orientation="vertical" />
    </div>
  );
};

export default CategoryTreeChart;
