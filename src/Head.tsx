import React from "react";
import WhiteJobantennaIcon from "./Icon/WhiteJobantennaIcon.svg";
import "./style.css";

function Head() {
  return (
    <div className="wrap">
      <header className="head-fixed">
        <div className="head-bk">
          <div className="head">
            <div className="head-left">
              <img src={WhiteJobantennaIcon} className="head-left-icon" />
              <a href="#" className="head-left-search">
                求人を探す
              </a>
              <a href="#" className="head-left-search">
                会社を探す
              </a>
              <a href="#" className="head-left-search">
                転職相談をする
              </a>
              <a href="#" className="head-left-trouble">
                採用にお困りの企業様へ
              </a>
            </div>
            <div className="head-right">
              <a href="#" className="head-right-signup head-right-icon">
                会員登録
              </a>
              <a href="#" className="head-right-login head-right-icon">
                ログイン
              </a>
              <a href="#" className="head-right-menu head-right-icon">
                メニュー
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Head;
