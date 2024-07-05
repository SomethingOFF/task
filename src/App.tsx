import { BsArrowUp } from "react-icons/bs";
import QuoteBody from "./Components/QuoteBody";
import SaveLists from "./Components/SaveLists";
function App() {
  return (
    <>
      <div className="app" id="home">
        <div className="wrapper">
          <header>Quote of the Day</header>
          <QuoteBody />
        </div>
      </div>
      <div className="app">
        <div id="saveList">
          <div className="savelist-header">
            <h1>Save Lists</h1>
            <a href="#home">
              <button className="Savelist-btn">
                Home <BsArrowUp />
              </button>
            </a>
          </div>
          <SaveLists />
        </div>
      </div>
    </>
  );
}

export default App;
