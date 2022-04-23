import { useSelector } from 'react-redux';
import { CartIcon, cartIcon } from '../icons';

import React from 'react';

const Navbar = () => {
  const getStoreProps = (store) => ({ ...store });
  const { cart } = useSelector(getStoreProps);

  console.log(cart);

  return (
    <nav>
      <div className='nav-center'>
        <h3>Redux toolkit</h3>
        <div className='nav-container'>
          <CartIcon />
          <div className='amount-container'>
            <p className='total-amount'>0</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
