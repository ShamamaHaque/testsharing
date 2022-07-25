import { Navigation } from "../components/navigation";
import { Contact } from "../components/contact";
import React,{Fragment} from 'react';
import CustomizedButtons from "../components/LocationButton";
import LocSearch from "../components/LocationSearch";
import CustomizedTables from "../components/LocationsList";
export const Location = (props) => {
  return (
    <Fragment>
    <div>
    <Navigation/>
    <CustomizedButtons/>
    <LocSearch/>
    <CustomizedTables/>
    
    <Contact/>

    </div>
    </Fragment>
    
    
  )
};
export default Location;
