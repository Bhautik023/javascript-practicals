import React from "react";
import { InputField } from "../Components/InputField";
import { Button } from "../Components/Button";
import { DropDown } from "../Components/DropDown";
import { contactDataList } from "../Utils/DataList";
import classes from "./Contact.module.css";
import { Card } from "../Components/Card";

export const Contact = () => {
  return (
    <div className={classes.contact}>
    <Card className={classes.input}>
      <h1>Reach out Us</h1>
      <form>
        <InputField className={classes.input} placeHolder="Enter your email" />
        <InputField className={classes.input} placeHolder="Enter your name" />
        <Button className={classes.input} lable="Submit" />
      </form>
      <DropDown Data={contactDataList} />
    </Card>
    </div>
  );
};
