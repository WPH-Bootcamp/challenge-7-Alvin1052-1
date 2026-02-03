import React from 'react';
import Hero from './hero/page';
import Header from '@/layout/header/page';
import { Devider } from '@/components/ui/devider';
import Menus from './menus/Menus';
import Footer from '@/layout/footer/page';
import Reviews from './review/page';

type PageProps = { params: Promise<{ id: string }> };

const Page: React.FC<PageProps> = async ({ params }) => {
  const { id } = await params;

  // const data = await getRestoById({ id }).then((res) => res.data);

  return (
    <div className=''>
      <Header className={'bg-base-white text-neutral-950'} />
      {/* <Hero id={id} initialData={data} /> */}
      <div className='custom-container flex flex-col gap-10 py-10'>
        <Hero id={id} />
        <Devider />
        <Menus id={id} />
        <Devider />
        <Reviews id={id} />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
