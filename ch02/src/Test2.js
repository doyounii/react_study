import React, { useState } from 'react'

const Test2 = () => {
    const [ form, setForm ] = useState({
        username : '',
        message : '',
    });
    const { username, message } = form; //form 객체 분리
    //이벤트 함수 기술
    const onChange = (e) => { //onChange 이벤트 기술
        const nextForm = { //form 객체 
            ...form,
            [e.target.name] : e.target.value
        }
        setForm(nextForm);    
    };
    const onClick = () => {
        alert("당신의 이름 : "+username+ " 메시지 : "+message);
        setForm({
            username:'',
            message:'',
        });
    };
    const onKeyPress= (e) => { //Enter Key 입력시 onClick 이벤트 발생
        if (e.key==='Enter') {
            onClick();
        }
    };
    return (
        <div className='App'>
            <h1>복수의 컨트롤 이벤트</h1>
            <input type='text' name = 'username' placeholder='이름 입력' 
                value={username} onChange={onChange}
            />
            <input type='text' name = 'message' placeholder='메시지 입력'
                value={message} onChange={onChange} onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    )
}

export default Test2
/*import React, { useState } from 'react'

const Test2 = () => {
    const [ form, setForm ] = useState({
        username : '',
        message : '',
    });
    const [ username, message ] = useState(form); //form 객체 분리
    //이벤트 함수 기술
    const onChange = (e) => { //onChange 이벤트 기술
        const nextForm = { //form 객체 
            ...form,
            [e.target.name] : e.target.value
        }
        setForm(nextForm);    
    };
    const onClick = () => {
        alert("당신의 이름 : "+form.username+ "메시지 : "+form.message);
        setForm({
            username:'',
            message:'',
        });
    };
    const onKeyPress= (e) => { //Enter Key 입력시 onClick 이벤트 발생
        if (e.key==='Enter') {
            onClick();
        }
    };
    return (
        <div className='App'>
            <h1>복수의 컨트롤 이벤트</h1>
            <input type='text' name = 'username' placeholder='이름 입력' 
                value={form.username} onChange={onChange}
            />
            <input type='text' name = 'message' placeholder='메시지 입력'
                value={form.message} onChange={onChange} onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    )
}

export default Test2*/
