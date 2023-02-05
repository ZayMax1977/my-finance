import CostItem from './CostItem'
import './Costs.css'
import Card from './Card'

function Costs(props){

    return(
        <Card className='costs'>
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
      </Card>
    );
}

export default Costs



