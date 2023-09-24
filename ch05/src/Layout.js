import React from "react";
import { Outlet, useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; //bootstrap
import "./Common.scss";

const Layout = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goHome = () => {
    navigate("/", { replace: true });
  };
  const goArticles = () => {
    navigate("/articles", { replace: true });
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" href="/" onClick={goHome}>
          Home
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={goHome}
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarSupportedContent"></div>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <Link class="nav-link" href="#" onClick={goBack}>
              뒤로가기
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/articles">
              게시판
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/login">
              로그인
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/mypage">
              마이페이지
            </Link>
          </li>
        </ul>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
