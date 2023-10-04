import Navbar from "./components/Navbar";
import OverView from "./sections/overView";

const App = () => {
  return (
    <main>
      <Navbar />
      <section className="pr-0 ">
        <OverView />
      </section>
    </main>
  );
};
export default App;
