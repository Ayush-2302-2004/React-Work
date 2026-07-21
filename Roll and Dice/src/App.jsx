import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
import "./App.css";
import Rolldice from "./Components/Rolldice";

function App() {
  return (
    <>
      <Rolldice />
    </>
  );
}

export default App;
