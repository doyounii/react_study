//객체의 구조를 그대로 활용한 구조 할당 
const Test5 = (props) => {
  return (
    <div className="App">
        <h2>저의 이름은 {props.myName} 입니동</h2>
        <h2>나이는 {props.age}세 이구용</h2>
        <h2>사는 곳은 {props.addr}이여요</h2>
        <hr/>
    </div>
  )
}

Test5.defaultProps = {
    myName : 'doyouni',
    age : 25,
    addr : '동작구',
}
export default Test5