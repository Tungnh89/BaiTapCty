import React, { useState } from 'react';
import './styles.css';


const ListProduct = ({ todo }) => {
      console.log("props in file ListProduct : ", todo);
      const [check, setCheck] = useState(todo);
      
      const handleCheckbox = (e) => {
            const newCheck = [...check];
            // console.log('click checkbox', newCheck)
            newCheck[e].completed = !newCheck[e].completed;
            setCheck(newCheck)
      }

      return (
            <div className="header-list">
                  {todo.map((item, index) => {
                        return <li key={index} className={item.completed ? "nav-list" : ''}>
                                    <input 
                                          type="checkbox" 
                                          defaultChecked={item.completed} 
                                          onChange={() => handleCheckbox(index)} 
                                          className="me-1" 
                                    />

                                    {item.title}
                              </li>
                  })}
            </div>
      )
}

export default ListProduct
