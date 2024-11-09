import React from "react";
import logoBlack from "../assets/images/logo_black.png";

export default function PlayerFooter() {
  return (
    <footer className="container">
      <div className="innerContainer">
        <div className="row g-4 align-items-center">
          <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center justify-content-md-start align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <mask
                id="mask0_299_434"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="24"
                height="25"
              >
                <rect y="0.5" width="24" height="24" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_299_434)">
                <path
                  d="M10 16.5H14C14.2833 16.5 14.5208 16.4042 14.7125 16.2125C14.9042 16.0208 15 15.7833 15 15.5V13.5H13V14.5H11V10.5H13V11.5H15V9.5C15 9.21667 14.9042 8.97917 14.7125 8.7875C14.5208 8.59583 14.2833 8.5 14 8.5H10C9.71667 8.5 9.47917 8.59583 9.2875 8.7875C9.09583 8.97917 9 9.21667 9 9.5V15.5C9 15.7833 9.09583 16.0208 9.2875 16.2125C9.47917 16.4042 9.71667 16.5 10 16.5ZM12 22.5C10.6167 22.5 9.31667 22.2375 8.1 21.7125C6.88333 21.1875 5.825 20.475 4.925 19.575C4.025 18.675 3.3125 17.6167 2.7875 16.4C2.2625 15.1833 2 13.8833 2 12.5C2 11.1167 2.2625 9.81667 2.7875 8.6C3.3125 7.38333 4.025 6.325 4.925 5.425C5.825 4.525 6.88333 3.8125 8.1 3.2875C9.31667 2.7625 10.6167 2.5 12 2.5C13.3833 2.5 14.6833 2.7625 15.9 3.2875C17.1167 3.8125 18.175 4.525 19.075 5.425C19.975 6.325 20.6875 7.38333 21.2125 8.6C21.7375 9.81667 22 11.1167 22 12.5C22 13.8833 21.7375 15.1833 21.2125 16.4C20.6875 17.6167 19.975 18.675 19.075 19.575C18.175 20.475 17.1167 21.1875 15.9 21.7125C14.6833 22.2375 13.3833 22.5 12 22.5ZM12 20.5C14.2333 20.5 16.125 19.725 17.675 18.175C19.225 16.625 20 14.7333 20 12.5C20 10.2667 19.225 8.375 17.675 6.825C16.125 5.275 14.2333 4.5 12 4.5C9.76667 4.5 7.875 5.275 6.325 6.825C4.775 8.375 4 10.2667 4 12.5C4 14.7333 4.775 16.625 6.325 18.175C7.875 19.725 9.76667 20.5 12 20.5Z"
                  fill="black"
                />
              </g>
            </svg>
            All Rights Reserved
          </div>
          <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
            <img alt="Footer Logo" src={logoBlack} />
          </div>
          <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center justify-content-md-end">
            <svg
              className="me-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M18 2.5H15C13.6739 2.5 12.4021 3.02678 11.4645 3.96447C10.5268 4.90215 10 6.17392 10 7.5V10.5H7V14.5H10V22.5H14V14.5H17L18 10.5H14V7.5C14 7.23478 14.1054 6.98043 14.2929 6.79289C14.4804 6.60536 14.7348 6.5 15 6.5H18V2.5Z"
                fill="black"
              />
            </svg>
            <svg
              className="me-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M23 3.50005C22.0424 4.17552 20.9821 4.69216 19.86 5.03005C19.2577 4.33756 18.4573 3.84674 17.567 3.62397C16.6767 3.40121 15.7395 3.45724 14.8821 3.7845C14.0247 4.11176 13.2884 4.69445 12.773 5.45376C12.2575 6.21308 11.9877 7.11238 12 8.03005V9.03005C10.2426 9.07561 8.50127 8.68586 6.93101 7.89549C5.36074 7.10513 4.01032 5.93868 3 4.50005C3 4.50005 -1 13.5 8 17.5C5.94053 18.898 3.48716 19.599 1 19.5C10 24.5 21 19.5 21 8.00005C20.9991 7.7215 20.9723 7.44364 20.92 7.17005C21.9406 6.16354 22.6608 4.89276 23 3.50005Z"
                fill="black"
              />
            </svg>
            <svg
              className="me-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M17 2.5H7C4.23858 2.5 2 4.73858 2 7.5V17.5C2 20.2614 4.23858 22.5 7 22.5H17C19.7614 22.5 22 20.2614 22 17.5V7.5C22 4.73858 19.7614 2.5 17 2.5Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M15.9997 11.8701C16.1231 12.7023 15.981 13.5523 15.5935 14.2991C15.206 15.0459 14.5929 15.6515 13.8413 16.0297C13.0898 16.408 12.2382 16.5397 11.4075 16.406C10.5768 16.2723 9.80947 15.8801 9.21455 15.2852C8.61962 14.6903 8.22744 13.9229 8.09377 13.0923C7.96011 12.2616 8.09177 11.41 8.47003 10.6584C8.84829 9.90691 9.45389 9.2938 10.2007 8.9063C10.9475 8.5188 11.7975 8.37665 12.6297 8.50006C13.4786 8.62594 14.2646 9.02152 14.8714 9.62836C15.4782 10.2352 15.8738 11.0211 15.9997 11.8701Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M17.5 7H17.51"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M16 8.5C17.5913 8.5 19.1174 9.13214 20.2426 10.2574C21.3679 11.3826 22 12.9087 22 14.5V21.5H18V14.5C18 13.9696 17.7893 13.4609 17.4142 13.0858C17.0391 12.7107 16.5304 12.5 16 12.5C15.4696 12.5 14.9609 12.7107 14.5858 13.0858C14.2107 13.4609 14 13.9696 14 14.5V21.5H10V14.5C10 12.9087 10.6321 11.3826 11.7574 10.2574C12.8826 9.13214 14.4087 8.5 16 8.5Z"
                fill="black"
              />
              <path d="M6 9.5H2V21.5H6V9.5Z" fill="black" />
              <path
                d="M4 6.5C5.10457 6.5 6 5.60457 6 4.5C6 3.39543 5.10457 2.5 4 2.5C2.89543 2.5 2 3.39543 2 4.5C2 5.60457 2.89543 6.5 4 6.5Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}