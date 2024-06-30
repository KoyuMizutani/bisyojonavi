import React, { useState } from 'react';
import './App.css';
import GirlImage from './girl.png';  // 画像ファイルをインポート

function App() {
  const [menu, setMenu] = useState('');
  const [menuImage, setMenuImage] = useState('');
  const [recipe, setRecipe] = useState('');

  const handleSuggest = () => {
    const menus = [
      { name: '寿司', image: './sushi.jpeg', recipe: 'お寿司の作り方...' },
      { name: 'カレーライス', image: './curry.jpeg', recipe: 'カレーライスの作り方...' },
      { name: 'ラーメン', image: './ramen.jpeg', recipe: 'ラーメンの作り方...' },
      { name: '天ぷら', image: './tenpura.jpeg', recipe: '天ぷらの作り方...' },
      { name: 'お好み焼き', image: './okonomiyaki.jpeg', recipe: 'お好み焼きの作り方...' }
    ];
    const selectedMenu = menus[Math.floor(Math.random() * menus.length)];
    setMenu(selectedMenu.name);
    setMenuImage(selectedMenu.image);
    setRecipe(selectedMenu.recipe);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Header-title">美少女ナビ⭐️糖ケアごはん</h1>
        <div className="Menu-icon">&#9776;</div>
      </header>
      <div className="content">
        <div className="left-panel">
          <img src={GirlImage} alt="美少女" className="Girl-image" />
          <button onClick={handleSuggest}>献立を提案する</button>
        </div>
        <div className="right-panel">
          {menu && (
            <>
              <img src={menuImage} alt={menu} className="Menu-image" />
              <h2>{menu}</h2>
              <p>{recipe}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
