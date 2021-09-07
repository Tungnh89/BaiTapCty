import React from 'react';
import './styles.css';


const ListProduct = ({ todo }) => {
      console.log("props in file ListProduct : ", todo);
      const handleClick = () => {

      }

      return (
            <div className="header-list">
                  {todo.map((item, index) => {
                        return <li key={index} className="nav-list">
                                    <input type="checkbox" className="me-1" onClick={handleClick} />
                                    {item.title} - {item.completed}
                              </li>
                  })}
            </div>
      )
}

export default ListProduct
