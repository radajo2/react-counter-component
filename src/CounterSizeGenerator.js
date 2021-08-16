import {useState} from "react";

function CounterSizeGenerator (props){
    const [size, setSize] = useState(0);

    function handleChangeSize(event){
        setSize(parseInt(event.target.value));

        props.updateCounterSize(parseInt(event.target.value))

    }

    return(
        <div>
            <form>
            <span>Size: </span>
            <input type = "number" min="0" value ={size} onChange = {handleChangeSize}></input>
            </form>
        </div>

    );
}
export default CounterSizeGenerator;