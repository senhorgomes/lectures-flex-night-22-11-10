import { useEffect } from "react";
const useCakeCount = (passedInState) => {
    // We need to somehow grab the state from Counter.js
    // const [amountOfCakes, setAmountOfCakes] = useState(0);
    useEffect(()=>{
        console.log(passedInState);
    }, [passedInState])

}
// function useCakeCount(passedInState) {
//     // We need to somehow grab the state from Counter.js
//     // const [amountOfCakes, setAmountOfCakes] = useState(0);
//     useEffect(()=>{
//         console.log(passedInState);
//     }, [passedInState])

// }

export default useCakeCount;