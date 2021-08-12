import React, {useState} from 'react';
import './App.css';

// export type inputValueType = {
//     value: number
// }

function App() {

    let [value, setValue] = useState<number>(0)

    return (
        <div className={'main_wrapper'}>
            <input value={value} className={'input'}></input>
            <div className={'operations_wrapper'}>
                <button>/</button>
                <button>*</button>
                <button>+</button>
                <button>-</button>
            </div>
            <div className={'buttons_wrapper'}>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>0</button>
                <button>.</button>
                <button>=</button>
            </div>
        </div>
    )
}

export default App