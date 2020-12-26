import React from "react";
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import "./MainWrapper.module.scss";
import s from "./MainWrapper.module.scss";

export const MainWrapper = ({ Properties, View }) => {
  return (
    <div className={s.mainWrapper}>
      <div>
        <div className={s.toolBar}>
          <NavLink to={"/home"} className={s.backButton}>
            <svg
              width="55"
              height="30"
              viewBox="0 0 55 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.585789 13.5858C-0.195259 14.3668 -0.195259 15.6332 0.585789 16.4142L13.3137 29.1421C14.0948 29.9232 15.3611 29.9232 16.1421 29.1421C16.9232 28.3611 16.9232 27.0948 16.1421 26.3137L4.82843 15L16.1421 3.68629C16.9232 2.90524 16.9232 1.63891 16.1421 0.857864C15.3611 0.0768156 14.0948 0.0768156 13.3137 0.857864L0.585789 13.5858ZM55 13L2 13V17L55 17V13Z"
                fill="black"
              />
            </svg>
          </NavLink>
          <div className={s.infoButton}>
            <svg
              width="17"
              height="48"
              viewBox="0 0 17 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.288 4.184C3.288 3.37333 3.77867 2.54133 4.76 1.688C5.74133 0.834665 6.76533 0.407997 7.832 0.407997C8.89867 0.407997 9.816 0.898664 10.584 1.88C11.352 2.81866 11.736 3.77866 11.736 4.76C11.736 5.61333 11.2453 6.46666 10.264 7.32C9.32533 8.13067 8.30133 8.536 7.192 8.536C6.21067 8.536 5.31467 8.06667 4.504 7.128C3.69333 6.14666 3.288 5.16533 3.288 4.184ZM12.12 15.064V43.8L16.408 45.08C16.536 45.8907 16.4293 46.6373 16.088 47.32C12.248 47.1067 9.85867 47 8.92 47C7.64 47 5.03733 47.1067 1.112 47.32C0.984 46.5093 1.02667 45.7627 1.24 45.08C3.62933 44.5253 5.12267 44.0987 5.72 43.8V18.84L0.408 18.328C0.28 17.4747 0.386667 16.728 0.728 16.088C4.26933 15.576 7.256 15 9.688 14.36C10.4133 14.4027 11.224 14.6373 12.12 15.064Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <div className={s.properties}>{Properties}</div>
      </div>
      <div className={s.view}>{View}</div>
    </div>
  );
};
