import React, { useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Order from "./Order";

const showMyShop = (props) => {
  return (
    <div>
      {props.myShop.map((el) => (
        <Order key={el.id} item={el} onDelete={props.onDelete}/>
      ))}
    </div>
  );
};

const showNo=()=>{
  return(
  <div className='empty'>
    <h2>Товаров нет</h2>
  </div>)
}

export default function Header(props) {
  let [status, changeStatus] = useState(false);

  const setStatus = () => {
    changeStatus(!status);
  };

  return (
    <header>
      <div>
        <span className="logo">Store</span>
        <ul className="nav">
          <li>О нас</li>
          <li>Контакты</li>
          <li>Личный кабинет</li>
        </ul>
        <HiOutlineShoppingCart
          onClick={setStatus}
          className={`shop-card ${status && "active"}`}
        />
        {status && (
          <div className="my-card">
            {props.myShop.length > 0 ? showMyShop(props) : showNo()}
          </div>
        )}
      </div>
      <div className="pres"></div>
    </header>
  );
}
