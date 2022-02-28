import "./Board.css";

interface Props {
  text: string;
  onRemove: () => void;
}

function Board(props: Props) {
  return (
    <div className="card">
      <p className="remove-btn" onClick={props.onRemove}>
        ❌
      </p>
      <p>{props.text}</p>
      <button className="btn">Go to board</button>
    </div>
  );
}

export default Board;
