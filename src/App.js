import "./App.scss";
import Header from "./containers/Header";
import WhoAmI from "./containers/WhoAmI";
import Footer from "./containers/Footer";
import WorkStudy from "./containers/WorkStudy";
import { LanguageProvider } from "./context/Language";
import LanguageChanger from "./components/LanguageChanger";

function App() {
  return (
    <LanguageProvider>
      <Header />
      <LanguageChanger />
      <WhoAmI />
      <WorkStudy />
      <Footer />
    </LanguageProvider>
  );
}

export default App;
