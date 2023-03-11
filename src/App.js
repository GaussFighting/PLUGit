import Navigation from "./components/Navigation";
import About from "./components/About";
import Offers from "./components/Offers";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navigation />
      <div className="position-relative pt-5 mb-5 content">
        <div className="container  ">
          <div className="companies position-absolute"> </div>
          <About />
          <Offers />
        </div>
      </div>
      <div className="companies-horizontal"></div>
      <Contact />
      {/* <Footer /> */}
    </>
  );
};

export default App;
