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
        <img src={GirlImage} alt="美少女" style={{ width: '300px' }} />
        <h1>今日の献立</h1>
        <button onClick={handleSuggest}>献立を提案する</button>
        <p>{menu ? `「${menu}がいいですね！」` : ''}</p>
      </header>
    </div>
  );
}

export default App;