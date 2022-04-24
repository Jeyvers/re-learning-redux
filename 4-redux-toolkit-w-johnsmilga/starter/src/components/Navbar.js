import { useSelector } from 'react-redux';
import { CartIcon } from '../icons';

import React from 'react';

const Navbar = () => {
  // One way to get the items from the store. The getStoreProps functional can be made a resuable function in the slice file.
  const getStoreProps = (store) => ({ ...store });
  const { cart } = useSelector(getStoreProps);
  const { amount } = cart;

  console.log(cart);

  return (
    <nav>
      <div className='nav-center'>
        <h3>Redux toolkit</h3>
        <div className='nav-container'>
          <CartIcon />
          <div className='amount-container'>
            <p className='total-amount'>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
