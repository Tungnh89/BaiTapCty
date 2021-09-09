import React, { useState } from 'react';
import AddProduct from './components/AddProduct';
import ListProduct from './components/ListProduct';
import SumInput from './components/SumInput';


function App() {
  const [productList, setListProduct] = useState([
    { id: 0, title: 'sản phẩm 1', completed: true},
    { id: 1, title: 'sản phẩm 2', completed: false},
    { id: 2, title: 'sản phẩm 3', completed: false}

  ]);

  const handleOnSubmit = (formValue) => {
    console.log('giá trị trong form file App : ', formValue);
    const newProduct = {
      id: productList.length + 1,
      ...formValue
    }
    const newProductList = [...productList];
    newProductList.push(newProduct);
    setListProduct(newProductList)
    
  }
  

  return (
    <div className="">
      <ListProduct todo={productList} />
      <h2 className="bg-warning text-center">Thêm Todo</h2>
      <AddProduct onSubmits={handleOnSubmit} />
      <SumInput />
    </div>
  );
}

export default App;
