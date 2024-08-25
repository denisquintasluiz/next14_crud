// src/app/employer/page.tsx

import React, { Suspense } from "react";
import dynamic from 'next/dynamic';

const EmployerClient = dynamic(() => import('./EmployerClient'), { ssr: false });

const EmployerPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EmployerClient />
    </Suspense>
  );
};

export default EmployerPage;
