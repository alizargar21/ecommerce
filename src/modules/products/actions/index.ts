'use server';

import { pc } from '@/lib/Prisma';
import { Product, ProductCategory } from '@prisma/client';
import { error } from 'console';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const validationUpsertProductCategory = (data: Record<string, any>) => {
  const formSchema = z.object({
    name: z.string().min(3, { message: 'name must be 3 char' }),
  });
  const result = formSchema.safeParse(data);
  if (!result.success) {
    const errors: Record<string, string> = {};
    result.error.errors.forEach((err) => {
      errors[err.path[0]] = err.message;
    });
    return errors;
  }
  return null;
};

export const upsertCategory = async (
  prevData: {
    data: ProductCategory | null;
    error: Record<string, string> | null;
  },
  formData: FormData,
) => {
  const id = formData.get('id') as string | null;
  console.log(id);
  const name = formData.get('name') as string | null;
  const parentId = formData.get('parentId') as string | null;
  const categoryData: any = { name };
  if (parentId && parentId !== 'none') categoryData.parentId = parentId;

  const error = validationUpsertProductCategory(categoryData);
  if (error) {
    return { data: prevData.data, error };
  }

  try {
    let result;
    if (id) {
      result = await pc.productCategory.update({
        where: { id },
        data: categoryData,
      });
    } else {
      result = await pc.productCategory.create({
        data: categoryData,
      });
    }
    revalidatePath('/dashboard/categories');
    return { data: result, error: null };
  } catch (e: any) {
    console.log(e);
    return { data: prevData.data, error: { general: 'upsert failed' } };
  }
};
export const deleteProduct = async (id: string) => {
  await pc.product.delete({ where: { id } });
  revalidatePath('/dashboard/products');
};
export const deleteCategoryAction = async (id: string) => {
  await pc.productCategory.delete({ where: { id } });
  revalidatePath('/dashboard/categories');
};
const validationUpsertProduct = (data: Record<string, any>) => {
  const formSchema = z.object({
    name: z.string().min(1, { message: 'name is required' }),
    description: z.string(),
    price: z
      .number({ message: 'price is required' })
      .min(1, { message: 'price must be at least 1' }),
    quantity: z
      .number({ message: 'quantity is required' })
      .min(1, { message: 'quantity must be at least 1' })
      .max(1000, { message: 'quantity must be at most 1000' }),
  });

  const result = formSchema.safeParse(data);
  if (!result.success) {
    const errors: Record<string, string> = {};
    result.error.errors.forEach((err) => {
      errors[err.path[0]] = err.message;
    });
    return errors;
  }
  return null;
};

export const upsertProduct = async (
  prevData: { data: Product | null; error: Record<string, string> | null },
  formData: FormData,
) => {
  const id = formData.get('id') as string | null;

  const productData = {
    name: formData.get('name'),
    description: formData.get('description'),
    price: parseInt(formData.get('price') as string),
    quantity: parseInt(formData.get('quantity') as string),
    categoryId: formData.get('categoryId') as string,
  } as Product;
  console.log(productData);
  const error = validationUpsertProduct(productData);
  console.log(error);
  if (error) {
    return { data: prevData.data, error };
  }
  try {
    let result;

    if (id) {
      result = await pc.product.update({
        where: {
          id,
        },
        data: productData,
      });
    } else {
      result = await pc.product.create({
        data: productData,
      });
    }

    revalidatePath('/dashboard/products');
    console.log(result);
    // return result;
    return { error: null, data: result };
  } catch (e) {
    return { data: prevData.data, error: { general: 'upsert failed' } };
  }
};
