import React from 'react'

const Test3 = () => {
    const season = ["봄", "여름", "가을", "겨울"];
    return (
        <div className='App'>
            <h3>season 출력</h3>
            <ul>
            {
                season.map((data, idx) => (
                    <li>{idx +1 } : {data }</li>
                ))
            }
            </ul>
        </div>
    )
}

export default Test3