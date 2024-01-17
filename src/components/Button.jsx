const Button = ({ buttonLabel, clickHandler, disabled}) => {
    return <button 
           disabled={disabled} 
           onClick={clickHandler} 
           className={`rounded-md px-2 text-sm ${disabled ? 'bg-gray-400' : 'bg-green-400'}`}>{buttonLabel}</button>
}

export default Button;