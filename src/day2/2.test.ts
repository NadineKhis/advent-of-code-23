import { getPossibleGameNumber, getPowerOfSet } from "./2";
import {expect, test, describe} from 'bun:test';

describe('first part', () => {
  test('', () => {
    expect(getPossibleGameNumber('Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green')).toBe(1);
  })

  test('', () => {
    expect(getPossibleGameNumber('Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue')).toBe(2);
  })

  test('', () => {
    expect(getPossibleGameNumber('Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red')).toBe(0);
  })

  test('', () => {
    expect(getPossibleGameNumber('Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red')).toBe(0);
  })
  test('', () => {
    expect(getPossibleGameNumber('Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green')).toBe(5);
  })
})

describe('second part', () => {
  test('', () => {
    expect(getPowerOfSet('Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green')).toBe(48);
  })

  test('', () => {
    expect(getPowerOfSet('Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue')).toBe(12);
  })

  test('', () => {
    expect(getPowerOfSet('Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red')).toBe(1560);
  })

  test('', () => {
    expect(getPowerOfSet('Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red')).toBe(630);
  })
  test('', () => {
    expect(getPowerOfSet('Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green')).toBe(36);
  })
})
