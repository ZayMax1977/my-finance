import CostItem from './CostItem'
import './Costs.css'

function Costs(props){

    return(
        <div className='costs'>
        <CostItem 
            date ={props.costs[1].date}
            describtion={props.costs[1].describtion}
            amount = {props.costs[1].amount}/>

      <CostItem
        date ={props.costs[1].date}
        describtion={props.costs[1].describtion}
        amount = {props.costs[1].amount}/>
      

      <CostItem
        date ={props.costs[2].date}
        describtion={props.costs[2].describtion}
        amount = {props.costs[2].amount}/>
      </div>
    );
}

export default Costs



