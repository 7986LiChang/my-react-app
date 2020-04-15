/**
 * @file refsInFunction.js
 * @author: cdlichang1
 * @describe:
 * @create: 2020-04-15 16:10
 */
import React, {useRef} from 'react';

const UseRefInFunction = () => {
    const textInput = useRef(null);
    function handleClick() {
        textInput.current.focus();
    }
    return (
        <div>
            <input type="text" ref={textInput}/>
            <input type="button" value='Focus the text input' onClick={handleClick}/>
        </div>
    );
};

export default UseRefInFunction;