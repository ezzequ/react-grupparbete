import "./Note.css";

interface Props {
  text: string;
  onRemove: () => void;
}

function Note(props: Props) {
  return (
    <div className="card">
      <p className="remove-btn" onClick={props.onRemove}>
        ❌
      </p>
      <p>{props.text}</p>
    </div>
  );
}

export default Note;
