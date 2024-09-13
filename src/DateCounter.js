import { useReducer } from "react";
function reducer(state, action) {
    debugger
    console.log(state, action);
    switch (action.type) {
        case "INC":
            return { ...state, count: state.count + state.step };
        case "DEC":
            return { ...state, count: state.count - state.step };
        case "setCount":
            return { ...state, count: action.payload }
        case "setStep":
            return { ...state, step: action.payload }
            case "setReset":
            return{step: 1, count:0}
        default:
            throw new Error("Invalid operation")
    }

}
function DateCounter() {
    //   const [count, setCount] = useState(0);

    const initialState = { count: 0, step: 1 }
    const [state, dispatch] = useReducer(reducer, initialState)
    const { count, step } = state;

    //   const [step, setStep] = useState(1);

    // This mutates the date object.
    const date = new Date();
    date.setDate(date.getDate() + count);

    const dec = function () {
        debugger
        // setCount((count) => count - 1);
        // setCount((count) => count - step);
        dispatch({ type: "DEC" })
        console.log('DEC');

    };

    const inc = function () {
        // setCount((count) => count + 1);
        // setCount((count) => count + step);
        dispatch({ type: "INC" })
        console.log('INC');


    };

    const defineCount = function (e) {
        dispatch({ type: "setCount", payload: Number(e.target.value) });
    };

    const defineStep = function (e) {
        // setStep(Number(e.target.value));
        dispatch({ type: "setStep", payload: Number(e.target.value) })
    };

    const reset = function () {
        dispatch({type: "setReset"})
        // setCount(0);
        // setStep(1);
    };

    return (
        <div className="counter">
            <div>
                <input
                    type="range"
                    min="0"
                    max="10"
                    value={step}
                    onChange={defineStep}
                />
                <span>{step}</span>
            </div>

            <div>
                <button onClick={dec}>-</button>
                <input value={count} onChange={defineCount} />
                <button onClick={inc}>+</button>
            </div>

            <p>{date.toDateString()}</p>

            <div>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    );
}
export default DateCounter;