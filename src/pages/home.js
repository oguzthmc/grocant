import Hero from '../components/home/hero';
import Information from '../components/home/information';
import ProductCategories from '../components/home/productCategories';
import RecentProducts from '../components/home/recentProducts';
import SaleProducts from '../components/home/saleProducts';

function AppHome() {
  return (
    <div className="container">
      <Hero />
      <RecentProducts />
      <Information />
      <ProductCategories />
      <SaleProducts />
    </div>
  );
}

export default AppHome;
