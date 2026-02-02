import Header from '@/layout/header/page';
import Hero from './components/Hero/page';
import Feature from './components/features/page';
import RecommendResto from './components/recommend-resto/page';
import Footer from '@/layout/footer/page';

const Home = () => {
  return (
    <div className='h-1000'>
      <Header />
      <Hero />
      <div className='custom-container flex flex-col gap-12 py-12'>
        <Feature />
        <RecommendResto />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
