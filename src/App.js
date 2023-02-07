import Costs from './components/Costs/Costs'
import NewCost from './components/NewCost/NewCost';

function App() {

  const costs =[
    {
      id: 'c1',
      date:new Date(2021,2,12),
      description: 'Холодильник',
      amount: 999.99
    },
    {
      id: 'c2',
      date:new Date(2021,5,4),
      description: 'ПК',
      amount: 1254.57
    },
    {
      id: 'c3',
      date:new Date(2021,9,30),
      description: 'Джинсы',
      amount: 123.23
    }

  ]
  const addCostHandler = (cost) =>{
    console.log(cost);
    console.log('App component')
  } 
  return (
    <div>
        <NewCost onAddCost={addCostHandler}/>      
        <Costs costs = {costs}/>      
    </div>
  );
}

export default App;


//3.13