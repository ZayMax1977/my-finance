import './CostList.css'
import CostItem from './CostItem';


const CostList =(props) =>{
    let costsContent = <h2 className='cost-list__fallback'>В этом году расходов не было</h2>;

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
  