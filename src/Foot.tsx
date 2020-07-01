import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./style.scss";
import ReturnIcon from "./Icon/ReturnIcon.svg";
import twitter from "./Icon/twitter.svg";
import facebook from "./Icon/facebook.svg";
import BlackJobantennaIcon from "./Icon/BlackJobantennaIcon.svg";
import searchButton from "./Icon/searchButton.svg";

function Foot() {
  return (
    <div className="wrap">
      <div className="footer">
        <Link to="#" className="footer-page_return">
          <img src={ReturnIcon} />
          <div className="footer-page_return-text">ページの先頭へ戻る</div>
        </Link>
        <div className="footer-sns">
          <div className="footer-sns-header">公式アカウント</div>
          <div>
            <Link to="#">
              <img src={twitter} className="footer-sns-header-icon" />
            </Link>
            <Link to="#">
              <img src={facebook} className="footer-sns-header-icon" />
            </Link>
          </div>
        </div>

        <div className="footer-help">
          <Link to="#" className="footer-help-item">
            ご利用ガイド
          </Link>
          <Link to="#" className="footer-help-item">
            よくある質問
          </Link>
          <Link to="#" className="footer-help-item">
            お問い合わせ
          </Link>
          <Link to="#" className="footer-help-item">
            ご意見・ご質問
          </Link>
        </div>

        <div className="footer-info">
          <Link className="footer-info-item" to="#">
            ジョブアンテナについて
          </Link>
          <Link className="footer-info-item" to="#">
            利用規約
          </Link>
          <Link className="footer-info-item" to="#">
            運営会社
          </Link>
          <Link className="footer-info-item" to="#">
            プライバシーポリシー
          </Link>
        </div>

        <div className="footer-foot">
          <div className="footer-foot-brand">
            <Link to="#">
              <img
                src={BlackJobantennaIcon}
                className="footer-foot-brand-icon"
              />
            </Link>

            <div className="footer-foot-brand-copyright">
              Copyright© RyukyuInteractive, Inc. All Rights Reserved.
            </div>
          </div>
          <Link to="#">
            <img src={searchButton} className="footer-foot-search" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Foot;
