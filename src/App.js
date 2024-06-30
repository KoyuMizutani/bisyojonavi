import React, { useState, useEffect } from 'react';
import './App.css';
import GirlImage from './girl.png';  // 画像ファイルをインポート
import GirlSmilingImage from './girl_smiling.png';  // 画像ファイルをインポート
import BentoImage from './bento.jpg';

function App() {
  const [menu, setMenu] = useState('');
  const [menuImage, setMenuImage] = useState('');
  const [recipe, setRecipe] = useState('');
  const [affection, setAffection] = useState(0);  // 好感度の状態
  const maxAffection = 100;  // 好感度の最大値
  const currentGirlImage = affection >= maxAffection ? GirlSmilingImage : GirlImage;
  const [currentTime, setCurrentTime] = useState(new Date());  // 現在時刻の状態
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

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
    setAffection(prev => Math.min(prev + 1, maxAffection));  // 好感度を増加
  };

  const handleOrder = () => {
    alert(`注文が確定しました。身長: ${height}cm, 体重: ${weight}kg`);
    setAffection(prev => Math.min(prev + 20, maxAffection));
    setOrderPlaced(true);
  };

  const handleReset = () => {
    setOrderPlaced(false);
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
          <button onClick={handleSuggest}>なでまわす</button>
        </div>
        <div className="right-panel">
          {orderPlaced ? (
            <>
              <img src={BentoImage} alt="お弁当" className="Bento-image" />
              <p>あなたにピッタリのヘルシー弁当をお届けします！</p>
              <button onClick={handleReset}>もう一度注文する</button>
            </>
          ) : (
            <>
              <p>もうすぐ夜ご飯の時間だね！身長と体重を教えてくれたら、あなたにぴったりなお弁当を夜にお届けするよ♪ 税込1000円だよ！</p>
              <input
                type="number"
                value={height}
                onChange={e => setHeight(e.target.value)}
                placeholder="身長を入力してください (cm)"
              />
              <input
                type="number"
                value={weight}
                onChange={e => setWeight(e.target.value)}
                placeholder="体重を入力してください (kg)"
              />
              <button onClick={handleOrder}>弁当を注文する</button>
            </>
          )}
          
        </div>
      </div>
    </div>
  );
}

export default App;
