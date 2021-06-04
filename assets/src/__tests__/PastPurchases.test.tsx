import React from 'react';
import ReactDOM from 'react-dom';
import PastPurchases from '../modules/pastPurchases/PastPurchases';

test('PastPurchases component renders without crashing', () => {
   const container = document.createElement('div');
   ReactDOM.render(<PastPurchases />, container);
   ReactDOM.unmountComponentAtNode(container); 
});