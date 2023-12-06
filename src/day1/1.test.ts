import {getNumbersFromLine as getNumberFromLine} from "./1";
import {expect, test, describe} from 'bun:test';

// const getNumberFromLine = require('../1')
describe('first part', () => {
  test('', () => {
    expect(getNumberFromLine('1abc2')).toBe(12);
  })

  test('', () => {
    expect(getNumberFromLine('pqr3stu8vwx')).toBe(38);
  })

  test('', () => {
    expect(getNumberFromLine('a1b2c3d4e5f')).toBe(15);
  })

  test('', () => {
    expect(getNumberFromLine('treb7uchet')).toBe(77);
  })
})

describe('second part', () => {
  test('works with spelled numbers', () => {
  test('', () => {
    expect(getNumberFromLine('two1nine')).toBe(29);
  })
  test('', () => {
    expect(getNumberFromLine('eightwothree')).toBe(83);
  })

  test('', () => {
    expect(getNumberFromLine('abcone2threexyz')).toBe(13);
  })

  test('', () => {
    expect(getNumberFromLine('xtwone3four')).toBe(24);
  })

  test('', () => {
    expect(getNumberFromLine('4nineeightseven2')).toBe(42);
  })

  test('', () => {
    expect(getNumberFromLine('zoneight234')).toBe(14);
  })

  test('', () => {
    expect(getNumberFromLine('7pqrstsixteen')).toBe(76);
  })
  })
})
