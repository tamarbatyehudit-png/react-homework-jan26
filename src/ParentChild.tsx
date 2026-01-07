


export const Child = (props: { userName: string }) => {
  return (
    <div>
      <h2>I am child component</h2>
      <p>Hello, {props.userName}</p>
    </div>
  );
};

export const ParentChild = () => {
  const text = "Hi Mister God, it's Anna";

  return (
    <div>
      <h2>I am parent component</h2>
      <Child userName={text} />
    </div>
  );
};
