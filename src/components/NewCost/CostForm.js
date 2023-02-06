import './CostForm.css'

const CostForm = () =>{
    const NameChangeHandler =(e) =>{
        console.log(e.target.value);
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
                    <input type='number' min='0.01' step='0.01'/>
                </div>
                <div className='new-cost__control label'>
                    <label>Дата</label>
                    <input type='date' min='2023-02-06' step='2025-02-06'/>
                </div>
                <div className='new-cost__actions'>
                    <button type='submit'>Добавить Расход</button>
                </div>
            </div>
        </form>
        
        
    );


}

export default CostForm;