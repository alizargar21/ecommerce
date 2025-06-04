import React from 'react';
import { Button } from './ui';
import Link from 'next/link';

const Welcome = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-6">
      <span>Welcome to</span>
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold text-gray-800">Ecommerce</h1>
      </div>
      <Button asChild className="mt-6">
        <Link href={'/products'}>Go to products</Link>
      </Button>
      <Button asChild className="mt-6">
        <Link href={'/dashboard'}>Go to Dashboard</Link>
      </Button>
    </div>
  );
};

export default Welcome;
