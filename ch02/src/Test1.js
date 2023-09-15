//이벤트 == 사용자가 특정 요소를 건드리는 사건
//이벤트의 종류 == Mouse, keyboard, Form, Touch, Image, Video, File,,,
//리액트는 해당 개체(특정 요소)의 성격에 따라 무수히 많은 이벤트를 지원
//https://facebook.github.io/react/docs/events.html

import React, { Component} from 'react'
class Test1 extends Component {
    state = {message : ''} 
    render() {
        return (
            <div className='App'>
                <h1>이벤트</h1>
                <input type='text' name='message' placeholder='메시지 입력' 
                value={this.state.message}
                onChange={ (event) => {
                    console.log(event.target.value);
                    this.setState({message: event.target.value});
                }}
                />
                <button onClick={() => {
                    this.setState({message: ''})
                }}>지우기</button>
                <button onClick={() => {
                    alert(this.state.message+"님 확인을 누르셨군요!")
                    if ( this.state.message==="doyouni") {
                        alert("doyouni님 방가방가")
                    } else {
                        alert("doyouni님이 아닙니다!")
                    }
                }}>확인</button>
            </div>
        )
    }
}

export default Test1
