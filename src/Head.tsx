import React from "react";
import WhiteJobantennaIcon from "./Icon/WhiteJobantennaIcon.svg";
import "./style.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Head() {
  return (
    <div className="wrap">
      <header className="head-fixed">
        <div className="head-bk">
          <div className="head">
            <div className="head-left">
              <img src={WhiteJobantennaIcon} className="head-left-icon" />
              <Link to="#" className="head-left-search">
                求人を探す
              </Link>
              <Link to="#" className="head-left-search">
                会社を探す
              </Link>
              <Link to="#" className="head-left-search">
                転職相談をする
              </Link>
              <Link to="#" className="head-left-trouble">
                採用にお困りの企業様へ
              </Link>
            </div>
            <div className="head-right">
              <Link
                to="/register"
                className="head-right-signup head-right-icon"
              >
                会員登録
              </Link>
              <Link to="/login" className="head-right-login head-right-icon">
                ログイン
              </Link>
              <Link to="#" className="head-right-menu head-right-icon">
                メニュー
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Head;
