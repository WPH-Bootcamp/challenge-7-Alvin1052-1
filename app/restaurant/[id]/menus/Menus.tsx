'use client';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { catMenu } from '@/constants/category-menu';
import { MenuCart } from '../components/menu-cart';
import { useDetails } from '../hooks/use-details-client';

const Menus = ({ id }: { id: string }) => {
  const { RestoData, error, isLoading } = useDetails(id);
  if (RestoData?.menus?.length === 0)
    return (
      <p className='text-display-lg font-extrabold text-neutral-950'>
        No Menu Available
      </p>
    );

  if (!RestoData || isLoading || error) return <div>not found</div>;

  return (
    <div className='flex flex-col gap-6'>
      <p className='text-display-lg font-extrabold text-neutral-950'>Menu</p>
      <Tabs defaultValue='all' className='flex flex-col gap-6'>
        <TabsList className='flex w-fit gap-3 bg-transparent'>
          {catMenu.map((item) => (
            <TabsTrigger
              key={item.value}
              value={item.value}
              className='text-md data-[state=active]:text-primary-100 data-[state=active]:border-primary-100 hover:text-primary-100 cursor-pointer rounded-full border border-neutral-300 px-4 py-2 font-semibold text-neutral-950 hover:bg-[#FFECEC] data-[state=active]:bg-[#FFECEC]'
            >
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {catMenu.map((Category) => (
          <TabsContent
            key={Category.value}
            value={Category.value}
            className='flex flex-wrap gap-5'
          >
            {Category.value === 'all' ? (
              RestoData?.menus.map((item) => (
                <MenuCart key={item.id} item={item} resto={RestoData} />
              ))
            ) : RestoData?.menus?.filter((menu) => menu.type === Category.value)
                .length > 0 ? (
              RestoData.menus
                .filter((menu) => menu.type === Category.value)
                .map((item) => (
                  <MenuCart key={item.id} item={item} resto={RestoData} />
                ))
            ) : (
              <div>Not Available</div>
            )}
          </TabsContent>
        ))}

        {RestoData.menus.length > 8 && (
          <div className='flex items-center justify-center'>
            <Button variant={'outline'} size={'buttonmore'}>
              Show More
            </Button>
          </div>
        )}
      </Tabs>
    </div>
  );
};

export default Menus;
