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
    </div>
  );
}

export default Board;
