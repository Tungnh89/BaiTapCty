import React, { useState } from 'react';
import AddProduct from './components/AddProduct';
import ListProduct from './components/ListProduct';


function App() {
  const [productList, setListProduct] = useState([
    { id: 0, title: 'sản phẩm 1', completed: 'ahaaaaaaa'},
    { id: 1, title: 'sản phẩm 2', completed: 'ohooooooo'},
    { id: 2, title: 'sản phẩm 3', completed: 'ahiiiiiii'}

  ]);

  const handleOnSubmit = (newItem) => {
    console.log('giá trị trong form file App : ', newItem);
    const newProduct = {
      id: productList.length + 1,
      ...newItem
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
    </div>
  );
}

export default App;
