import Costs from './components/Costs/Costs'
import NewCost from './components/NewCost/NewCost';

function App() {

  const costs =[
    {
      date:new Date(2021,2,12),
      description: 'Холодильник',
      amount: 999.99
    },
    {
      date:new Date(2021,5,4),
      description: 'ПК',
      amount: 1254.57
    },
    {
      date:new Date(2021,9,30),
      description: 'Джинсы',
      amount: 123.23
    }

  ]
  return (
    <div>
        <NewCost/>      
        <Costs costs = {costs}/>      
    </div>
  );
}

export default App;
