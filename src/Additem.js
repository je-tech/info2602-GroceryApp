import React from "react";
import {useState, useEffect}from 'react';
import{BrowserRouter as Router,Route,Link,NavLink,Switch,button}from "react-router-dom"
import './index2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';

const Additem=()=>{
  const [ADD_Items, Set_NewItem] = useState([]);

	const [User_input, Set_UserInput] = useState('');

	const [GroceryItem_tally, Grocery_Amount] = useState(0);

	
	
	  const NewItems_func = () => {
		 const New_Item = {

			itemName: User_input,

			Item_quantity: 1,

			isSelected: false,
		};

	  const User_ListItems = [...ADD_Items, New_Item];

		Set_NewItem(User_ListItems);

		GroceryAmount_func();

		Set_UserInput('');

		
	};

	  const ADDItems_func = (index) => {

		  const User_ADDSItems = [...ADD_Items];

		  User_ADDSItems[index].Item_quantity++;

		  GroceryAmount_func();

		  Set_NewItem(User_ADDSItems);

		
	};

	 const RemoveItems_func = (index) => {
		 const Remove_Items = [...ADD_Items];

		 Remove_Items[index].Item_quantity--;

		 Set_NewItem(Remove_Items);

		 GroceryAmount_func();
	};

	 const Selected_Items = (index) => {

		 const User_ListItems = [...ADD_Items];

		 User_ListItems[index].isSelected = !User_ListItems[index].isSelected;

		 Set_NewItem(User_ListItems);
	};

	  const GroceryAmount_func = () => {

		   const totalItemCount = ADD_Items.reduce((total, item) => {

			return total + item.Item_quantity;}, 0);

		   Grocery_Amount(totalItemCount);
	};
    
  return (
    <div className='app-background'>
  
    <div className='main-container'>

      
  
    <div className='add-item-box'>
  
    <input value={User_input} onChange={(event) => Set_UserInput(event.target.value)} className='add-item-input' placeholder='Add Missing Items' />
    <FontAwesomeIcon icon={faPlus} onClick={() => NewItems_func()} />
    </div>
  
    <div className='item-list'>
  
    {ADD_Items.map((item, index) => (
  
    <div className='item-container'>
  
    <div className='item-name' onClick={() =>Selected_Items (index)}>
  
  
    {item.isSelected ? (
    <>
    <FontAwesomeIcon icon={faCheckCircle} />
    <span className='completed'>{item.itemName}</span>
    </>
    ) : (
    <>
  
    <FontAwesomeIcon icon={faCircle} />
    <span>{item.itemName}</span>
    </>
    )}
  
    </div>
  
    <div className='Item_quantity'>
  
    <button><FontAwesomeIcon icon={faChevronLeft} onClick={() => RemoveItems_func (index)} /></button>
  
    <span> {item.Item_quantity} </span>
  
    <button><FontAwesomeIcon icon={faChevronRight} onClick={() => ADDItems_func(index)} /></button>
  
    </div>
  
    </div>
  
    ))}
    </div>
  
    <div className='total'>Item Total: {GroceryItem_tally}</div>
    
    </div>
  
    </div>
    );
    
};
  export default Additem;