import React, { useState } from 'react'
//객체의 배열 순회하기
const Test2 = () => {
    const [ names, setNames ] = useState([
        { id:1, text:'박진권'},
        { id:2, text:'신승원'},
        { id:3, text:'백준철'},
        { id:4, text:'구예진'}
    ]);
    const [ inputText, setInputText ] = useState('');
    const [ nextId, setNextId ] = useState(5);
    const onChange = (e) => { setInputText(e.target.value ); }
    const onClick = (e) => {
        const nextNames = names.concat({
            //하나의 객체 생성
            id : nextId, 
            text : inputText
        });
        setNextId(nextId+1); //아이디를 하나 증가
        setNames(nextNames); //객체를 배열에 추가
        setInputText('') //제출 후에 input칸 리셋하기
    }
    //더블클릭하면 제거하기  => 더블클릭하는 순간 걔 뺴고 나머지 애들로만 배열 재생성..?
    // => 조건을 주고 원하는 값만 뽑아오기 == filter
    const onRemove = (id) => {
        const nextNames = names.filter(data => data.id !== id);
        console.log(nextNames);
        setNames(nextNames);
    }

    const namesList = names.map((data)=><li key={data.id} onDoubleClick={() => onRemove(data.id)}> {data.id} : {data.text} </li>)
    return (
        <div className='App'>
            <input value={inputText} onChange={onChange}></input>
            <button onClick={onClick}>추가</button>
            <ul className='list'>{namesList}</ul>
        </div>
    )
}

export default Test2