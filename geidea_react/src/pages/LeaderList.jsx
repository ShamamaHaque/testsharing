
import { Navigation } from "../components/navigation";
import { Contact } from "../components/contact";
import React,{Fragment} from 'react';
import LeaderListButton from "../components/LeaderListButton";
import LeaderListSearch from "../components/LeaderListSearch";
import LeaderList from "../components/LeaderList";


export const List = (props) => {
  return (
    <Fragment>
    <div>
    <Navigation/>
    <LeaderListButton/>
    <LeaderListSearch/>
    <LeaderList/>

    <Contact/>

    </div>
    </Fragment>
    
    
  )
};
export default List;
