type CategoryNode = {
  id: string;
  name: string;
  parentId: string | null;
  children: CategoryNode[];
};

export function buildCategoryTree(categories: CategoryNode[]): CategoryNode[] {
  const idToNodeMap: Record<string, CategoryNode> = {};
  const tree: CategoryNode[] = [];

  categories.forEach((category) => {
    idToNodeMap[category.id] = { ...category, children: [] };
  });

  categories.forEach((category) => {
    if (category.parentId) {
      const parent = idToNodeMap[category.parentId];
      if (parent) {
        parent.children!.push(idToNodeMap[category.id]);
      }
    } else {
      tree.push(idToNodeMap[category.id]);
    }
  });

  return tree;
}
type TreeNode = {
  name: string;
  children: TreeNode[];
};

type CategoryInput = {
  id: string;
  name: string;
  parentId: string | null;
};
export function convertToTreeFormat(categories: CategoryInput[]): TreeNode[] {
  const map = new Map<string, TreeNode>();
  const roots: TreeNode[] = [];

  // ساخت map اولیه
  categories.forEach((cat) => {
    map.set(cat.id, { name: cat.name, children: [] });
  });

  categories.forEach((cat) => {
    const node = map.get(cat.id)!;
    if (cat.parentId) {
      const parent = map.get(cat.parentId);
      if (parent) {
        parent.children.push(node);
      }
    } else {
      roots.push(node);
    }
  });

  return roots;
}
// export function convertToTreeFormat(categories: any[]): any[] {
//   const map = new Map<string, CategoryNode>();
//   const roots: any[] = [];

//   // ساخت map اولیه
//   categories.forEach(cat => {
//     map.set(cat.id, { name: cat.name, children: [] });
//   });

//   categories.forEach(cat => {
//     const node = map.get(cat.id);
//     if (cat.parentId) {
//       const parent = map.get(cat.parentId);
//       parent.children.push(node);
//     } else {
//       roots.push(node);
//     }
//   });

//   return roots;
// }
