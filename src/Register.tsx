import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import question_btn from "./Icon/question_btn.svg";
import radio from "./Icon/radio.svg";

class Register extends React.Component {
  render() {
    var new_date = new Date();
    var new_year = new_date.getFullYear();
    const year = [];
    const month = [];
    const day = [];

    for (let i = 1920; i <= new_year; i++) {
      year.push(<option value={i}>{i}</option>);
    }
    for (let j = 1; j <= 12; j++) {
      month.push(<option value={j}>{j}</option>);
    }
    for (let k = 1; k <= 31; k++) {
      day.push(<option value={k}>{k}</option>);
    }

    return (
      <div className="register">
        <div className="register-container">
          <div className="register-container-back">
            <h1 className="register-title">新規会員登録 (無料)</h1>
            <div className="register-stepbar">
              <p className="register-stepbar-box register-stepbar-left">
                会員情報入力
              </p>
              <p className="register-stepbar-box register-stepbar-center">
                会員情報確認
              </p>
              <p className="register-stepbar-box  register-stepbar-right">
                登録完了！
              </p>
            </div>
            <h2 className="register-input_message">
              下記の項目を入力してください。
            </h2>
            <p className="register-attention_message">
              ※<span className="necessary_message">必須</span>は必須項目です。
            </p>
            <div className="register-card ">
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
                    required
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
                    required
                  />
                </div>
                <div className="register-card-form-group">
                  <p className="register-card-form-group-title">
                    姓（ふりがな）
                  </p>

                  <input
                    type="text"
                    placeholder="例）りゅうきゅう"
                    className="register-card-form-group-input"
                  />
                </div>
                <div className="register-card-form-group">
                  <p className="register-card-form-group-title">
                    名（ふりがな）
                  </p>

                  <input
                    type="text"
                    placeholder="例）たろう"
                    className="register-card-form-group-input"
                  />
                </div>
              </div>
            </div>

            <div className="register-card ">
              <div className="register-card-form">
                <div className="register-card-form-group">
                  <p className="register-card-form-group-title">
                    生年月日 <span className="necessary_message">必須</span>
                  </p>
                  <div className="register-card-form-group-date">
                    <select
                      id="select_year"
                      name="year"
                      className="register-card-form-group-date-icon"
                    >
                      <option value="">----</option>
                      {year}
                    </select>
                    <p className="register-card-form-group-date-item">年</p>
                    <select
                      id="select_month"
                      name="month"
                      className="register-card-form-group-date-icon"
                    >
                      <option value="">-</option>
                      {month}
                    </select>
                    <p className="register-card-form-group-date-item">月</p>
                    <select
                      id="select_day"
                      name="day"
                      className="register-card-form-group-date-icon"
                    >
                      <option value="">-</option>
                      {day}
                    </select>

                    <p className="register-card-form-group-date-item">日</p>
                  </div>
                </div>

                <div className="register-card-form-group">
                  <p className="register-card-form-group-title">
                    性別 <span className="necessary_message">必須</span>
                  </p>
                  <div className="register-card-form-group-gender">
                    <div className="register-card-form-group-gender-container">
                      <input
                        className="register-card-form-group-gender-container-button"
                        type="radio"
                        name="radio"
                      />
                      <div className="register-card-form-group-gender-container-tile">
                        <div className="register-card-form-group-gender-container-tile-icon">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="6" cy="6" r="6" />
                            <path d="M0 0h24v24H0z" fill="none" />
                          </svg>
                        </div>
                        <label className="register-card-form-group-gender-container-tile-label">
                          男
                        </label>
                      </div>
                    </div>
                    <div className="register-card-form-group-gender-container">
                      <input
                        className="register-card-form-group-gender-container-button"
                        type="radio"
                        name="radio"
                      />
                      <div className="register-card-form-group-gender-container-tile">
                        <div className="register-card-form-group-gender-container-tile-icon">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="6" cy="6" r="6" />
                            <path d="M0 0h24v24H0z" fill="none" />
                          </svg>
                        </div>
                        <label className="register-card-form-group-gender-container-tile-label">
                          女
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="register-card ">
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
                  id="email"
                  required
                />
              </div>
              <p className="register-card-attention">
                ※メールアドレスはログイン時に使用します。
              </p>
              <p className="register-card-setmessage">
                ※ドメイン指定受信をされている場合は「jobantenna.jp」を指定受信設定してください
              </p>

              <div className="register-card-form-group">
                <p className="register-card-form-group-title">
                  パスワード <span className="necessary_message">必須</span>
                </p>
                <div className="register-card-form">
                  <input
                    type="password"
                    placeholder="半角英数英数8文字〜12文字以内"
                    className="register-card-form-group-input"
                    pattern="/^[a-zA-Z0-9]*$/"
                    minLength={8}
                    maxLength={12}
                    required
                  />
                  <div className="register-card-form-group-pass_check">
                    <div className="register-card-form-group-pass_check-item">
                      <label>
                        <input
                          type="checkbox"
                          className="register-card-form-group-pass_check-item-box"
                        />
                        パスワードを表示する
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="register-card ">
              <div className="register-card-items">
                <div>
                  <p className="register-card-question">
                    好条件の非公開求人の
                    <br />
                    ご紹介を受けますか？
                  </p>
                </div>

                <div className="register-card-form-group-guide_check">
                  <div className="register-card-form-group-guide_check-item">
                    <label>
                      <input
                        type="checkbox"
                        className="register-card-form-group-guide_check-item-box"
                      />
                      はい
                    </label>
                  </div>
                </div>
                <Link to="#" className="register-card-guide">
                  <p className="register-card-guide-text">非公開求人について</p>
                  <img src={question_btn} />
                </Link>
              </div>
            </div>
            <div className="register-button">
              <button className="register-button-confirm">
                入力内容を確認する
              </button>
              <button className="register-button-cancel">キャンセル</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
