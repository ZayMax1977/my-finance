import  React, {useState} from "react";
import './CostForm.css'

const CostForm = (props) =>{
    const [InputName,setInputName] = useState("");
    const [InputAmount,setInputAmount] = useState("");
    const [InputDate,setInputDate] = useState("");

    const NameChangeHandler =(e) =>{
        setInputName(e.target.value)
    };
    const AmountChangeHandler =(e) =>{
        setInputAmount(e.target.value)
    };
    const DateChangeHandler =(e) =>{
        setInputDate(e.target.value)
    };

    const SubmitHandler = (e) =>{
        e.preventDefault(); // убираем дефолтное поведение, в данном случае что бы данные ф форме не пропадали при перезагрузке формы при нажатии на кнопку
        const costData = {
            description:InputName, // данные берем из состояний
            amount:InputAmount,
            date:new Date(InputDate)
        };  
        props.onSaveCostData(costData);
        setInputName(''); // отчищаем  поля в форме
        setInputAmount('');
        setInputDate('');

    };

    const  hiddenForm = () => {
        const anchorHiddenForm = true;
        props.hiddenForm(anchorHiddenForm)
    }
    return (                               
        <form onSubmit={SubmitHandler}>
            <div className='new-cost__controls'>
                <div className='new-cost__control label'>
                    <label>Название</label>
                    <input type='text' value={InputName} onChange={NameChangeHandler}/>
                </div>
                <div className='new-cost__control label'>
                    <label>Сумма</label>
                    <input type='number' min='0.01' step='0.01' value={InputAmount} onChange={AmountChangeHandler}/>
                </div>
                <div className='new-cost__control label'>
                    <label>Дата</label>
                    <input type='date' min='2019-02-06' step='2025-02-06' value={InputDate} onChange={DateChangeHandler}/>
                </div>
                <div className='new-cost__actions'>
                    <button type='submit'>Добавить Расход</button>
                    <button type='button' onClick={hiddenForm}>Отмена</button>
                </div>
            </div>
        </form>
        
        
    );


}

export default CostForm;