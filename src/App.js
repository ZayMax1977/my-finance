import CostItem from './components/CostItem'
function App() {

  const costs =[
    {
      date:new Date(2021,2,12),
      describtion: 'Холодильник',
      amount: 999.99
    },
    {
      date:new Date(2021,5,4),
      describtion: 'ПК',
      amount: 1254.57
    },
    {
      date:new Date(2021,9,30),
      describtion: 'Джинсы',
      amount: 123.23
    }

  ]
  return (
    <div>
      <h1>Начнем изучение React</h1>
      <CostItem 
        date ={costs[0].date}
        describtion={costs[0].describtion}
        amount = {costs[0].amount}>
      </CostItem>

      <CostItem
        date ={costs[1].date}
        describtion={costs[1].describtion}
        amount = {costs[1].amount}>
      </CostItem>

      <CostItem
        date ={costs[2].date}
        describtion={costs[2].describtion}
        amount = {costs[2].amount}>
      </CostItem>


    </div>
   
    
  );
}

export default App;
