import React from 'react';
import { useForm } from 'react-hook-form';

const FormValues = {
      title: String,
      completed: String
}

const AddProduct = ({ onSubmits }) => {

      const { register, handleSubmit } = useForm(FormValues);

      const onSubmit = (data, e) => {
            const newItem = {
                  title: data.title,
                  completed: data.completed
            }
            onSubmits(newItem);
            // console.log('giá trị : ',newItem);
            //reset form
            e.target.reset();
      }

      return (
            <div>
                  <form className="m-5" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-1">
                              <label htmlFor="title" className="form-label">Title</label>
                              <input 
                                    {...register("title")}
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Title" 
                                    id="title"
                              />
                        </div>

                        <div className="mb-3">
                              <label htmlFor="completed" className="form-label">Completed</label>
                              <input 
                                    {...register("completed")}
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Completed" 
                                    id="completed"
                              />
                        </div>

                        <button className="mt-2 btn btn-primary" type="submit">Submit</button>
                  </form>
            </div>
      )
}

export default AddProduct
