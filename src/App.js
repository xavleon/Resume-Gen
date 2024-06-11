import "./App.css";
import Footer from "./components/Layouts/Footer";
import Header from "./components/Layouts/Header";
import Navbar from "./components/Layouts/Navbar";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <Navbar />

      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
