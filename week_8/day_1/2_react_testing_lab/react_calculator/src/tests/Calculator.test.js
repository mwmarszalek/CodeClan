import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {

  let container;


  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  });
  it('should be able to add 1 to 4', () => {
    const number1 = container.getByTestId('number1')
    const number4 = container.getByTestId('number4')
    const addButton = container.getByTestId('operator-add')
    const runningTotal = container.getByTestId('running-total');
    const result = container.getByTestId('operator-equals')
    fireEvent.click(number1)
    fireEvent.click(addButton)
    fireEvent.click(number4)
    fireEvent.click(result)
    expect(runningTotal.textContent).toEqual('5')
  })
  it('should be able to substract 4 from 7 and get 3', () => {
    const number4 = container.getByTestId('number4')
    const number7 = container.getByTestId('number7')
    const subtractButton = container.getByTestId('operator-subtract')
    const result = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(number7)
    fireEvent.click(subtractButton)
    fireEvent.click(number4)
    fireEvent.click(result)
    expect(runningTotal.textContent).toEqual('3')
  })
  it('should be able to multiply 3 by 5 and get 15', () => {
    const number3 = container.getByTestId('number3')
    const number5 = container.getByTestId('number5')
    const multiplyButton = container.getByTestId('operator-multiply')
    const result = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(number3)
    fireEvent.click(multiplyButton)
    fireEvent.click(number5)
    fireEvent.click(result)
    expect(runningTotal.textContent).toEqual('15')
  })
  it('should be able to divide 21 by 7 and get 3', () => {
    const number2 = container.getByTestId('number2')
    const number1 = container.getByTestId('number1')
    const number7 = container.getByTestId('number7')
    const divideButton = container.getByTestId('operator-divide')
    const result = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(number2)
    fireEvent.click(number1)
    fireEvent.click(divideButton)
    fireEvent.click(number7)
    fireEvent.click(result)
    expect(runningTotal.textContent).toEqual('3')
  })
  it('concatenate multiple numbers', () => {
    const number2 = container.getByTestId('number2')
    const number1 = container.getByTestId('number1')
    const number7 = container.getByTestId('number7')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(number2)
    fireEvent.click(number1)
    fireEvent.click(number7)
    expect(runningTotal.textContent).toEqual('217')
  })
  it('chain multiple operations together', () => {
    const number2 = container.getByTestId('number2')
    const number1 = container.getByTestId('number1')
    const number7 = container.getByTestId('number7')
    const multiplyButton = container.getByTestId('operator-multiply')
    const addButton = container.getByTestId('operator-add')
    const runningTotal = container.getByTestId('running-total');
    const result = container.getByTestId('operator-equals')
    fireEvent.click(number2)
    fireEvent.click(addButton)
    fireEvent.click(number1)
    fireEvent.click(multiplyButton)
    fireEvent.click(number7)
    fireEvent.click(result)
    expect(runningTotal.textContent).toEqual('21')
  })
  it('clear the running total window without affecting the application', () => {
    const number2 = container.getByTestId('number2')
    const number1 = container.getByTestId('number1')
    const number3 = container.getByTestId('number3')
    const multiplyButton = container.getByTestId('operator-multiply')
    const clear = container.getByTestId('clear')
    const runningTotal = container.getByTestId('running-total');
    const result = container.getByTestId('operator-equals')
    fireEvent.click(number2);
    fireEvent.click(multiplyButton);
    fireEvent.click(number1);
    fireEvent.click(result);
    fireEvent.click(clear);
    fireEvent.click(multiplyButton);
    fireEvent.click(number3);
    fireEvent.click(result);
    expect(runningTotal.textContent).toEqual('6')
  })
  
})

