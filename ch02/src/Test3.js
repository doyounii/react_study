//로그인 창 : 아이디와 비밀번호를 입력한 후,,,아이디가 admin이고, 비밀번호가 1234인 경우 로그인 메시지 출력
// 아니면,, "아이디 또는 비밀번호가 일치하지 않습니다." 메시지 출력
//그리고, 성공과 실패시 모두 원래 폼을 초기화하여 다시 로딩 시킴

import React, { useState } from 'react'

const Test3 = () => {
    const [ form, setForm ] = useState({
        id:'',
        pw:'',
    })
    const {id,pw} = form; //form 객체 분리

    //이벤트 함수 기술
    const onChange= (e) => {
        const nextForm = {
            ...form,
            [e.target.name] : e.target.value
        }
        setForm(nextForm);
    }
    const onClick = (e) => {
        if (id === 'admin' && pw ==='1234') {
            alert("로그인 환영");
        } else {
            alert("아이디 또는 비밀번호가 일치하지 않습니다.")
        }
        setForm({
            id:'',
            pw:'',
        });
    }
    return (
        <div className='App'>
            <h3>로그인 실습</h3>
            <input type='text' name='id' placeholder='아이디입력'
                value={id} onChange={onChange}/>
            <input type='text' name='pw' placeholder='비밀번호입력'
                value={pw} onChange={onChange}/>
            <button onClick={onClick}>로그인</button>
        </div>
    )
}

export default Test3
