import { v4 as uuidv4 } from "uuid";
import React from "react";
import { GiSaveArrow } from "react-icons/gi";
interface SaveQuoteProps {
  activeData: string;
}
const SaveQuote: React.FC<SaveQuoteProps> = ({ activeData }) => {
  const HandleClick = () => {
    const obj = {
      id: uuidv4(),
      quote: activeData,
    };
    const data = localStorage.getItem("quotes");
    let listArray;
    if (data === null) {
      listArray = [];
    } else {
      listArray = JSON.parse(data);
    }
    listArray.push(obj);
    localStorage.setItem("quotes", JSON.stringify(listArray));
    window.location.reload();
  };
  return (
    <li onClick={HandleClick}>
      <a href="#saveList">
        <GiSaveArrow />
      </a>
    </li>
  );
};

export default SaveQuote;
