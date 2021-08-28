import { useHistory } from 'react-router-dom';
import React, { useEffect } from 'react';

import Game from '../game/game';

const ArcadePage = () => {
  const history = useHistory();

  // On page load, trigger game function
  useEffect(() => {
    Game();
  }, []);

  return (
    <div>
      <h1>Arcade</h1>

      <button onClick={() => history.push('/')}>Back</button>

      <div className="gamecontainerdiv">
        <canvas id="gamecontainer" />
      </div>

      <div>
        <h2>Directions</h2>

        <p>Its time to escape, Boris! You better get going!</p>

        <ul>
          <li>L/R - Move left and right</li>
          <li>Space - Jump</li>
        </ul>
      </div>
    </div>
  );
};

export default ArcadePage;
