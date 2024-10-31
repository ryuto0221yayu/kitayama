"use strict";

  const BB = document.getElementById('Bb');

  const RB = document.getElementById('Rb');

  const HAKO = document.getElementById('hako');

  let sumA = 0;
  let sumH = 0;
  let dice;
    addEventListener(('keydown'), e => {
      dice = Math.floor(Math.random() * 3 + 1);//かけてる数字を変更で確立変えれる(1/6なら ()* 6 + 1)
      console.log(dice);
      if (BB.classList.contains('ugoku') == true || RB.classList.contains('ugoku') == true){
        BB.classList.remove('ugoku');
        RB.classList.remove('ugoku');
        HAKO.classList.add('deru');
      }else if (dice == 2) {
        BB.classList.add('ugoku');
        HAKO.classList.remove('deru');
        sumA++;
      } else {
        RB.classList.add('ugoku');
        HAKO.classList.remove('deru');
        sumH++;
      }
      console.log(`当選者: ${sumA}人\n非当選者: ${sumH}人`);
    });

 
