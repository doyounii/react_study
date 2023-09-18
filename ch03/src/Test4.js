import React, { useEffect , useRef } from 'react'
//useEffect == 해당 이벤트를 진행하고, 난 후에 실행되어야할 내용을 기술하는 Hook
//로그인 버튼 제출 후에 커서가 다시 inpuRef로 간다

const Test4 = () => {
    const inputRef = useRef();
    useEffect(() => {
        console.log(inputRef.current.value);
        inputRef.current.focus();
    }, []);
    const loginPro = (e) => {
        alert(`환영합니다. ${inputRef.current.value}님~! `);
        inputRef.current.focus();
        console.log(inputRef.current.value);
    }
    return (
        <div>
            <header>
                <fieldset>
                    <input ref={inputRef} type='text' placeholder='id input' />
                </fieldset>
                <button onClick={loginPro}>Login</button>
            </header>
        </div>
    )
}

export default Test4