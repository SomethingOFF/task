import { FaXTwitter } from "react-icons/fa6";
interface TwitterProps {
  activeData: string;
}
const Twitter = ({ activeData }: TwitterProps) => {
  return (
    <li className="twitter icon-btn">
      <a
        className="twitter-share-button "
        href={`https://twitter.com/intent/tweet?text=${activeData}`}
      >
        <FaXTwitter />
      </a>
    </li>
  );
};

export default Twitter;
