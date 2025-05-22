import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Project from "./components/Projects";
function App() {
  return (
    <main className="w-full h-auto">
      <Header />
      <Intro />
      <Project/>
      <Footer/>
    </main>
  );
}

export default App;
