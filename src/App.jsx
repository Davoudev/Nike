import SuperQuality from "./sections/superQuality";
import Navbar from "./components/Navbar";
import OurPopularProduct from "./sections/ourPopularProduct";
import OverView from "./sections/overView";

const App = () => {
  return (
    <main>
      <Navbar />
      <section className="pr-0 ">
        <OverView />
      </section>
      <section>
        <OurPopularProduct />
      </section>
      <section>
        <SuperQuality />
      </section>
    </main>
  );
};
export default App;
