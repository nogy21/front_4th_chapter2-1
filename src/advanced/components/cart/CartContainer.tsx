import { useState } from 'react';
import { ProductListType } from '../../types/ProductType';
import Cart from './Cart';

export default function CartContainer() {
  const [productList, setProductList] = useState<ProductListType>([]);
  const handleClick = () => {};

  return <Cart productList={productList} handleClick={handleClick} />;
}