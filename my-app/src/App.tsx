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
            <div>
                <button>1</button>
                <button>2</button>
                <button>3</button>
            </div>
        </div>
    )
}

export default App