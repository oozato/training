import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import arrow from "./Icon/arrow.svg";

function login() {
  return (
    <div className="login">
      <div className="login-container">
        <div className="login-container-back">
          <h1 className="login-title">ログイン</h1>
          <div className="login-form">
            <div className="login-form-left">
              <div className="login-form-id">
                <p className="login-form-id-text">ログインID(メールアドレス)</p>
                <input type="text" className="login-form-input" />
              </div>
              <div className="login-form-pass">
                <p className="login-form-pass-text">パスワード</p>
                <input type="text" className="login-form-input" />
              </div>
              <div className="login-form-forgetpass">
                <Link className="login-form-forgetpass-text" to="#">
                  パスワードをお忘れの方へ
                </Link>
                <img src={arrow} />
              </div>
              <p className="login-form-permission">
                <span className="login-form-permission-message">
                  <Link className="login-form-permission-text" to="#">
                    利用規約
                  </Link>
                  と
                  <Link
                    className="login-form-permission-text login-form-permission-message"
                    to="#"
                  >
                    プライバシーポリシー
                  </Link>
                  に
                </span>
                <br />
                <span className="login-form-permission-message">
                  同意の上、ご利用ください。
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
                  <Link className="login-form-permission-text" to="#">
                    利用規約
                  </Link>
                  と
                  <Link
                    className="login-form-permission-text login-form-permission-message"
                    to="#"
                  >
                    プライバシーポリシー
                  </Link>
                  に
                </span>
                <br />
                <span className="login-form-permission-message">
                  同意の上、ご利用ください。
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
            <Link to="#" className="login-beginner-text">
              はじめての方へ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default login;
