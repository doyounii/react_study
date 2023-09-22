//글 목록 출력
import React, { NavLink } from 'react-router-dom';

export const Articles = () => {
  return (
    <div>
        <h2>글 목록</h2>
        <ul>
            <ArticleItem id={1} />
            <ArticleItem id={2} />
            <ArticleItem id={3} />
        </ul>
    </div>
  )
};

const ArticleItem = ({ id }) => {
    const activeStyle = { color : 'deepink', fontSize : 24,};
    return (
        <li>
            <NavLink to={`/articles/${id}`} style={({ isActive }) => (isActive ? activeStyle : undefined)}> 
                게시글 {id} 번째 
            </NavLink>
        </li>
    )
}

export default Articles