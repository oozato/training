import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./style.css";

function Register() {
  return (
    <div className="wrap">
      <div className="register">
        <p className="register-head">
          新規会員登録<span className="register-head-option">(無料)</span>
        </p>
        <div className="register-stepbar">
          <p className="register-stepbar-item">会員情報入力</p>
          <p className="register-stepbar-item">会員情報確認</p>
          <p className="register-stepbar-item">登録完了！</p>
        </div>
        <p className="register-input_message">下記の項目を入力してください。</p>
        <p className="register-attention_message">
          ※<span>必須</span>は必須項目です。
        </p>
        <div className="register-card">
          <p className="register-card-message">
            ※氏名は応募するまで企業へ表示されません。
          </p>
          <p className="register-card-title_necessary">
            姓
            <input type="text" className="register-card-inpt" />
          </p>
          <p className="register-card-title_necessary">
            名
            <input type="text" className="register-card-inpt" />
          </p>

          <p className="register-card-title">
            姓
            <input type="text" className="register-card-inpt" />
          </p>

          <p className="register-card-title">
            名
            <input type="text" className="register-card-inpt" />
          </p>
        </div>
        <div className="register-card">
          <p className="register-card-title_necessary">
            生年月日
            <input type="date" name="" id="" />
          </p>

          <p className="register-card-title_necessary">
            性別
            <input type="radio" name="性別" value="男" /> 男
            <input type="radio" name="性別" value="女" /> 女
          </p>
        </div>
        <div className="register-card">
          <p className="register-card-title_necessary">
            ログインID(メールアドレス)
            <input type="email" name="メールアドレス" id="id" />
          </p>
          <p className="register-card-attention">
            ※メールアドレスはログイン時に使用します。
          </p>
          <p className="register-card-attention">
            ※ドメイン指定受信をされている場合は「jobantenna.jp」を指定受信設定してください
          </p>
          <p className="register-card-title_necessary">
            パスワード
            <input
              type="{{textOrPassword()}}"
              name="password"
              ng-model="data.password"
              ng-minlength="8"
              ng-maxlength="16"
              ng-pattern="/^[a-zA-Z0-9]*$/"
              required
            />
          </p>
          <p>
            <input
              type="checkbox"
              id="passwordVisible"
              ng-model="passwordVisible"
            />
            <label>パスワードを表示する</label>
          </p>
        </div>
        <div className="register-card">
          <p className="register-card-question">
            好条件の非公開求人のご紹介を受けますか？
          </p>
          <Link to="#">非公開求人について</Link>
        </div>
        <button>入力内容を確認する</button>
        <button>キャンセル</button>
      </div>
    </div>
  );
}
export default Register;
