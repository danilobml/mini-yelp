import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="mainContainer">
      <div className="containerFooter">
        <div className="footer">
          <span>
            <a href="#">About Mini Yelp</a>
            <a href="#">Company</a>
            <a href="#">FAQ</a>
            <a href="#">Investor Relations</a>
            <a href="#">API</a>
            <a href="#">Security</a>
            <a href="#">Legal</a>
            <a href="#">Apply to Mini-Yelp</a>
            <a id="#" href="#">
              {" "}
              Contact{" "}
            </a>
          </span>
        </div>
      </div>
      <div class="icons">
        <a href="#">
          <a href="#" class="fa fa-facebook"></a>
        </a>
        <a href="#">
          <i class="fa fa-twitter"></i>
        </a>
        <a href="#">
          <i class="fa fa-snapchat"></i>
        </a>
        <a href="#">
          <i class="fa fa-instagram"></i>
        </a>
        <p class="copyright">Welp © 2022</p>
      </div>
      
    </div>
  );
}
