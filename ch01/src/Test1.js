import './App.css';
//4. Test1 컴포넌트 생성 : 컴포넌트의 이름은 대문자로 시작
//5. 표현식 if 조건 연산
//6. 내부 스타일링
//7. 인라인 스타일링
function Test1() {
    const name = "doyouni";
    const param = undefined;
    const style = {
        backgroundColor:"deeppink",
        color:"white",
        fontSize:"32px",
        fontWeight:"bold",
        padding:10
    }
    return (
        <div className="App">
        <h2 className='title'>{name} 페이지요우</h2>
        <h3 className='item_tit'>{name === 'doyouni'? '천재' : '둔재'}</h3>
        <h4 className='cate_tit'>{ param || <span>천재</span> }</h4>
        <p style={style}>여기는 내부 스타일이욜</p>
        <div style={{
            backgroundColor: "deepskyblue",
            color: "#ffffff",
            fontSize:"20px",
        }}>{name} 인라인 스타일입니동 </div>
        <p className='comment'>test여요</p>
        </div>
    );
}

export default Test1;
