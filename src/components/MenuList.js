import React from 'react';
import MenuItem from './MenuItem';
const MenuList = (props) => {
  return (
    <ul>
      {props.elementos.map(el => <MenuItem elemento={el} />)}
    </ul>
  )
}
export default MenuList;