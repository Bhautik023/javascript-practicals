import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";

export const Header = () => {
  return (
    <div>
      <header className={classes.header}>
        <Link className={classes.links} to="/">
          <Button className={classes.buttons}  lable="Home" />
        </Link>
        <Link className={classes.links} to="/Contact">
          <Button className={classes.buttons} lable="Contact" />
        </Link>
        <Link className={classes.links} to="/Footer">
          <Button className={classes.buttons} lable="Footer" />
        </Link>
      </header>
    </div>
  );
};
