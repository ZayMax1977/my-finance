import  React, {useState} from "react";
import './CostForm.css'

const CostForm = () =>{
    const [name,setName] = useState("");
    const [amount,setAmount] = useState("");
    const [date,setDate] = useState("");


    const NameChangeHandler =(e) =>{
        setName(e.target.value)
        console.log(name)

    };
    const AmountChangeHandler =(e) =>{
        setAmount(e.target.value)
        console.log(amount)
      

    };
    const DateChangeHandler =(e) =>{
        setDate(e.target.value)
        console.log(date)

    };
    return (                               
        <form>
            <div className='new-cost__controls'>
                <div className='new-cost__control label'>
                    <label>Название</label>
                    <input type='text' onChange={NameChangeHandler}/>
                </div>
                <div className='new-cost__control label'>
                    <label>Сумма</label>
                    <input type='number' min='0.01' step='0.01' onChange={AmountChangeHandler}/>
                </div>
                <div className='new-cost__control label'>
                    <label>Дата</label>
                    <input type='date' min='2023-02-06' step='2025-02-06' onChange={DateChangeHandler}/>
                </div>
                <div className='new-cost__actions'>
                    <button type='submit'>Добавить Расход</button>
                </div>
            </div>
        </form>
        
        
    );


}

export default CostForm;