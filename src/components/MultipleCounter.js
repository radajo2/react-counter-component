import CounterGroup from "./CounterGroup";
import CounterSizeGenerator from "./CounterSizeGenerator";
import {useState} from "react";

function MultipleCounter (){
    const [counterSize, setCounterSize] = useState(0);

    function updateCounterSize(counterSize){
        setCounterSize(counterSize);

    }

return (
    <div>
        <CounterSizeGenerator updateCounterSize = {updateCounterSize}></CounterSizeGenerator>
        <CounterGroup counterSize = {counterSize}></CounterGroup>
    </div>

);



}
export default MultipleCounter;