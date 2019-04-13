import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, cleanup, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

describe('The App Component', () => {

  // test for render component
  it('should render App', () => {
    render(<App/>);
    cleanup();
  })

describe('Display and Dashboard Components', () => {
  // test for displaying buttons
  it('should render Dashboard buttons', () => {
    const { getByText } = render(<App/>);
    getByText(/strike/i);
    getByText(/ball/i);
    getByText(/foul/i);
    getByText(/hit/i);
    cleanup();
  })

  it('should display balls and strikes', () => {
    const { getByText } = render(<App/>);
    getByText(/balls/i);
    getByText(/strikes/i);
    getByText(/fouls/i);
    getByText(/hits/i);
    cleanup();
  })
})

describe('Strike Button', () => {
  // test strike button
  it('should increment strikes by 1 when strike button is clicked', () => {
    const { getByText, getAllByTestId } = render(<App />);
    const button = getByText(/strike/i);
    const currentStrikes = getAllByTestId('strikes')[0];
    fireEvent.click(button);
    expect(currentStrikes).toHaveTextContent(/Strikes: 1/i)
    cleanup();
  })

  // after 3 strikes, everything resets to 0
  it('should reset all values to 0 after 3 strikes', () => {
    const { getByText, getAllByTestId } = render(<App />);
    const button = getByText(/strike/i);
    const currentStrikes = getAllByTestId('strikes')[0];
    const currentBalls = getAllByTestId('balls')[0];
    const currentFouls = getAllByTestId('fouls')[0];
    const currentHits = getAllByTestId('hits')[0];
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(currentStrikes).toHaveTextContent(/Strikes: 0/i)
    expect(currentBalls).toHaveTextContent(/balls: 0/i)
    expect(currentFouls).toHaveTextContent(/fouls: 0/i)
    expect(currentHits).toHaveTextContent(/hits: 0/i)
    cleanup();
  })
})
  
  describe('Ball button', () => {
// test ball button
it('should increment balls by 1 when ball button is clicked', () => {
  const { getByText, getAllByTestId } = render(<App />);
  const button = getByText(/ball/i);
  const currentBalls = getAllByTestId('balls')[0];
  fireEvent.click(button);
  expect(currentBalls).toHaveTextContent(/Balls: 1/i)
  cleanup();
})

// after 4 balls, everything resets to 0
it('should reset all values to 0 after 4 balls', () => {
    const { getByText, getAllByTestId } = render(<App />);
    const button = getByText(/ball/i);
    const currentStrikes = getAllByTestId('strikes')[0];
    const currentBalls = getAllByTestId('balls')[0];
    const currentFouls = getAllByTestId('fouls')[0];
    const currentHits = getAllByTestId('hits')[0];
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(currentStrikes).toHaveTextContent(/Strikes: 0/i)
    expect(currentBalls).toHaveTextContent(/balls: 0/i)
    expect(currentFouls).toHaveTextContent(/fouls: 0/i)
    expect(currentHits).toHaveTextContent(/hits: 0/i)
    cleanup();
  })
})


describe('Foul button', () => {
  // test foul button
  it('should increment fouls by 1 when foul button is clicked', () => {
    const { getByText, getAllByTestId } = render(<App />);
    const button = getByText(/foul/i);
    const currentFouls = getAllByTestId('fouls')[0];
    fireEvent.click(button);
    expect(currentFouls).toHaveTextContent(/fouls: 1/i)
    cleanup();
  })

  // test foul button when fouls have reached 2
  it('fouls value should stay at 2 after more than 2 fouls', () => {
    const { getByText, getAllByTestId } = render(<App />);
    const button = getByText(/foul/i);
    const currentFouls = getAllByTestId('fouls')[0];
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);
    expect(currentFouls).toHaveTextContent(2)
  })

})

  describe('Hit button', () => {
    // test hit button
    xit('should increment hits by 1 when hit button is clicked', () => {
      const { getByText, getAllByTestId } = render(<App />);
      const button = getByText(/hit/i);
      const currentHits = getAllByTestId('hits')[0];
      fireEvent.click(button);
      expect(currentHits).toHaveTextContent(/hits: 1/i)
      cleanup();
    })
  
    // test hit button should reset all values to 0 when clicked
    it('should reset all values to 0 when clicked', () => {
      const { getByText, getAllByTestId } = render(<App />);
      const button = getByText(/hit/i);
      const currentHits = getAllByTestId('hits')[0];
      const currentStrikes = getAllByTestId('strikes')[0];
      const currentBalls = getAllByTestId('balls')[0];
      const currentFouls = getAllByTestId('fouls')[0];
      fireEvent.click(button);
      expect(currentHits).toHaveTextContent(/hits: 0/i)
      expect(currentStrikes).toHaveTextContent(/Strikes: 0/i)
      expect(currentBalls).toHaveTextContent(/balls: 0/i)
      expect(currentFouls).toHaveTextContent(/fouls: 0/i)
      cleanup();
    })
  })
})
