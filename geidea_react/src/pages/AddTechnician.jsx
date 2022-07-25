import { Header } from "../components/header";
import { Navigation } from "../components/navigation";
import { Contact } from "../components/contact";
import React,{Fragment} from 'react';
import CustomizedButtons from "../components/TechAddButton";
import TechSearch from "../components/AddTechnicianSearch";
import AddTechnician from "../components/AddTechnician";
export const Sample = (props) => {
  return (
    <Fragment>
    <div>
    <Navigation/>
    <CustomizedButtons/>
    <TechSearch/>
    <AddTechnician/>
    <Contact/>

    </div>
    </Fragment>
    
    
  )
};
export default Sample;
