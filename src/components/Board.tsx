import "./Board.css";

interface Props {
  text: string;
}

function Board(props: Props) {
  return (
    <div className="card">
      <p>{props.text}</p>
      <button className="btn">Se tavla</button>
    </div>
  );
}

export default Board;
