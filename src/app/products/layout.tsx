import React from 'react';

function layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <h2>Product layout</h2>
      {children}
    </div>
  );
}

export default layout;
