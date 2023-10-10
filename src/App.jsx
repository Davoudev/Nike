import SuperQuality from "./sections/superQuality";
import Navbar from "./components/Navbar";
import OurPopularProduct from "./sections/ourPopularProduct";
import OverView from "./sections/overView";
import Services from "./sections/Services";
import SpecialOffer from "./sections/SpecialOffer";
import Customers from "./sections/Customers";

const App = () => {
  return (
    <main>
      <Navbar />
      <section>
        <OverView />
      </section>
      <section>
        <OurPopularProduct />
      </section>
      <section>
        <SuperQuality />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <SpecialOffer />
      </section>
      <section>
        <Customers />
      </section>
    </main>
  );
};
export default App;
