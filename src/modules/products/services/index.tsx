import { pc } from '@/lib/Prisma';
// import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export const getProducts = async () => {
  const res = await pc.product.findMany({
    include: { images: true, category: true },
  });

  return res;
};
export const getProductById = async (id: string) => {
  const res = await pc.product.findFirst({
    where: { id },
    include: { images: true },
  });
  if (!res) {
    return null;
  }
  return res;
};

export const getCategories = async () => {
  const res = await pc.productCategory.findMany({
    include: { parent: true },
  });
  return res;
};
export async function createCategory(formData: FormData) {
  const name = formData.get('name') as string;
  const parentId = formData.get('parentId') as string | null;

  if (!name) {
    return { data: '' };
  }

  try {
    await pc.productCategory.create({
      data: {
        name,
        parentId: parentId || null,
      },
    });

    // revalidatePath('/dashboard/categories');
    return { data: 'success' };
  } catch (err) {
    return { data: 'خطا در ایجاد دسته‌بندی' };
  }
}
export const getCategoryById = async (id: string) => {
  const res = await pc.productCategory.findFirst({
    where: { id },
  });
  if (!res) {
    return null;
  }
  return res;
};
