import SuperQuality from "./sections/superQuality";
import Navbar from "./components/Navbar";
import OurPopularProduct from "./sections/ourPopularProduct";
import OverView from "./sections/overView";
import Services from "./sections/Services";
import SpecialOffer from "./sections/SpecialOffer";
import Customers from "./sections/Customers";
import Updates from "./sections/Updates";
import Footer from "./sections/Footer";

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
      <section>
        <Updates />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
};
export default App;
