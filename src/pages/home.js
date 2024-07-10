import Hero from '../components/home/hero';
import Information from '../components/home/information';
import ProductCategories from '../components/home/productCategories';
import RecentProducts from '../components/home/recentProducts';

function AppHome() {
  return (
    <div className="container">
      <Hero />
      <RecentProducts />
      <Information />
      <ProductCategories />
    </div>
  );
}

export default AppHome;
