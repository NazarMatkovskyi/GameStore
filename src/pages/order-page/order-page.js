import React from 'react';
import { useSelector } from 'react-redux';
import { OrderItem } from '../../components/order-item';
import { calcTotalPrice, enumerate } from '../../components/utilis';
import './order-page.css';

export const OrderPage = () => {
  const items = useSelector((state) => state.cart.itemsInCart);

  if (items.length < 1) {
    return <h1>Your card empty!</h1>;
  }

  return (
    <div className="order-page">
      <div className="order-page__left">
        {items.map((game) => (
          <OrderItem game={game} />
        ))}
      </div>
      <div className="order-page__right">
        <div className="order-page__total-price">
          <span>
            {items.length} {enumerate(items.length, ['game', 'games', 'games'])} in total : <span>{ calcTotalPrice( items )} uan.</span>
            
          </span>
        </div>
      </div>
    </div>
  );
};
