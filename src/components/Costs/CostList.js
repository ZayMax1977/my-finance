import './CostList.css'
import CostItem from './CostItem';


const CostList =(props) =>{
  // console.log(props.selectedYear)
  // console.log(props.costs)
    let costsContent = <p className='cost-list__fallback'>В этом году расходов не было</p>;

    if (props.selectedYear === 'Все года'){
      costsContent = props.costs.map((cost) => (
        <CostItem 
        key = {cost.id}
        date ={cost.date}
        description={cost.description}
        amount = {cost.amount}/>
      ))}
      else if(props.filteredCosts.length > 0){
      costsContent = props.filteredCosts.map((cost) => (
        <CostItem 
        key = {cost.id}
        date ={cost.date}
        description={cost.description}
        amount = {cost.amount}/>
      ))
      }
return(
    <ul className='cost-list'>
        {costsContent}
    </ul>
    
)
};

export default CostList;
  