import "./App.scss";

import Footer from "./containers/Footer";
import Header from "./containers/Header";
import LanguageChanger from "./components/LanguageChanger";
import { LanguageProvider } from "./context/Language";
import Projects from "./containers/Projects";
import WhoAmI from "./containers/WhoAmI";
import WorkStudy from "./containers/WorkStudy";

function App() {
  return (
    <LanguageProvider>
      <Header />
      <LanguageChanger />
      <WhoAmI />
      <WorkStudy />
      <Projects />
      <Footer />
    </LanguageProvider>
  );
}

export default App;
