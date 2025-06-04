import CategoriesBox from '@/components/CategoriesBox';
import React from 'react';
import { AiOutlineProduct } from 'react-icons/ai';
import Link from 'next/link';
import { MdOutlineCategory } from 'react-icons/md';
import { TbFileReport } from 'react-icons/tb';
import { LuUsersRound } from 'react-icons/lu';
const page = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h2 className="text-[30px] font-bold mb-10">Welcome to Dashboard</h2>
      <div className="flex flex-wrap gap-5 justify-center items-center w-full h-full">
        <Link href={'/dashboard/categories'}>
          <CategoriesBox
            title="Categories"
            icon={<MdOutlineCategory size={30} />}
            // description="Management Categories"
          />
        </Link>
        <Link href={'/dashboard/products'}>
          <CategoriesBox
            title="Products"
            icon={<AiOutlineProduct size={30} />}
            // description="Management Products"
          />
        </Link>{' '}
        <Link href={'/dashboard/users'}>
          <CategoriesBox
            title="Customers"
            icon={<LuUsersRound size={30} />}
            // description="Management Customers"
          />
        </Link>
        <Link href={'/dashboard/salsesReports'}>
          <CategoriesBox
            title="Sales Reports"
            icon={<TbFileReport size={30} />}
            // description="View Sales Reports"
          />
        </Link>
      </div>
    </div>
  );
};

export default page;
