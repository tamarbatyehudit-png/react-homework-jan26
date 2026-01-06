type Props = {
    text: string;
};

function Title ({text}: Props) {
    return <h1> {text} </h1>
}

export default Title