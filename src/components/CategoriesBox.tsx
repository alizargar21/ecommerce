import React from 'react';

const CategoriesBox = ({
  title,
  icon,
  description,
}: {
  title: string;
  description?: string;
  icon: React.ReactNode;
}) => {
  return (
    <div
      className="w-60 h-26 rounded-lg p-3 border-2 border-neutral-900
     bg-neutral-200 hover:bg-neutral-400/50 hover:dark:bg-black/40 transition-colors duration-200 dark:bg-neutral-800 flex-col"
    >
      <p className="text-2xl font-semibold flex">
        {title}
        <span className="w-full flex justify-end p-3">{icon}</span>
      </p>
      <p className="text-lg font-semibold pt-10">{description}</p>
    </div>
  );
};

export default CategoriesBox;
