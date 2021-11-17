import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom";
// Api
import { getTime } from "./services/time";
import { getBirthday } from "./services/birthday";
import { getGithubInfo } from "./services/github";
// components
import Birthday from "./components/Birthday";
import Message from "./components/Message";
import AllBirthday from "./components/AllBirthday";
const App = () => {
  const [dateBirth, setdateBirth] = useState({
    creator: "Mahdyar Entezami",
    today: "درحال پردازش...",
    season: "درحال پردازش...",
    dayofweek: "درحال پردازش...",
    animal: "درحال پردازش...",
    date: "درحال پردازش...",
    datenum: "درحال پردازش...",
    time: "درحال پردازش...",
    githubInfo: {},
    birthdayList: [],
  });
  useEffect(() => {
    const fetchApi = async () => {
      const data = await getTime();
      const birthdayData = await getBirthday();
      const githubData = await getGithubInfo();
      setdateBirth({ ...dateBirth, ...data, birthdayList: [...birthdayData.results], githubInfo: githubData });
    };
    fetchApi();
  }, []);
  return (
    <div className="container">
      <Header date={dateBirth} />
      <Switch>
        <Route path="/all">
          <AllBirthday />
        </Route>
        <Route path="/">{dateBirth.birthdayList.length > 0 ? <Birthday data={dateBirth} date={dateBirth.today} /> : <Message text="درحال دریافت اطلاعات..." />}</Route>
      </Switch>
      {Object.keys(dateBirth.githubInfo).length > 0 ? (
        <a className="star" target="_blank" href={dateBirth.githubInfo.html_url}>
          <span>ستاره : </span>
          <b>{dateBirth.githubInfo.stargazers_count}</b>
        </a>
      ) : undefined}
    </div>
  );
};

export default App;
