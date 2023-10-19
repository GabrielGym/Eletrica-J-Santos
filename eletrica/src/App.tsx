import "../src/styles/GlobalStyles.css"
import { AboutSection } from "./components/AboutSection";
import { CategoriesSection } from "./components/CategoriesSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { IntroductionSection } from "./components/IntroductionSection";
import { ProductsSection } from "./components/ProductsSection";

function App() {
  return (
    <div>
      <Header/>
      <main>
        <IntroductionSection/>
        <ProductsSection/>
        <CategoriesSection/>
        <AboutSection/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
