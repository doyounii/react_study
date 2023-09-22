import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
    const navigate = useNavigate();
    const goBack = () => { navigate(-1); };
    const goHome = () => { navigate('/', {replace : true}); };
    const goArticles = () => { navigate('/articles', { replace : true})};
    return (
        <div>
            <header style={{ backgroundColor : "#ececec", padding : 20, fontSize: 24 }}>
                <button onClick={goBack}>뒤로가기</button>
                <button onClick={goHome}>홈으로</button>
                <button onClick={goArticles}>게시판</button>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout