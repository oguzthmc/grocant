import Hero from '../components/home/hero';
import Information from '../components/home/information';
import RecentProducts from '../components/home/recentProducts';

function AppHome() {
  return (
    <div className="container">
      <Hero />
      <RecentProducts />
      <Information />
    </div>
  );
}

export default AppHome;
