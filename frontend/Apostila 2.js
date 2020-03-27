/* import React from 'react';

import Header from './Header';

function App() {
  return (
    <Header>
      Semana OmmiStack
    </Header>  
  );
}

export default App; */

/* import React from 'react';

export default function Header(props) {
  return (
    <header>
       <h1>{props.children}</h1>
    </header>  
  );  
}

*************************************** */

/* import React from 'react';

import Header from './Header';

function App() {
  return (
    <Header title= 'Semana OmmiStack' /> 
  );
}

export default App; */

/* import React from 'react';

export default function Header(props) {
  return (
    <header>
       <h1>{props.title}</h1>
    </header>  
  );  
} */

/* ***************************************************** */

/* useState(0);

  // Array [valor, função de atualização] */
/* import React, { useState } from 'react';

import Logon from './pages/Logon/index';

function App() {
  const [counter, setCounter] = useState(0);
  
  function increment() {
    setCounter(counter + 1);
  }
  
  return (
    <div>
      <Header>Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default App;

 */