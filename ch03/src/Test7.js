import React , { useReducer } from 'react'

const Test7 = ({ step =1, min =0, max =10}) => {
    const initState = { count :0}; //useReducer를 위한 초기화
    const reducer = ( state, action ) => {
        switch(action.type) {
            case "COUNTUP" :
                return state.count < action.max ? { count: state.count + action.step } : state;
            case "COUNTDOWN" :
                return state.count > action.min ? { count: state.count - action.step } : state;
            case "RANDOM" :
                return {
                    count : Math.floor(Math.random() * (action.max - action.min)) + action.min,
                }
            case "RESET" :
                return initState;
            default : throw new Error("action.type 에러 : "+action.type);
        }
    }
    const [ state, dispatch ] = useReducer(reducer, initState);
    return (
        <div>
            <p>단계 : {step}, 최대 : {max}, 최소 : {min}</p>
            <h2>현재값 : {state.count}</h2>
            <hr />
            <button onClick={() => dispatch({ type: "COUNTUP", step, max})}>증가</button>
            <button onClick={() => dispatch({ type: "COUNTDOWN", step, min})}>감소</button>
            <button onClick={() => dispatch({ type: "RANDOM", min, max})}>랜덤</button>
            <button onClick={() => dispatch({ type: "RESET"})}>초기화</button>
        </div>
    )
}

export default Test7