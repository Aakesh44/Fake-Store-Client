import React from 'react'
import { useContext } from 'react'
import DataContext from './DataContext'

const Brought = () => {

    const {memoizedBuyProduct} = useContext(DataContext)

    console.log(memoizedBuyProduct?.buyProduct);
  return (
    <div>
        hello {memoizedBuyProduct.buyProduct?.price}
    </div>
  )
}

export default Brought