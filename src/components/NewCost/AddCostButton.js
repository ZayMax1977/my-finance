import './AddCostButton.css'
const AddCostButton =(props) =>{
    const  hiddenForm = () => {
        const anchorHiddenForm = false;
        props.hiddenForm(anchorHiddenForm)
    }
    return (
        <div className='new-cost-button'>
         <button type='button' onClick={hiddenForm}>Добавить расход</button>
        </div>
    )

}

export default AddCostButton;