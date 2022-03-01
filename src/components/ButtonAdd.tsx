import React from "react";



interface Props {
  imageData: {
    alt_description: string;
  };
  children: React.ReactNode;
}

export default function ButtonAdd(props:Props) {
  //const [count, setCount] = useState("");
  return (
    <div>
      <p>You clicked times</p>
      <button onClick={() => console.log(props.children)}>Click me</button>
    </div>
  );
}
