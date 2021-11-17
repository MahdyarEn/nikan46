import React, { useDebugValue, useEffect, useState } from "react";
import { getBirthday } from "../services/birthday";
import noProfile from "../img/no-profile.png";
import styles from "./AllBirthday.module.css";
const AllBirthday = () => {
  const [BirthdayList, setBirthdayList] = useState({ results: [] });
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchApi = async () => {
      const birthdayData = await getBirthday();
      setBirthdayList({ ...BirthdayList, ...birthdayData });
    };
    fetchApi();
  }, []);
  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const Birthday = BirthdayList.results.filter((item) => {
    if (item.name.includes(search) || item.family.includes(search)) {
      return true;
    }
    return false;
  });

  return (
    <>
      {BirthdayList.results ? <input value={search} onChange={searchHandler} type="text" className={`${styles.input} shadow`} placeholder="برای جستجو، نام شخص را وارد کنید" /> : undefined}
      {BirthdayList.results
        ? Birthday.map((data) => (
            <section key={data.id} className={`shadow ${styles.user}`}>
              <img
                src={(() => {
                  let userImage;
                  try {
                    userImage = require(`../img/${data.id}.JPG`).default;
                  } catch (err) {
                    userImage = noProfile;
                  }
                  return userImage;
                })()}
              />
              <div>
                <h2>نام و نام خانوادگی : {`${data.name} ${data.family}`}</h2>
                <h3>تاریخ تولد: {data.birthday}</h3>
              </div>
            </section>
          ))
        : undefined}
    </>
  );
};

export default AllBirthday;
