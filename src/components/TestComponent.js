import {useState} from 'react';

// Updating the screen by using State: https://beta.reactjs.org/learn#updating-the-screen
// Hooks: https://beta.reactjs.org/learn#using-hooks (specifically useState)
// Listening to events: https://beta.reactjs.org/learn#responding-to-events
const TestComponent = () => {
  // @todo, update the button with a new number each time it is clicked.
  // @todo, in addition to the "short" version, prof will show a version that uses
  // previousValue, too. One of the two can be commented out.
  const [count, setCount] = useState(0);
  return <button
      onClick={() => setCount(prev => prev + 1)}
      className='btn btn-primary btn-lg'>
    Number of clicks: {count}
  </button>
}

export default TestComponent;
