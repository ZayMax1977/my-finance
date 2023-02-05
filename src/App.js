import Costs from './components/Costs'

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
      
        <Costs costs = {costs}/>
      
        
      
    </div>
   
    
  );
}

export default App;
