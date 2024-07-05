import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
interface QuoteCardProps {
  activeData: string;
}
const QuoteCard: React.FC<QuoteCardProps> = ({ activeData }) => {
  return (
    <>
      <div className="quote-area">
        <p className="quote">
          <FaQuoteLeft
            style={{ display: "inline-block", marginInline: "10px" }}
          />
          <span>{activeData}</span>
          <FaQuoteRight
            style={{ display: "inline-block", marginInline: "10px" }}
          />
        </p>
      </div>
    </>
  );
};

export default QuoteCard;
