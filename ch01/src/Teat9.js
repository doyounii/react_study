import React, { useState } from 'react'

const Teat9 = () => {
    const [ message, setMessage ] = useState('');
    const [ color, setColor ] = useState('black');
    //이벤트 함수
    const onClickEnter =  () => setMessage("안녕하세요~! 환영합니다.");
    const onClickLeave = () => setMessage("잘가용~!");
    return (
        <div className='App'>
            <button onClick={onClickEnter}>입실</button>
            <button onClick={onClickLeave}>퇴실</button>
            <hr/>
            <h1>{message}</h1>
            <hr/>
            <button onClick={() => setColor('gold')}>금</button>
            <button onClick={() => setColor('gray')}>은</button>
            <button onClick={() => setColor('brown')}>동</button>
        </div>
    )
}

export default Teat9