'use client';

import React from 'react';

type CategoryNode = {
  id: string;
  name: string;
  parentId: string | null;
  children: CategoryNode[];
};

const CategoryTree = ({ nodes }: { nodes: CategoryNode[] }) => {
  return (
    <ul className="ml-4 list-disc">
      {nodes.map((node) => (
        <li key={node.id}>
          <span className="font-medium">{node.name}</span>
          {node.children.length > 0 && <CategoryTree nodes={node.children} />}
        </li>
      ))}
    </ul>
  );
};

export default CategoryTree;
