import React, {useState} from 'react';

//muon xu dung hooks chi duocphesp xu dung trong function component
const Counter = () => {
    //tao ra state bang hooks userSate
    const [count, setCount] = useState(0);
    //count:chinh la state duowc khai bao
    //setCount: chinh la phuwong thuc (ham) thay doi sate count
    //gia tri 0 trong userSate la gia tri mac dinh gan cho state count

    const decrementNumber = () => {
        setCount(count + 1);
        //this.setState({count:this.state.count + 1});
    }
    const incrementNumber = () => {
        setCount(count - 1);
    }
    return(
        <>
            <h1>{count}</h1>
            <button onClick={decrementNumber}>+</button>
            <button onClick={incrementNumber}>-</button>
        </>
    )
}
export default React.memo(Counter);
