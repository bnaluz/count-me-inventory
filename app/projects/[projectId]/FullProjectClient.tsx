'use client';

import React, { useEffect, useState } from 'react';

const FullProjectClient = ({ prop }: any) => {
  return (
    <div>
      {prop.map((data: any) => (
        <div>{data.product.productName}</div>
      ))}
    </div>
  );
};

export default FullProjectClient;
