import { useState } from "react";
import useCakeCount from "../hooks/useCakeCount";
const Counter = () => {
    const [amountOfCakes, setAmountOfCakes] = useState(0);
    const [message, setMessage] = useState("");

    // We can create a custom hook out of this useEffect
    // import it into this component
    // useEffect(()=>{
    //     console.log(amountOfCakes);
    // }, [amountOfCakes])
    //Once amount of cakes reaches 10
    const cakeLimiter = () => {
        if(amountOfCakes === 10){
            setMessage("Hey is that too much cake?")
        } else if(amountOfCakes > 15) {
            setMessage("You know what, you can never have too much cake. Its your birthday!!!!")
        }
        setAmountOfCakes((previousState)=>previousState+1);
    }
    useCakeCount(amountOfCakes)
    useCakeCount(message)
    return (
        <div>
            <h2>Happy birthday Gord!!</h2>
            {/* This will display how many times the button has been clicked */}
            <h2>Cakes for Gord🍰:{amountOfCakes}</h2>
            <button onClick={()=>cakeLimiter()}>Order more cakes!</button>
        </div>
    );
}

export default Counter;