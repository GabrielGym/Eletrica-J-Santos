import "../src/styles/GlobalStyles.css"
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
      </main>
    </div>
  );
}

export default App;
