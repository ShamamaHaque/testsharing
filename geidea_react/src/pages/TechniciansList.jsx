import { Header } from "../components/header";
import { Navigation } from "../components/navigation";
import { Contact } from "../components/contact";
import React,{Fragment} from 'react';
import CustomizedButtons from "../components/TechListButton";
import TechSearch from "../components/ListTechnicianSearch";
import TechnicianList from "../components/TechnicianList";
export const TechList = (props) => {
  return (
    <Fragment>
    <div>
    <Navigation/>
    <CustomizedButtons/>
   
    <TechSearch/>
    <TechnicianList/>
    
    <Contact/>

    </div>
    </Fragment>
    
    
  )
};
export default TechList;
