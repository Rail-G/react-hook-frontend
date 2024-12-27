import { useState } from "react";
import { TestPage } from "./TestPage";

export function MainTestPage() {
    const [value, setValue] = useState({value1: false, value2: false, value3: false})
    const onClick = (val: 'value1' | 'value2' | 'value3') => setValue((prev) => ({...prev, [val]: !prev[val]}))
    return (
        <div className="test-page">
            <div className="page ok">
                {value.value1 && <TestPage url={import.meta.env.VITE_TESTPAGE_OK_URL}/>}
                <button onClick={() => onClick('value1')}>Нажми на меня</button>
                
            </div>
            <div className="page error">
                {value.value2 && <TestPage url={import.meta.env.VITE_TESTPAGE_ERROR_URL}/>}
                <button onClick={() => onClick('value2')}>Нажми на меня</button>
                
            </div>
            <div className="page load">
                {value.value3 && <TestPage url={import.meta.env.VITE_TESTPAGE_LOADING_URL}/>}
                <button onClick={() => onClick('value3')}>Нажми на меня</button>
                
            </div>
        </div>
    )
}
