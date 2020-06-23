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
          <div className="register-card card1">
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

          <div className="register-card card2">
            <div className="register-card-form">
              <div className="register-card-form-group">
                <p className="register-card-form-group-title">
                  生年月日 <span className="necessary_message">必須</span>
                </p>
                <div className="register-card-form-group-date">
                  <select id="select_year" name="year">
                    <option value="">----</option>
                    <option value="1920">1920</option>
                    <option value="1921">1921</option>
                    <option value="1922">1922</option>
                    <option value="1923">1923</option>
                    <option value="1924">1924</option>
                    <option value="1925">1925</option>
                    <option value="1926">1926</option>
                    <option value="1927">1927</option>
                    <option value="1928">1928</option>
                    <option value="1929">1929</option>
                    <option value="1930">1930</option>
                    <option value="1931">1931</option>
                    <option value="1932">1932</option>
                    <option value="1933">1933</option>
                    <option value="1934">1934</option>
                    <option value="1935">1935</option>
                    <option value="1936">1936</option>
                    <option value="1937">1937</option>
                    <option value="1938">1938</option>
                    <option value="1939">1939</option>
                    <option value="1940">1940</option>
                    <option value="1941">1941</option>
                    <option value="1942">1942</option>
                    <option value="1943">1943</option>
                    <option value="1944">1944</option>
                    <option value="1945">1945</option>
                    <option value="1946">1946</option>
                    <option value="1947">1947</option>
                    <option value="1948">1948</option>
                    <option value="1949">1949</option>
                    <option value="1950">1950</option>
                    <option value="1951">1951</option>
                    <option value="1952">1952</option>
                    <option value="1953">1953</option>
                    <option value="1954">1954</option>
                    <option value="1955">1955</option>
                    <option value="1956">1956</option>
                    <option value="1957">1957</option>
                    <option value="1958">1958</option>
                    <option value="1959">1959</option>
                    <option value="1960">1960</option>
                    <option value="1961">1961</option>
                    <option value="1962">1962</option>
                    <option value="1963">1963</option>
                    <option value="1964">1964</option>
                    <option value="1965">1965</option>
                    <option value="1966">1966</option>
                    <option value="1967">1967</option>
                    <option value="1968">1968</option>
                    <option value="1969">1969</option>
                    <option value="1970">1970</option>
                    <option value="1971">1971</option>
                    <option value="1972">1972</option>
                    <option value="1973">1973</option>
                    <option value="1974">1974</option>
                    <option value="1975">1975</option>
                    <option value="1976">1976</option>
                    <option value="1977">1977</option>
                    <option value="1978">1978</option>
                    <option value="1979">1979</option>
                    <option value="1980">1980</option>
                    <option value="1981">1981</option>
                    <option value="1982">1982</option>
                    <option value="1983">1983</option>
                    <option value="1984">1984</option>
                    <option value="1985">1985</option>
                    <option value="1986">1986</option>
                    <option value="1987">1987</option>
                    <option value="1988">1988</option>
                    <option value="1989">1989</option>
                    <option value="1990">1990</option>
                    <option value="1991">1991</option>
                    <option value="1992">1992</option>
                    <option value="1993">1993</option>
                    <option value="1994">1994</option>
                    <option value="1995">1995</option>
                    <option value="1996">1996</option>
                    <option value="1997">1997</option>
                    <option value="1998">1998</option>
                    <option value="1999">1999</option>
                    <option value="2000">2000</option>
                    <option value="2001">2001</option>
                    <option value="2002">2002</option>
                    <option value="2003">2003</option>
                    <option value="2004">2004</option>
                    <option value="2005">2005</option>
                    <option value="2006">2006</option>
                    <option value="2007">2007</option>
                    <option value="2008">2008</option>
                    <option value="2009">2009</option>
                    <option value="2010">2010</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                  </select>
                  <p className="register-card-form-group-date-item">年</p>
                  <select id="select_month" name="month">
                    <option value="">-</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                  <p className="register-card-form-group-date-item">月</p>
                  <select id="select_day" name="day">
                    <option value="">-</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                  </select>

                  <p className="register-card-form-group-date-item">日</p>
                </div>
              </div>
              <div className="register-card-form-group">
                <p className="register-card-form-group-title">
                  性別 <span className="necessary_message">必須</span>
                </p>
                <div className="register-card-form-group-gender">
                  <div className="register-card-form-group-gender-item">
                    <input
                      type="radio"
                      name="性別"
                      value="男"
                      className="register-card-form-group-radio"
                    />
                    男
                  </div>
                  <div className="register-card-form-group-gender-item">
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
            </div>
          </div>

          <div className="register-card card3">
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
            <p className="register-card-setmessage">
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

          <div className="register-card card4">
            <div className="register-card-items">
              <div>
                <p className="register-card-question">
                  好条件の非公開求人の
                  <br />
                  ご紹介を受けますか？
                </p>
              </div>

              <div className="register-card-form-group-guide_check">
                <input
                  type="checkbox"
                  id="passwordVisible"
                  ng-model="passwordVisible"
                />
                <label>はい</label>
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

export default Register;
