const GrandChild = (props: {msg: string}) => {
    return <p>{props.msg}</p>;
};


const Child = (props: {msg:string}) => {
    return <GrandChild msg={props.msg} />;
};


export const Saba = () => {
    return (
        <section>
            <h2>Family message:</h2>
            <Child msg= "Hello from Grandpa"/>
        </section>
    );
};