import React from "react";
import "./style.css";
import arrow from "./arrow.svg";

function login() {
  return (
    <body>
      <div className="wrap">
        <div className="login">
          <div className="login-back">
            <h1 className="login-text">ログイン</h1>
            <div className="login-form">
              <div className="login-form-left">
                <div className="login-form-id">
                  <p className="login-form-id-text">
                    ログインID(メールアドレス)
                  </p>
                  <input type="text" className="login-form-input" />
                </div>
                <div className="login-form-pass">
                  <p className="login-form-pass-text">パスワード</p>
                  <input type="text" className="login-form-input" />
                </div>
                <div className="login-form-forgetpass">
                  <a className="login-form-forgetpass-text" href="#">
                    パスワードをお忘れの方へ
                  </a>
                  <img src={arrow} />
                </div>
                <p className="login-form-permission">
                  <span className="login-form-permission-message">
                    <a className="login-form-permission-text" href="#">
                      利用規約
                    </a>
                    と
                  </span>
                  <span className="login-form-permission-message">
                    <a
                      className="login-form-permission-text login-form-permission-message"
                      href="#"
                    >
                      プライバシーポリシー
                    </a>
                    に
                  </span>
                  <span className="login-form-permission-message">
                    同意の上、
                  </span>
                  <span className="login-form-permission-message">
                    ご利用ください。
                  </span>
                </p>
                <button className="login-form-agree-button">
                  同意してログイン
                </button>
              </div>
              <div className="login-form-right">
                <p className="login-form-facebook_text">
                  Facebookアカウントで登録された方
                </p>
                <p className="login-form-permission">
                  <span className="login-form-permission-message">
                    <a className="login-form-permission-text" href="#">
                      利用規約
                    </a>
                    と
                  </span>
                  <span className="login-form-permission-message">
                    <a
                      className="login-form-permission-text login-form-permission-message"
                      href="#"
                    >
                      プライバシーポリシー
                    </a>
                    に
                  </span>
                  <span className="login-form-permission-message">
                    同意の上、
                  </span>
                  <span className="login-form-permission-message">
                    ご利用ください。
                  </span>
                </p>
                <button className="login-form-facebook_button">
                  Facebookでログイン
                </button>
              </div>
            </div>

            <div className="login-beginner">
              <h2 className="login-beginner-title">まだ登録されていない方</h2>
              <button className="login-beginner-signup">
                会員登録
                <span className="login-beginner-signup-option">(無料)</span>
              </button>
              <a href="#" className="login-beginner-text">
                はじめての方へ
              </a>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default login;
