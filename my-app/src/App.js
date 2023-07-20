import React, {StrictMode} from 'react';
import './App.css';

const Header = () => {
  return <h2>Hello world!</h2>
}

// const Field = () => {
//   const holder = 'Enter here';
//   const styledField = {
//     width: '300px',
//   }
//   return <input 
//           type="text" 
//           placeholder={holder} 
//           style={styledField} />
// }

class Field extends React.Component{
  render() {
    const holder = 'Enter here';
    const styledField = {
      width: '300px',
    }
    return <input 
            type="text" 
            placeholder={holder} 
            style={styledField} />;
  }
}

function Btn() {
  const text = 'Log in';
  // const res = () => {
  //   return 'Log in';
  // }
  // const p = <p>Log in</p>;
  const logged = true;

  return <button>{logged ? 'Enter' : text}</button>
}

function WhoAmI({name, surname, link}) {
  return (
    <div>
      <h1>My name is {name.firstName}, surname is - {surname}</h1>
      <a href={link}>My profile</a>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <StrictMode>
        <Header/>
      </StrictMode>
      <Field/>
      <Btn/>
      <br />
      <br />
      <hr />
      <WhoAmI name={{firstName: 'John'}} surname="Smith" link="facebook.com"/>
      <WhoAmI name={{firstName: 'Alex'}} surname="Shepard" link="facebook.com/1"/>
    </div>
  );
}

// ---------------------------------------------------

// function WhoAmI({name, surname, link}) {
//   return (
//     <div>
//       <h1>My name is {name()}, surname is - {surname}</h1>
//       <a href={link}>My profile</a>
//     </div>
//   )
// }

// function App() {
//   return (
//     <div className="App">
//       <StrictMode>
//         <Header/>
//       </StrictMode>
//       <Field/>
//       <Btn/>
//       <br />
//       <br />
//       <hr />
//       <WhoAmI name={() => {return 'John'}} surname="Smith" link="facebook.com"/>
//       <WhoAmI name={() => {return 'Alex'}} surname="Shepard" link="facebook.com/1"/>
//     </div>
//   );
// }

// ---------------------------------------------------

export {Header};
export default App;
