export default function ClickButton()
{
    function handleonclick()
    {
        return alert("You clicked me!")
    }
    return(
        <button onClick={handleonclick}>Click Me</button>
    )
}