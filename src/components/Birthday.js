import React, { useEffect, useRef } from "react";
import { useState } from "react";
import "./Birthday.css";
import noProfile from "../img/no-profile.png";
// import components
import Message from "./Message";
const Birthday = ({ data, date }) => {
  const [status, setStatus] = useState({ ok: true, message: null });
  const [start, setStart] = useState(true);
  // variables
  const $ = document;
  const userList = useRef(null);
  const balloonContianer = useRef(null);
  let count = useRef(0);

  useEffect(() => {
    // finding birthday
    const findBirthday = (data, date) => {
      data.birthdayList.forEach((datam) => {
        try {
          const birthday = datam.birthday.split("/")[1] + "/" + datam.birthday.split("/")[2];

          if (birthday === date) {
            userList.current.style.display = "flex";
            balloonContianer.current.style.display = "block";
            createElements(datam);
            count.current += 1;
          }
        } catch (err) {
          // console.log(err);
        }
      });
      if (count.current === 0) {
        setStatus({ ok: false, message: "امروز تولد کسی نیست نزدیک ترین رویداد (:" });
        for (let i = 0; i < 51; i++) {
          let newDay = date.split("/")[1];
          let newMounth = date.split("/")[0];
          if (newDay <= 31) {
            newDay++;
            if (newDay.toString().length !== 2) {
              newDay = `0${newDay}`;
            }
            if (newMounth.toString().length !== 2) {
              newMounth = `0${newMounth}`;
            }
            data.birthdayList.forEach((datam) => {
              const birthday = datam.birthday.split("/")[1] + "/" + datam.birthday.split("/")[2];
              let newBirthday = `${newMounth}/${newDay}`;
              if (newBirthday === birthday) {
                userList.current.style.display = "flex";
                balloonContianer.current.style.display = "block";
                createElements(datam);
                count.current += 1;
              }
            });
          } else {
            newMounth++;
            newDay = 1;
            if (newDay.toString().length !== 2) {
              newDay = `0${newDay}`;
            }
            if (newMounth.toString().length !== 2) {
              newMounth = `0${newMounth}`;
            }
            data.birthdayList.forEach((datam) => {
              const birthday = datam.birthday.split("/")[1] + "/" + datam.birthday.split("/")[2];
              let newBirthday = `${newMounth}/${newDay}`;
              if (newBirthday === birthday) {
                userList.current.style.display = "flex";
                balloonContianer.current.style.display = "block";
                createElements(datam);
              }
            });
          }
          if (count.current >= 1) {
            break;
          }
          // break;
        }
      }
    };

    // create element
    const createElements = (data) => {
      let section = $.createElement("section");
      let img = $.createElement("img");
      img.src = noProfile;
      img.alt = data.name + " " + data.family;
      let ul = $.createElement("ul");
      userList.current.appendChild(section);
      section.appendChild(img);
      section.appendChild(ul);
      let li;
      li = "<li>";
      li += '<i class="ri-user-fill"></i>';
      li += "<span>نام و نام خانوادگی: </span>";
      li += "<span>" + data.name + " " + data.family + "</span>";
      li += "</li>";

      ul.innerHTML += li;

      li = "<li>";
      li += '<i class="ri-cake-2-line"></i>';
      li += "<span>تاریخ تولد: </span>";
      li += "<span>" + data.birthday + "</span>";
      li += "</li>";

      ul.innerHTML += li;

      li = "<li>";
      li += '<i class="ri-focus-3-line"></i>';
      li += "<span>مهارت: </span>";
      li += "<span>" + data.skils + "</span>";
      li += "</li>";

      ul.innerHTML += li;

      li = "<li>";
      li += '<i class="ri-focus-3-line"></i>';
      li += "<span> فعالیت مورد علاقه: </span>";
      li += "<span>" + data.activity + "</span>";
      li += "</li>";

      ul.innerHTML += li;

      li = "<li>";
      li += '<i class="ri-heart-2-line"></i>';
      li += "<span>غذا مورد علاقه: </span>";
      li += "<span>" + data.food + "</span>";
      li += "</li>";

      ul.innerHTML += li;

      li = "<li>";
      li += '<i class="ri-brush-2-line"></i>';
      li += "<span>رنگ مورد علاقه: </span>";
      li += "<span>" + data.color + "</span>";
      li += "</li>";

      ul.innerHTML += li;

      li = "<li>";
      li += '<i class="ri-user-star-line"></i>';
      li += "<span>دوره در یک کلمه: </span>";
      li += "<span>" + data.dore + "</span>";
      li += "</li>";

      ul.innerHTML += li;
    };
    findBirthday(data, date);
  }, [start, data, date, $]);
  return (
    <>
      {status.ok ? undefined : <Message text="امروز تولد کسی نیست" />}
      <div className="main-content">
        {/* // <!-- balloons --> */}
        <div ref={balloonContianer} className="balloon-contianer">
          <div className="balloon"></div>
          <div className="balloon"></div>
          <div className="balloon"></div>
          <div className="balloon"></div>
          <div className="balloon"></div>
        </div>
        {/* // <!-- End balloons --> */}
        <main ref={userList} className={`shadow`} style={{ display: "flex" }}></main>
      </div>
    </>
  );
};

export default Birthday;
