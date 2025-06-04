'use client';
import React, { useActionState, useEffect, useState } from 'react';
import {
  Input,
  Button,
  Textarea,
  Label,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui';
import { ProductCategory } from '@prisma/client';
import { upsertCategory } from '@/modules/products/actions';
import { useRouter } from 'next/navigation';
import { getCategories } from '@/modules/products/services';
import Link from 'next/link';
const CategoryFormWithActions = (props: {
  category: ProductCategory | null;
  categories: ProductCategory[] | [];
}) => {
  const { category, categories } = props;
  const [categoriesState, setCategoriesState] = useState<
    ProductCategory[] | []
  >();
  const router = useRouter();
  const [state, action, isPending] = useActionState<
    {
      data: ProductCategory | null;
      error: Record<string, string> | null;
    },
    FormData
  >(upsertCategory, {
    data: category ?? null,
    error: null,
  });
  const { error, data } = state;

  useEffect(() => {
    setCategoriesState(categories);
    console.log(state);
    // if (state.data === 'success') {
    //   router.push('/dashboard/categories')
    // }
  }, [state]);
  return (
    <Card className="min-w-72  w-[500px] mx-auto mt-10">
      <form className="max-w-lg" action={action}>
        <input type="hidden" name="id" value={category?.id || ''} />
        <CardHeader>
          <CardTitle>Category</CardTitle>
          <CardDescription>Create New Category</CardDescription>
          <CardContent className="">
            <div className="my-4 gap-4 flex flex-col">
              <Label htmlFor="name">Category Name</Label>
              <Input name="name" id="name" defaultValue={data?.name || ''} />
              {error?.name && (
                <span className="text-red-600 ml-2 mt-2">{error.name}</span>
              )}
              <Label htmlFor="parentId">Choose Parent Category</Label>
              <Select name="parentId" defaultValue="">
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value="none">Without Parent</SelectItem>
                  {categoriesState?.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <CardFooter className="flex justify-between w-full">
                <Button variant="outline" asChild>
                  <Link href="/dashboard/categories">Back</Link>
                </Button>
                <Button type="submit">
                  {isPending
                    ? 'loading...'
                    : category?.id
                      ? 'Update Product'
                      : 'Add Product'}
                </Button>
              </CardFooter>
            </div>
          </CardContent>
        </CardHeader>
      </form>
    </Card>
  );
};

export default CategoryFormWithActions;
