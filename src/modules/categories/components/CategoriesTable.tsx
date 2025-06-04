'use client';
import { getCategories } from '@/modules/products/services';
import { deleteCategoryAction } from '@/modules/products/actions';
import React from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui';
import { Edit, PlusCircle, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { CategoryWithParent } from '@/types';
const CategoriesTable = (props: {
  categories: Awaited<ReturnType<typeof getCategories>>;
}) => {
  const { categories } = props;

  const onDeleteCategory = async (id: string) => {
    await deleteCategoryAction(id);
  };
  return (
    <div className="border border-gray-200 dark:border-neutral-700 rounded-lg shadow-md mt-4 ">
      <div className="flex justify-between items-center p-4 bg-gray-100 dark:bg-neutral-800 rounded-lg">
        <h1 className="text-xl font-semibold">Products</h1>
        <Button asChild>
          <Link href="/dashboard/categories/new">
            Add New Category
            <PlusCircle />
          </Link>
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead className="text-center">Parent</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map((cat: CategoryWithParent) => (
            <TableRow key={cat.id}>
              <TableCell>{cat.name}</TableCell>
              <TableCell className="text-center">
                {cat.parent?.name || '-'}
              </TableCell>
              <TableCell className="text-center">
                <div className="flex justify-center gap-2 items-center">
                  <Button variant="ghost" asChild>
                    <Link href={`/dashboard/categories/${cat.id}`}>
                      <Edit />
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => onDeleteCategory(cat.id)}
                  >
                    <Trash2 />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell className="text-right">{categories.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};

export default CategoriesTable;
