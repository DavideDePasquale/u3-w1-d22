import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import AllTheBook from "./components/AllTheBook";

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <AllTheBook />
      <MyFooter />
    </>
  );
}

export default App;
