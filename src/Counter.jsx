/*Hooks-15 
1. useState
   const[value,setValue]=useState(initialValue);*/
export default function Counter()
{
    let count=0
    function inccount()
    {
        count+=1
        console.log(count) 
    }
    return (
         <div>
            <button onClick={inccount}>Click Me!</button>
            <h1>Count={count}</h1>
         </div>
    )
}