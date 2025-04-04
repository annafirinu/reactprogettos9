import "bootstrap/dist/css/bootstrap.min.css";
import "bs-icon/icons.css";
import "./Style.css";
import NavBar from "./Components/NavBar";

import Footer from "./Components/Footer";
import Film from "./Components/Film";
import Film2 from "./Components/Film2";
import Film3 from "./Components/Film3";

function App() {
  return (
    <div className="bg-dark">
      <div className="backgroundColor">
        <header>
          <NavBar />
        </header>
        <main>
          <Film title="Harry Potter" />
          <Film2 title="StarWars" />
          <Film3 title="Legion" />
        </main>
      </div>
      <footer className="colorfooter marginfooter">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
