import React from "react";
import styles from "./Message.module.css";
const Message = (props) => {
  return <div className={`${styles.message}  shadow`}>{props.text}</div>;
};

export default Message;
