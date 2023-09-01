import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));


// const elem = <h2>Hello World</h2>;

// const text = 'Hello World';
// const elem = (
//   <div>
//     <h2 className='text'>Text: {text}</h2>
//     <input type='text' />
//     <label htmlFor=""></label>
//     <button tabIndex={0}>Click</button>
//   </div>
// );

// const elem = React.createElement('h2', {className: 'greetings'}, 'Hello World');

// const element = {
//   type: 'h2',
//   props: {
//     className: 'greetings',
//     children: "Hello World"
//   }
// };

root.render(
  <StrictMode>
    <App/>
  </StrictMode>
);

