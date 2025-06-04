'use client';

import { Product, ProductCategory } from '@prisma/client';
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
import Link from 'next/link';
import UploadImage from './UploadImage';
import { useActionState, useEffect, useState } from 'react';
import { upsertProduct } from '../actions';
import { toast } from 'sonner';

// toast('Event has been created.');

const ProductForm = (props: {
  product: Product | null;
  categories: ProductCategory[];
}) => {
  const { product, categories } = props;
  const [state, action, isPending] = useActionState<
    {
      data: Product | null;
      error: Record<string, string> | null;
    },
    FormData
  >(upsertProduct, {
    data: product ?? null,
    error: null,
  });

  const { error, data } = state;

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!submitted) return;
    if (error) toast.error('Failed');
    else if (data) toast.success('success');
    console.log(data);
  }, [state]);

  return (
    <Card className="w-[500px] mx-auto mt-10">
      <form className="max-w-lg" action={action}>
        <input type="hidden" name="id" value={product?.id || ''} />
        <CardHeader>
          <CardTitle> Product</CardTitle>
          <CardDescription>Create New Product</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="my-2">
            <Label htmlFor="name">Product Name</Label>
            <Input name="name" id="name" defaultValue={data?.name || ''} />
            {error?.name && (
              <span className="text-red-600 ml-2 mt-2">{error.name}</span>
            )}
          </div>
          <div className="my-2">
            <Label htmlFor="category">Category</Label>
            <Select name="categoryId" defaultValue={''}>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories?.map((cat) => (
                  <SelectItem key={cat.id} value={cat.id}>
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="my-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              name="description"
              id="description"
              defaultValue={data?.description || ''}
            />
          </div>
          <div className="my-2">
            <Label htmlFor="price">Price</Label>
            <Input
              name="price"
              type="number"
              id="price"
              step="0.01"
              defaultValue={data?.price || ''}
            />
            {error?.price && (
              <span className="text-red-600 ml-2 mt-2">{error.price}</span>
            )}
          </div>
          <div className="my-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              name="quantity"
              type="number"
              id="quantity"
              defaultValue={data?.quantity || ''}
            />
            {error?.quantity && (
              <span className="text-red-600 ml-2 mt-2">{error.quantity}</span>
            )}
          </div>
        </CardContent>
        {product?.id && (
          <CardFooter>
            <UploadImage productId={product.id} />
          </CardFooter>
        )}
        <CardFooter className="flex justify-between">
          <Button variant="outline" asChild>
            <Link href="/dashboard/products">Back</Link>
          </Button>
          <Button type="submit">
            {isPending
              ? 'loading...'
              : product?.id
                ? 'Update Product'
                : 'Add Product'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default ProductForm;
