function Button () {
    const handleClick = () => {
        console.log("Button clicked");
    };
    return (
        <button onClick={handleClick}>
            Click here
        </button>
    );
}
export default Button;


