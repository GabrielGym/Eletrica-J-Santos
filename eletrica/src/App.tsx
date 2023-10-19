import "../src/styles/GlobalStyles.css"
import { Header } from "./components/Header";
import { IntroductionSection } from "./components/IntroductionSection";

function App() {
  return (
    <div>
      <Header/>
      <main>
        <IntroductionSection/>
      </main>
    </div>
  );
}

export default App;
