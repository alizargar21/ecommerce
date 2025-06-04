import Image from 'next/image';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Button,
} from '@/components/ui';
import Link from 'next/link';
import { GalleryThumbnails, Heart } from 'lucide-react';
import { Product } from '@prisma/client';
import { FullProduct } from '@/types';

const ProductItem = (props: { product: FullProduct }) => {
  const { product } = props;
  return (
    <Card className="w-[350px] transform transition-transform duration-300 hover:scale-105">
      <CardHeader>
        <div className="relative w-full h-[250px]">
          <Image
            src={product?.images[0]?.image || '/assets/noImage.jpg'}
            alt={product.name}
            width={200}
            height={200}
            className="rounded m-auto object-contain"
          />
        </div>
      </CardHeader>
      <CardContent>
        <h2 className="text-xl font-bold">{product?.name}</h2>
        <p className="text-gray-500">{product?.category?.name}</p>
        <div className="flex justify-between items-center">
          <p className="mt-4 text-lg font-semibold">
            ${product?.price?.toFixed(2)}
          </p>
          <div className="flex gap-2">
            <Heart />
            <Link href={`/products/catalog?id=${product.id}`}>
              <GalleryThumbnails />
            </Link>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Link href={`/products/${product.id}`}>More Detail</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductItem;
