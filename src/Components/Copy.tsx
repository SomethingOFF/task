import { LuCopy } from "react-icons/lu";

interface CopyProps {
  activeData: string;
}

const Copy = ({ activeData }: CopyProps) => {
  const onClickHandler = () => {
    navigator.clipboard.writeText(activeData);
    alert("copied to clipboard");
  };
  return (
    <li className="copy icon-btn" onClick={onClickHandler}>
      <LuCopy />
    </li>
  );
};

export default Copy;
