import React from 'react';
import { LotteryClassIdEnum, } from './lib/game-id-enums';
import BettingElement from './components/betting-element';
import './App.css';

function App() {
  const SSCBettingElement1 =
    BettingElement.get(LotteryClassIdEnum.SSC, 1, 1);

  const SSCBettingElement2 =
    BettingElement.get(LotteryClassIdEnum.SSC, 1, 95);

  const IIX5BettingElement2 =
    BettingElement.get(LotteryClassIdEnum.IIX5, 1, 201);

  function _handleUpdateCombination(combination) {
    console.log('BettingElementSample combination', combination);
  }

  function _handleUpdatePosition(position) {
    console.log('BettingElementSample position', position);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Betting Elements</h1>
      </header>
      <div className="App-body">
        <div>
          <h4>時時彩-五星-直选复式</h4>
          <SSCBettingElement1
            onUpdateCombination={_handleUpdateCombination}
            onUpdatePosition={_handleUpdatePosition}
          />
        </div>
        <div style={{ marginTop: 30 }}>
          <h4>時時彩-任二-组选复式</h4>
          <SSCBettingElement2
            onUpdateCombination={_handleUpdateCombination}
            onUpdatePosition={_handleUpdatePosition}
          />
        </div>
        <div title="11選五-前三-直选复式" style={{ marginTop: 30 }}>
          <h4>11選五-前三-直选复式</h4>
          <IIX5BettingElement2
            onUpdateCombination={_handleUpdateCombination}
            onUpdatePosition={_handleUpdatePosition}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
