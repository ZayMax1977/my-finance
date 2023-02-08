import CostItem from './CostItem'
import './Costs.css'
import Card from '../UI/Card'
import CostsFilter from './CostsFilter';
import React,{useState} from "react"

function Costs(props){
    const [selectedYear,setSelectedYear] = useState('2021');
    
    const yearChangeHandler = (year)=>{
      setSelectedYear(year);

    }

    const filteredCosts = props.costs.filter((cost)=>
    {
      return cost.date.getFullYear().toString() === selectedYear;
    });
    
    return(
        <Card className='costs'>
        <CostsFilter year={selectedYear} onChangeYear ={yearChangeHandler}/>
      
        {filteredCosts.length === 0 && 
          <p>В этм году расходов не было</p>}

        {filteredCosts.length !== 0 && filteredCosts.map((cost) => (
          <CostItem 
          key = {cost.id}
          date ={cost.date}
          description={cost.description}
          amount = {cost.amount}/>
        ))
        
      }
      
      </Card>
    );
}

export default Costs



