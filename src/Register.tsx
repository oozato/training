import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import question_btn from "./Icon/question_btn.svg";
import radio from "./Icon/radio.svg";

class Register extends React.Component {
  render() {
    const CURRENT_YEAR = new Date().getFullYear();
    const year = [];
    const month = [];
    const day = [];

    for (let i = CURRENT_YEAR - 100; i <= CURRENT_YEAR; i++) {
      year.push(i);
    }
    for (let j = 1; j <= 12; j++) {
      month.push(j);
    }
    for (let k = 1; k <= 31; k++) {
      day.push(k);
    }

    return (
      <div className="register">
        <div className="register-container">
          <h1 className="register-container-title">新規会員登録 (無料)</h1>
          <div className="register-container-stepbar">
            <p className="register-container-stepbar-box register-container-stepbar-left">
              会員情報入力
            </p>
            <p className="register-container-stepbar-box register-container-stepbar-center">
              会員情報確認
            </p>
            <p className="register-container-stepbar-box  register-container-stepbar-right">
              登録完了！
            </p>
          </div>
          <h2 className="register-container-input_message">
            下記の項目を入力してください。
          </h2>
          <p className="register-container-attention">
            ※<span className="necessary_message">必須</span>は必須項目です。
          </p>
          <div className="register-container-card ">
            <p className="register-container-card-message">
              ※氏名は応募するまで企業へ表示されません。
            </p>
            <div className="register-container-card-form">
              <div className="register-container-card-form-group">
                <p className="register-container-card-form-group-title">
                  姓 <span className="necessary_message">必須</span>
                </p>
                <input
                  name="family name"
                  type="text"
                  placeholder="例）琉球"
                  className="register-container-card-form-group-input"
                  required
                />
              </div>
              <div className="register-container-card-form-group">
                <p className="registe-containerr-card-form-group-title">
                  名 <span className="necessary_message">必須</span>
                </p>
                <input
                  name="first name"
                  type="text"
                  placeholder="例）太郎"
                  className="register-container-card-form-group-input"
                  required
                />
              </div>
              <div className="register-container-card-form-group">
                <p className="register-container-card-form-group-title">
                  姓（ふりがな）
                </p>

                <input
                  name="family name"
                  type="text"
                  placeholder="例）りゅうきゅう"
                  className="register-container-card-form-group-input"
                />
              </div>
              <div className="register-container-card-form-group">
                <p className="register-container-card-form-group-title">
                  名（ふりがな）
                </p>

                <input
                  name="first name"
                  type="text"
                  placeholder="例）たろう"
                  className="register-container-card-form-group-input"
                />
              </div>
            </div>
          </div>

          <div className="register-container-card ">
            <div className="register-container-card-form">
              <div className="register-container-card-form-group">
                <p className="register-container-card-form-group-title">
                  生年月日 <span className="necessary_message">必須</span>
                </p>
                <div className="register-container-card-form-group-date">
                  <select
                    id="select_year"
                    name="year"
                    className="register-container-card-form-group-date-icon"
                  >
                    <option value="">----</option>
                    {year.map((e) => {
                      return <option value={e}>{e}</option>;
                    })}
                  </select>
                  <p className="register-container-card-form-group-date-item">
                    年
                  </p>
                  <select
                    id="select_month"
                    name="month"
                    className="register-container-card-form-group-date-icon"
                  >
                    <option value="">-</option>
                    {month.map((e) => {
                      return <option value={e}>{e}</option>;
                    })}
                  </select>
                  <p className="register-container-card-form-group-date-item">
                    月
                  </p>
                  <select
                    id="select_day"
                    name="day"
                    className="register-container-card-form-group-date-icon"
                  >
                    <option value="">-</option>
                    {day.map((e) => {
                      return <option value={e}>{e}</option>;
                    })}
                  </select>

                  <p className="register-container-card-form-group-date-item">
                    日
                  </p>
                </div>
              </div>

              <div className="register-container-card-form-group">
                <p className="register-container-card-form-group-title">
                  性別 <span className="necessary_message">必須</span>
                </p>
                <div className="register-container-card-form-group-gender">
                  <div className="register-container-card-form-group-gender-container">
                    <input
                      className="register-container-card-form-group-gender-container-button"
                      type="radio"
                      name="radio button"
                    />
                    <div className="register-container-card-form-group-gender-container-tile">
                      <div className="register-container-card-form-group-gender-container-tile-icon">
                        <img src={radio} alt="" />
                      </div>
                      <label className="register-container-card-form-group-gender-container-tile-label">
                        男
                      </label>
                    </div>
                  </div>
                  <div className="register-container-card-form-group-gender-container">
                    <input
                      className="register-container-card-form-group-gender-container-button"
                      type="radio"
                      name="radio button"
                    />
                    <div className="register-container-card-form-group-gender-container-tile">
                      <div className="register-container-card-form-group-gender-container-tile-icon">
                        <img src={radio} alt="" />
                      </div>
                      <label className="register-container-card-form-group-gender-container-tile-label">
                        女
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="register-container-card ">
            <div className="register-container-card-form-group">
              <p className="register-container-card-form-group-title">
                ログインID(メールアドレス)
              </p>
              <input
                type="email"
                placeholder="例）taro@jobantenna.jp"
                className="register-container-card-form-group-input"
                name="email"
                id="email"
                required
              />
            </div>
            <p className="register-container-card-attention">
              ※メールアドレスはログイン時に使用します。
            </p>
            <p className="register-container-card-setmessage">
              ※ドメイン指定受信をされている場合は「jobantenna.jp」を指定受信設定してください
            </p>

            <div className="register-container-card-form-group">
              <p className="register-container-card-form-group-title">
                パスワード
              </p>
              <div className="register-container-card-form">
                <input
                  name="pass"
                  type="password"
                  placeholder="半角英数8文字〜12文字以内"
                  className="register-container-card-form-group-input"
                  minLength={8}
                  maxLength={12}
                  required
                />
                <div className="register-container-card-form-group-pass_check">
                  <div className="register-container-card-form-group-pass_check-item">
                    <label>
                      <input
                        name="checkbox"
                        type="checkbox"
                        className="register-container-card-form-group-pass_check-item-box"
                      />
                      パスワードを表示する
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="register-container-card ">
            <div className="register-container-card-items">
              <div>
                <p className="register-container-card-question">
                  好条件の非公開求人の
                  <br />
                  ご紹介を受けますか？
                </p>
              </div>

              <div className="register-container-card-form-group-guide_check">
                <div className="register-container-card-form-group-guide_check-item">
                  <label>
                    <input
                      name="checkbox"
                      type="checkbox"
                      className="register-container-card-form-group-guide_check-item-box"
                    />
                    はい
                  </label>
                </div>
              </div>
              <Link to="#" className="register-container-card-guide">
                <p className="register-container-card-guide-text">
                  非公開求人について
                </p>
                <img src={question_btn} />
              </Link>
            </div>
          </div>
          <div className="register-container-button">
            <button className="register-container-button-confirm">
              入力内容を確認する
            </button>
            <button className="register-container-button-cancel">
              キャンセル
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
