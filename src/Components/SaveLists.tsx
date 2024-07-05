import { useCallback } from "react";
import QuoteCard from "./QuoteCard";
import { BiTrash } from "react-icons/bi";

const SaveLists = () => {
  const data = localStorage.getItem("quotes");
  let listArray;
  if (data === null) {
    listArray = [];
  } else {
    listArray = JSON.parse(data);
  }
  if (listArray.length === 0) {
    return <div className="nolist">There is no Saved List Left :)</div>;
  }
  return (
    <div className="lists">
      {listArray.map(({ id, quote }: { id: string; quote: string }) => (
        <SaveList key={id} id={id} quote={quote} />
      ))}
    </div>
  );
};

const SaveList = ({ id: QuoteId, quote }: { id: string; quote: string }) => {
  const deleteHandler = useCallback(() => {
    const data = localStorage.getItem("quotes");
    console.log(data);
    let listArray;
    if (data === null) {
      listArray = [];
    } else {
      listArray = JSON.parse(data);
    }
    const quoteItems = listArray.filter(
      (quoteItem: { id: string; quote: string }) => {
        return quoteItem.id !== QuoteId;
      }
    );
    localStorage.setItem("quotes", JSON.stringify(quoteItems));
    window.location.reload();
  }, []);
  return (
    <div className="wrapper list">
      <QuoteCard activeData={quote} />
      <div className="quote-tool">
        <button className="twitter icon-btn" onClick={deleteHandler}>
          <BiTrash />
        </button>
      </div>
    </div>
  );
};

export default SaveLists;
