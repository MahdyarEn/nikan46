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
  let newDay = useRef(1);
  let newMounth = useRef(1);

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
      // if no one find ...
      if (count.current === 0) {
        setStatus({ ok: false, message: "امروز تولد کسی نیست نزدیک ترین رویداد (:" });
        newDay.current = date.split("/")[1];
        newMounth.current = date.split("/")[0];
        for (let i = 0; i < 51; i++) {
          if (newDay.current <= 31) {
            newDay.current++;
            if (newDay.current.toString().length !== 2) {
              newDay.current = `0${newDay.current}`;
            }
            if (newMounth.current.toString().length !== 2) {
              newMounth.current = `0${newMounth.current}`;
            }
            data.birthdayList.forEach((datam) => {
              const birthday = datam.birthday.split("/")[1] + "/" + datam.birthday.split("/")[2];
              let newBirthday = `${newMounth.current}/${newDay.current}`;
              if (newBirthday === birthday) {
                userList.current.style.display = "flex";
                balloonContianer.current.style.display = "block";
                createElements(datam);
                count.current += 1;
              }
            });
          } else {
            // go to next mounth
            newMounth.current++;
            newDay.current = 1;
            if (newDay.current.toString().length !== 2) {
              newDay.current = `0${newDay.current}`;
            }
            if (newMounth.current.toString().length !== 2) {
              newMounth.current = `0${newMounth.current}`;
            }
            data.birthdayList.forEach((datam) => {
              const birthday = datam.birthday.split("/")[1] + "/" + datam.birthday.split("/")[2];
              let newBirthday = `${newMounth.current}/${newDay.current}`;
              if (newBirthday === birthday) {
                userList.current.style.display = "flex";
                balloonContianer.current.style.display = "block";
                createElements(datam);
              }
            });
          }
          // break checking
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
      let userImage;
      try {
        userImage = require(`../img/${data.id}.JPG`).default;
      } catch (err) {
        userImage = noProfile;
      }
      img.src = userImage;
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
      {status.ok ? undefined : <Message text={status.message} />}
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
