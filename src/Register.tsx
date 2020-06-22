import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import question_btn from "./Icon/question_btn.svg";

function Register() {
  return (
    <div className="register">
      <div className="register-container">
        <div className="register-container-back">
          <h1 className="register-title">新規会員登録 (無料)</h1>
          <div className="register-stepbar">
            <p className="register-stepbar-box box1">会員情報入力</p>
            <p className="register-stepbar-box box2">会員情報確認</p>
            <p className="register-stepbar-box box3">登録完了！</p>
          </div>
          <h2 className="register-input_message">
            下記の項目を入力してください。
          </h2>
          <p className="register-attention_message">
            ※<span className="necessary_message">必須</span>は必須項目です。
          </p>
          <div className="register-card">
            <p className="register-card-message">
              ※氏名は応募するまで企業へ表示されません。
            </p>
            <div className="register-card-form">
              <div className="register-card-form-group">
                <p className="register-card-form-group-title">
                  姓 <span className="necessary_message">必須</span>
                </p>
                <input
                  type="text"
                  placeholder="例）琉球"
                  className="register-card-form-group-input"
                />
              </div>
              <div className="register-card-form-group">
                <p className="register-card-form-group-title">
                  名 <span className="necessary_message">必須</span>
                </p>
                <input
                  type="text"
                  placeholder="例）太郎"
                  className="register-card-form-group-input"
                />
              </div>
              <div className="register-card-form-group">
                <p className="register-card-form-group-title">姓（ふりがな）</p>

                <input
                  type="text"
                  placeholder="例）りゅうきゅう"
                  className="register-card-form-group-input"
                />
              </div>
              <div className="register-card-form-group">
                <p className="register-card-form-group-title">名（ふりがな）</p>

                <input
                  type="text"
                  placeholder="例）たろう"
                  className="register-card-form-group-input"
                />
              </div>
            </div>
          </div>

          <div className="register-card">
            <div className="register-card-form">
              <div className="register-card-form-group">
                <p className="register-card-title">
                  生年月日 <span className="necessary_message">必須</span>
                </p>
                <select id="select_year" name="year"></select>年
                <select id="select_month" name="month"></select>月
                <select id="select_day" name="day"></select>日
              </div>
              <div className="register-card-form-group">
                <p className="register-card-form-group-title">
                  性別 <span className="necessary_message">必須</span>
                </p>
                <input
                  type="radio"
                  name="性別"
                  value="男"
                  className="register-card-form-group-radio"
                />
                男
                <input
                  type="radio"
                  name="性別"
                  value="女"
                  className="register-card-form-group-radio"
                />
                女
              </div>
            </div>
          </div>

          <div className="register-card">
            <div className="register-card-form-group">
              <p className="register-card-form-group-title">
                ログインID(メールアドレス){" "}
                <span className="necessary_message">必須</span>
              </p>
              <input
                type="email"
                placeholder="例）taro@jobantenna.jp"
                className="register-card-form-group-input"
                name="メールアドレス"
                id="id"
              />
            </div>
            <p className="register-card-attention">
              ※メールアドレスはログイン時に使用します。
            </p>
            <p className="register-card-message">
              ※ドメイン指定受信をされている場合は「jobantenna.jp」を指定受信設定してください
            </p>

            <div className="register-card-form-group">
              <p className="register-card-form-group-title">
                パスワード <span className="necessary_message">必須</span>
              </p>
              <div className="register-card-form">
                <div>
                  <input
                    type="{{textOrPassword()}}"
                    placeholder="半角英数英数8文字〜12文字以内"
                    className="register-card-form-group-input"
                    name="password"
                    ng-model="data.password"
                    ng-minlength="8"
                    ng-maxlength="12"
                    ng-pattern="/^[a-zA-Z0-9]*$/"
                    required
                  />
                </div>
                <div className="register-card-form-group-pass_check">
                  <input
                    type="checkbox"
                    id="passwordVisible"
                    ng-model="passwordVisible"
                  />
                  <label>パスワードを表示する</label>
                </div>
              </div>
            </div>
          </div>

          <div className="register-card">
            <div className="register-card-form">
              <div>
                <p className="register-card-question">
                  好条件の非公開求人のご紹介を受けますか？
                </p>
                <Link to="#" className="register-card-guide">
                  <p className="register-card-guide-text">非公開求人について</p>
                  <img src={question_btn} />
                </Link>
              </div>

              <div className="register-card-form-group-guide_check">
                <input
                  type="checkbox"
                  id="passwordVisible"
                  ng-model="passwordVisible"
                />
                <label>はい</label>
              </div>
            </div>
          </div>
          <button>入力内容を確認する</button>
          <button>キャンセル</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
