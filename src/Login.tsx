import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import arrow from "./Icon/arrow.svg";

function login() {
  return (
    <div className="login">
      <div className="login-container">
        <h1 className="login-container-title">ログイン</h1>
        <div className="login-container-form">
          <div className="login-container-form-left">
            <div className="login-container-form-left-id">
              <p className="login-container-form-left-id-text">
                ログインID(メールアドレス)
              </p>
              <input
                type="text"
                className="login-container-form-left-id-input"
              />
            </div>
            <div className="login-container-form-left-pass">
              <p className="login-container-form-left-pass-text">パスワード</p>
              <input
                type="text"
                className="login-container-form-left-pass-input"
              />
            </div>
            <div className="login-container-form-left-forgetpass">
              <Link
                className="login-container-form-left-forgetpass-text"
                to="#"
              >
                パスワードをお忘れの方へ
              </Link>
              <img src={arrow} />
            </div>
            <p className="login-container-form-left-permission">
              <span className="login-container-form-left-permission-message">
                <Link
                  className="login-container-form-left-permission-text"
                  to="#"
                >
                  利用規約
                </Link>
                と
                <Link
                  className="login-container-form-left-permission-text"
                  to="#"
                >
                  プライバシーポリシー
                </Link>
                に
              </span>
              <br />
              <span>同意の上、ご利用ください。</span>
            </p>
            <button className="login-container-form-left-agree_button">
              同意してログイン
            </button>
          </div>
          <div className="login-container-form-right">
            <p className="login-container-form-right-title">
              Facebookアカウントで登録された方
            </p>
            <p className="login-container-form-right-permission">
              <span>
                <Link
                  className="login-container-form-right-permission-text"
                  to="#"
                >
                  利用規約
                </Link>
                と
                <Link
                  className="login-container-form-right-permission-text "
                  to="#"
                >
                  プライバシーポリシー
                </Link>
                に
              </span>
              <br />
              <span>同意の上、ご利用ください。</span>
            </p>
            <button className="login-container-form-right-facebook_button">
              Facebookでログイン
            </button>
          </div>
        </div>

        <div className="login-container-beginner">
          <h2 className="login-container-beginner-title">
            まだ登録されていない方
          </h2>
          <button className="login-container-beginner-signup_button">
            会員登録
            <span className="login-container-beginner-signup_button-option">
              (無料)
            </span>
          </button>
          <Link to="#" className="login-container-beginner-text">
            はじめての方へ
          </Link>
        </div>
      </div>
    </div>
  );
}

export default login;
