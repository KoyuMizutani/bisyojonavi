import React, { useState, useEffect } from 'react';
import './App.css';
import GirlImage from './girl.png';  // 画像ファイルをインポート
import GirlSmilingImage from './girl_smiling.png';  // 画像ファイルをインポート

function App() {
  const [menu, setMenu] = useState('');
  const [menuImage, setMenuImage] = useState('');
  const [recipe, setRecipe] = useState('');
  const [affection, setAffection] = useState(0);  // 好感度の状態
  const maxAffection = 100;  // 好感度の最大値
  const currentGirlImage = affection >= maxAffection ? GirlSmilingImage : GirlImage;
  const [currentTime, setCurrentTime] = useState(new Date());  // 現在時刻の状態

  // 現在時刻を1秒ごとに更新
  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timerId);  // コンポーネントアンマウント時にクリーンアップ
  }, []);

  const formattedTime = {
    hours: currentTime.getHours().toString().padStart(2, '0'),
    minutes: currentTime.getMinutes().toString().padStart(2, '0')
  };

  const handleSuggest = () => {
    const menus = [
      { name: '寿司', image: '/path-to-sushi-image.jpg', recipe: 'お寿司の作り方...' },
      { name: 'カレーライス', image: '/path-to-curry-image.jpg', recipe: 'カレーライスの作り方...' },
      { name: 'ラーメン', image: '/path-to-ramen-image.jpg', recipe: 'ラーメンの作り方...' },
      { name: '天ぷら', image: '/path-to-tempura-image.jpg', recipe: '天ぷらの作り方...' },
      { name: 'お好み焼き', image: '/path-to-okonomiyaki-image.jpg', recipe: 'お好み焼きの作り方...' }
    ];
    const selectedMenu = menus[Math.floor(Math.random() * menus.length)];
    setMenu(selectedMenu.name);
    setMenuImage(selectedMenu.image);
    setRecipe(selectedMenu.recipe);
    setAffection(prev => Math.min(prev + 20, maxAffection));  // 好感度を増加
  };

  return (
    <div className="App">
      <div className="App-background"></div>  {/* 背景専用のdivを追加 */}
      <header className="App-header">
        <h1 className="Header-title">美少女ナビ⭐️糖ケアごはん</h1>
        <div className="Menu-icon">&#9776;</div>
      </header>
      <div className="content">
        <div className="left-panel">
          <div className="current-time">
            {formattedTime.hours}<span className="blinking-colon">:</span>{formattedTime.minutes}
          </div>
          <img src={currentGirlImage} alt="美少女" className="Girl-image" />
          <div className="affection-meter">
            <div className="affection-bar" style={{ width: `${affection}%` }}></div>
          </div>
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
