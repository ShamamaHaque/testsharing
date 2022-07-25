
import { Navigation } from "../components/navigation";
import { Contact } from "../components/contact";
import React,{Fragment} from 'react';
import AddSearch from "../components/AddLeaSearch";
import AddLeader from "../components/AddLeader";
import CustomizedButtons from "../components/AddLeaButton";


export const AddTech = (props) => {
  return (
    <Fragment>
    <div>
    <Navigation/>
    <CustomizedButtons/>
    <AddSearch/>
    <AddLeader/>

    <Contact/>

    </div>
    </Fragment>
    
    
  )
};
export default AddTech;
