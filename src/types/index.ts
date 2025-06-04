import { Prisma } from '@prisma/client';
import type {
  Product,
  ProductCategory,
  Image as ProductImage,
} from '@prisma/client';

export type ProductsWithImages = Prisma.ProductGetPayload<{
  include: { images: true };
}>;
// src/types/productTypes.ts
export type CategoryWithParent = {
  id: string;
  name: string;
  parent?: {
    id: string;
    name: string;
  } | null;
};

export type FullProduct = Product & {
  category: ProductCategory;
  images: ProductImage[];
};
export type FullProductCategory = ProductCategory & {
  parent: CategoryWithParent;
};
