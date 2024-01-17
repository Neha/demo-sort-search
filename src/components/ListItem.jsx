import { useState } from "react";
import Input from "./Input";
import Button from './Button';

const ListItem = ({product,selectItemHandler,deleteItemHandler}) => {
    const [ isItemSelected, setIsItemSelected] = useState(false);
    
    const selectItem = (e,product) => {
        setIsItemSelected(!isItemSelected)
        selectItemHandler(product)
    }

    const deleteItem = (product) => {
        deleteItemHandler(product);  
    }

    const createList = () => {
        return <li className={`flex p-2 border-b-2 ${isItemSelected ? 'bg-red-200' : ''}`} key={product.id}>
            <div className="w-24 ">
               <Input type="checkbox" selectHandler={(e) => selectItem(e,product)} /> 
               </div>
               <div className="w-32">
               <h2 >{product.name}</h2> 
               </div>
               <div className="w-24">
               <h2 >{product.price} </h2>
               </div>
               <div className="w-24">
               <Button 
                buttonLabel="delete" 
                disabled={isItemSelected ? false : true}
               clickHandler={() => deleteItem(product)}/> 
               </div>
         </li>
     
    }

    return <> {product && createList()} </>
}

export default ListItem;