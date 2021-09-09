import React, { useState } from 'react';

const SumInput = () => {

      const [valueA, setValueA] = useState(0);
      const [valueB, setValueB] = useState(0);

      return (
            <div className="container">
                  <div className="mb-2">
                        <span>Tổng a + b = <strong>{Number(valueA) + Number(valueB)}</strong></span>
                  </div>

                  <form>
                        <div className="mb-2">
                              <label htmlFor="value1" className="form-label">Giá trị a</label>
                              <input 
                                    className="form-control" 
                                    type="number" 
                                    placeholder="Nhập giá trị a" 
                                    value={valueA}
                                    onChange={e => setValueA(e.target.value)}
                              />
                        </div>

                        <div className="mb-2">
                              <label htmlFor="value2" className="form-label">Giá trị b</label>
                              <input 
                                    className="form-control" 
                                    type="number" 
                                    placeholder="Nhập giá trị b"  
                                    value={valueB}
                                    onChange={e => setValueB(e.target.value)}
                              />
                        </div>
                  </form>
            </div>
      )
}

export default SumInput
