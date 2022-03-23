import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './compoents/index.js'
import './compoents/blue.css'
import Home from './compoents/index.js';

const Counter = () => (
  <div
    className="container"
    style={{
      minWidth: 200
    }}
  >
    <div className="chevron chevron-up" />
    <div className="number">256</div>
    <div className="chevron chevron-down" />
  </div>
);

// 使用 <Counter /> 來帶入 React 組件
ReactDOM.render(
  <div style={{ display: "flex", justifyContent: "space-between" }}>
    <Counter />
    <Counter />
    <Counter />
    {Home()}
  </div>,
  document.getElementById("root")
);
