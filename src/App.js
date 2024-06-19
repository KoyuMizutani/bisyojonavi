import React, { useState } from 'react';
import './App.css';
import GirlImage from './girl.png';  // 画像ファイルをインポート

function App() {
  const [menu, setMenu] = useState('');

  const handleSuggest = () => {
    const menus = ['寿司', 'カレーライス', 'ラーメン', '天ぷら', 'お好み焼き'];
    setMenu(menus[Math.floor(Math.random() * menus.length)]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Header-title">美少女の献立提案</h1>
      </header>
      <div className="Content">
        <img src={GirlImage} alt="美少女" className="Girl-image" />
        <h2>今日の献立</h2>
        <button onClick={handleSuggest}>献立を提案する</button>
        <p>{menu ? `「${menu}がいいですね！」` : ''}</p>
      </div>
    </div>
  );
}

export default App;
