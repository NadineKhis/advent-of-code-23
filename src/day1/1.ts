import * as readline from 'node:readline/promises';
const fs = require('fs');

const spelledDigits = {
  'one': '1',
  'two': '2',
  'three': '3',
  'four': '4',
  'five': '5',
  'six': '6',
  'seven': '7',
  'eight': '8',
  'nine': '9',
}

function isNumeric(str: string){
  if (typeof str !== 'string') return false;

  return !isNaN(+str) && !isNaN(parseFloat(str))  
}

export function getNumbersFromLine (line: string): number {
  const numsWithPositions: Record<string, string> = {};
 
  // parse str numbers like '3'
  line?.split('').forEach((char: string, i: number) => {
    if (isNumeric(char)) {
      numsWithPositions[i.toString()] = char;
    }
  })

  // parse spelled numbers like 'one'
  for (const [key, value] of Object.entries(spelledDigits)) {
    const matches = line.matchAll(new RegExp(key, 'g'))
    for (const match of matches) {
      if (match.index) {
        numsWithPositions[match.index.toString()] = value
      }
    }
  }

  const arrOfNums = Object.values(numsWithPositions)

  const firstNum: string = arrOfNums[0] as string;
  let secondNum: string = arrOfNums.pop() as string;

  secondNum = secondNum || firstNum;

  return +(firstNum + secondNum);
}

async function main() {
  const file = readline.createInterface({
    input: fs.createReadStream('./src/dataset/input1.txt'),
    output: process.stdout,
    terminal: false
  });

  let sum = 0;

  await file.on('line', (line) => {
    sum += getNumbersFromLine(line)
  });

  console.log('Sum of numbers is', sum)
}

// main()
