import MainMenu from "./components/MainMenu";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <img src="logo.svg" alt="" />
      <Navbar />
      <div className="container xl mx-auto">
        <MainMenu />
      </div>
    </>
  );
}

export default App;
