import React, { useState } from 'react';


const AddProduct = ({ onSubmits }) => {

      const [value, setValue] = useState('');
      
      const handleChangeValue = (e) => {
            setValue(e.target.value)
      }

      const handleSubmit = (e) => {
            e.preventDefault();

            const formValue = {
                  title: value,
                  completed: false
            }

            onSubmits(formValue);
            setValue('')
      }

      return (
            <div>
                  <form className="m-5" onSubmit={handleSubmit}>
                        <div className="mb-1">
                              <label htmlFor="title" className="form-label">Title</label>
                              <input 
                                    name="title"
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Title" 
                                    id="title"
                                    value={value}
                                    onChange={handleChangeValue}
                              />
                        </div>

                        <button className="mt-2 btn btn-primary" type="submit">Submit</button>
                  </form>
            </div>
      )
}

export default AddProduct
