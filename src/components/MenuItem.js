import React from 'react';
import MenuList from './MenuList';
const MenuItem = (props) => {
  const submenu = props.elemento.items;
  if (submenu) {
    return (
      <li>
        {props.elemento.nombre}
        <MenuList elementos={submenu} />
      </li>
    )
  }
  return (
    <li>
      {props.elemento.nombre}
    </li>
  )
}
export default MenuItem;















