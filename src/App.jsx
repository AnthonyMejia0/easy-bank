import Articles from "./components/Articles";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import WhyChoose from "./components/WhyChoose";

function App() {
  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Home />
      <WhyChoose />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
