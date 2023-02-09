import './Costs.css'
import Card from '../UI/Card'
import CostsFilter from './CostsFilter';
import React,{useState} from "react"
import CostList from './CostList';


function Costs(props){
    const [selectedYear,setSelectedYear] = useState('2021');
    
    const yearChangeHandler = (year)=>{
      setSelectedYear(year);

    }

    const filteredCosts = props.costs.filter((cost)=>
    {
      return cost.date.getFullYear().toString() === selectedYear ;
      
    });
 
  
    return(
        <Card className='costs'>
        <CostsFilter year={selectedYear} onChangeYear ={yearChangeHandler}/>
        <CostList filteredCosts = {filteredCosts} selectedYear = {selectedYear}costs ={props.costs} />
        
      </Card>
    );
};

export default Costs



