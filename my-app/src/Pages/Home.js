import React from 'react'
import {Card} from '../Components/Card'
import { InputField } from '../Components/InputField'
import { Button } from '../Components/Button'
import { DropDown } from '../Components/DropDown'
import { HomeDataList } from '../Utils/DataList'
import classes from './Home.module.css'

export const Home = () => {
  return (
    <div className={classes.home}>
    <Card className={classes.input}>
        <h1>This is Home page</h1>
        <form>
            <InputField className={classes.input} placeHolder="Enter Something Here"/> <br/>
            <InputField className={classes.input} placeHolder="Enter Something Here"/> <br/>
            <InputField className={classes.input} placeHolder="Enter Something Here"/> <br/>
            <Button type="submit" lable="Submit"/>
        </form>
        <DropDown Data={HomeDataList}/>
        
    </Card>
    </div>
  )
}
