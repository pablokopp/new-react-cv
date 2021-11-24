import "./App.scss";
import Header from "./containers/Header";
import WhoAmI from "./containers/WhoAmI";
import Footer from "./containers/Footer";
import WorkStudy from "./containers/WorkStudy";

function App() {
  return (
    <div className="App">
      <Header />
      <WhoAmI />
      <WorkStudy />
      <Footer />
    </div>
  );
}

export default App;
