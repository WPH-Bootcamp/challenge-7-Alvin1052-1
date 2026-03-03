import { Suspense } from 'react';
import Home from './Home';
import { LoadingSkeleton } from '@/components/skeleton-ui';

export default function index() {
  return (
    <>
      {/* <Suspense fallback={<LoadingSkeleton />}> */}
      <Home />
      {/* </Suspense> */}
    </>
  );
}
