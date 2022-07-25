import { Navigation } from "../components/navigation";
import { Contact } from "../components/contact";
import React,{Fragment} from 'react';
import CustomizedButtons from "../components/SalesButton";
import SaleSearch from "../components/SalesSearch";
import CustomizedTables from "../components/SalesList";
export const Sales = (props) => {
  return (
    <Fragment>
    <div>
    <Navigation/>
    <CustomizedButtons/>
    <SaleSearch/>
    <CustomizedTables/>
    <Contact/>

    </div>
    </Fragment>
    
    
  )
};
export default Sales;
