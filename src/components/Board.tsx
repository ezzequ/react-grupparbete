import "./Board.css";

interface Props {
  text: string;
}

function Board(props: Props) {
  return (
    <div>
      <button className="btn">{props.text}</button>
    </div>
  );
}

export default Board;
