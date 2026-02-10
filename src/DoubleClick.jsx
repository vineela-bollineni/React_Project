export default function DoubleClick()
{
    function doubleclick()
    {
        return alert("You Double clicked on me")
    }
    return <button onDoubleClick={doubleclick}>Double click!</button>
}