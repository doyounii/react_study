//구조 분할(분리)
const Test6 = (props) => {
    const {myName, age,addr} = props; //객체의 구조 분할
    //const [myName, age,addr] = props; //배열의 구조 분할
  return (
    <div className="App">
        <h2>저의 이름은 {myName} 입니동</h2>
        <h2>나이는 {age}세 이구용</h2>
        <h2>사는 곳은 {addr}이여요</h2>
        <hr/>
    </div>  )
}

export default Test6