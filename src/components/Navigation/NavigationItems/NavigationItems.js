import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = () => (
  <ul className="NavigationItems">
    <NavigationItem to="/" exact>Counter</NavigationItem> 
    <NavigationItem to="/todo" exact>ToDo</NavigationItem>
  </ul>
);

export default NavigationItems;