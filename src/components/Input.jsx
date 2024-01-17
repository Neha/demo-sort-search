const Input = ({type, selectHandler, classes, placeholder}) => {
    return <input type={type} onChange={selectHandler} className={`p-2 border-slate-600 border-2 rounded-md ${classes}`} placeholder={placeholder}/>
}

export default Input;