import React from "react";
import "./style.css";
import polygon from "./polygon.svg";
import twitter from "./twitter.svg";
import facebook from "./facebook.svg";
import jobantennaIcon from "./jobantennaIcon.svg";
import searchButton from "./searchButton.svg";

function Foot() {
  return (
    <div className="wrap">
      <div className="footer">
        <a href="#" className="footer-page_return">
          <img src={polygon} />
          <div className="footer-page_return-text">ページの先頭へ戻る</div>
        </a>
        <div className="footer-bar"></div>
        <div className="footer-sns">
          <div className="footer-sns-header">公式アカウント</div>
          <div>
            <a href="#">
              <img src={twitter} className="footer-sns-header-icon" />
            </a>
            <a href="#">
              <img src={facebook} className="footer-sns-header-icon" />
            </a>
          </div>
        </div>

        <div className="footer-help">
          <a href="#" className="footer-help-item">
            ご利用ガイド
          </a>
          <a href="#" className="footer-help-item">
            よくある質問
          </a>
          <a href="#" className="footer-help-item">
            お問い合わせ
          </a>
          <a href="#" className="footer-help-item">
            ご意見・ご質問
          </a>
        </div>

        <div className="footer-info">
          <a className="footer-info-item" href="#">
            ジョブアンテナについて
          </a>
          <a className="footer-info-item" href="#">
            利用規約
          </a>
          <a className="footer-info-item" href="#">
            運営会社
          </a>
          <a className="footer-info-item" href="#">
            プライバシーポリシー
          </a>
        </div>

        <div className="footer-foot">
          <div className="footer-foot-brand">
            <a href="#">
              <img src={jobantennaIcon} className="footer-foot-brand-icon" />
            </a>

            <div className="footer-foot-brand-copyright">
              Copyright© RyukyuInteractive, Inc. All Rights Reserved.
            </div>
          </div>
          <a href="#">
            <img src={searchButton} className="footer-foot-search" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Foot;
