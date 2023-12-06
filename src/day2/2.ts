import * as readline from 'node:readline/promises';
const fs = require('fs');

  
type Color = 'red' | 'green' |  'blue';

type ColorCubes = Record<Color, number>;

const cubesConfig: ColorCubes = {
  red: 12, green: 13, blue: 14,
}

export function getPossibleGameNumber(line: string): number {
  const [gameStr,  setsStr] = line.split(':');
  const [_, game] = gameStr.split(' ');
  
  const sets = setsStr.split(';');

  for (const set of sets) {
    const balls = set.split(',');
    for (const ball of balls) {
      const [_, quantity, color] = ball.split(' ');
      if (+quantity > cubesConfig[color as Color]) {
        return 0;
      }
    }
  }

  return +game;
}


export function getPowerOfSet(line: string): number {
  const minCubesRequired: ColorCubes = {
    red: 0, green: 0, blue: 0,
  }

  const  sets = line.split(':')[1].split(';');

  for (const set of sets) {
    const balls = set.split(',')
    for (const ball of balls) {
      const [_, quantity, color] = ball.split(' ');
      const minCubes = minCubesRequired[color as Color]
      if (minCubes < +quantity) {
        minCubesRequired[color as Color] = +quantity;
      }
    }
  }

  const power = Object.values(minCubesRequired).reduce((acc, curr) =>  acc * curr, 1)

  return power;
}



async function main() {
  const file = readline.createInterface({
    input: fs.createReadStream('./src/dataset/input2.txt'),
    output: process.stdout,
    terminal: false
  });

  let sum = 0;
  let power = 0;

  await file.on('line', (line) => {
    sum += getPossibleGameNumber(line)
    power += getPowerOfSet(line)
  });

  console.log('Sum of possible games is', sum)
  console.log('Power of cubes is', power)
}

// main()