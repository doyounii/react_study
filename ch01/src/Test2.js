
import React from 'react'
//rafce
//표현식과 내부스타일, 인라인 스타일링, 조건 연산자, if문을 활용하여 컴포넌트 만들기
const Test2 = () => {
    const name = "doyouni";
    return (
        <div className='App'>
            <hr />
            Test2
            <h2 className='title'>어세요세요~ {name}페이지입니덩</h2>
            <h3 style={{ 
                fontSize:"20px",
                backgroundColor: "deepskyblue",
            color: "#ffffff",
            }}>하이용</h3>
        </div>
    )
}

export default Test2