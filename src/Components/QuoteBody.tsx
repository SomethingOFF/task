import QuoteCard from "./QuoteCard";
import axios from "axios";
import { FiLoader } from "react-icons/fi";
import { useEffect, useState } from "react";
import SaveQuote from "./SaveQuote";
import Copy from "./Copy";
import Twitter from "./Twitter";
const QuoteBody = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [activeData, setData] = useState<string>("");
  const HandleQuote = async () => {
    try {
      setLoading(true);
      const url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      setLoading(false);
      throw new Error("we got error");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    HandleQuote();
  }, []);
  return (
    <>
      <div className="content-wrapper">
        <div className="content">
          {loading ? (
            <>
              {[...new Array(3)].map((_, index) => (
                <div
                  className="content-scaleton skeleton skeleton-text"
                  key={index}
                ></div>
              ))}
            </>
          ) : (
            <QuoteCard activeData={activeData} />
          )}
        </div>
        <div className="buttons">
          <div className="features">
            <ul>
              <SaveQuote activeData={activeData} />
              <Copy activeData={activeData} />
              <Twitter activeData={activeData} />
            </ul>
            <button onClick={HandleQuote}>
              {loading ? <FiLoader className="loader" /> : "New Quote"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuoteBody;
