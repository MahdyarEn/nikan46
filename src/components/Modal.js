import React from "react";
//css
import "./Modal.css";

// variable
const $ = document;

// close modal func
const closeModal = () => {
  const modal = $.querySelector(".modal-container");
  modal.classList.remove("show");
  setTimeout(function () {
    modal.style.display = "none";
  }, 100);
};

const Modal = ({ date }) => {
  return (
    <div className="modal-container fade">
      <div className="modal">
        <div className="header-modal">
          <h1>اطلاعات امروز</h1>
        </div>

        <div className="modal-content">
          {/* <!-- List of info --> */}
          <ul>
            <li>
              <i className="ri-calendar-event-fill"></i>
              <span>نام فصل:</span>
              <span>{date.season}</span>
            </li>
            <li>
              <i className="ri-magic-fill"></i>
              <span>روز هفته:</span>
              <span>{date.dayofweek}</span>
            </li>
            <li>
              <i className="ri-bug-fill"></i>
              <span>حیوان سال:</span>
              <span>{date.animal}</span>
            </li>
            <li>
              <i className="ri-calendar-2-fill"></i>
              <span>تاریخ به حروف:</span>
              <span>{date.date}</span>
            </li>
            <li>
              <i className="ri-calendar-todo-fill"></i>
              <span>تاریخ به عدد:</span>
              <span> {date.datenum}</span>
            </li>
            <li>
              <i className="ri-time-fill"></i>
              <span>ساعت:</span>
              <span>{date.time}</span>
            </li>
          </ul>
        </div>
        <button id="close-modal" onClick={closeModal}>
          بستن
        </button>
      </div>
    </div>
  );
};

export default Modal;
