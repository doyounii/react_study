//props 쓰지 않고 받을 때부터 분리해서 받기 == 받을 때부터 비구조 할당
const Test7 = ({myName, age, addr}) => {
  return (
    <div className="App">
        <h3>비구조 할당</h3>
        <h2>저의 이름은 {myName} 입니동</h2>
        <h2>나이는 {age}세 이구용</h2>
        <h2>사는 곳은 {addr}이여요</h2>
        <hr/>
    </div> 
  )
}

export default Test7