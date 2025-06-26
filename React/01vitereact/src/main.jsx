import { createRoot } from 'react-dom/client';  // Correct import
import React from 'react';
import App from './App';

// const reactElement={  // react convert the anything in object, but this object is not work when we render because this type of format is not allow.
//   type:'a',
//   props:{
//       href:'https://google.com',
//        target:'_blank'
//   },
//   children:'click me to visit google'
// }


// const anotherelement=(   //this can also use
//   <a href="https://google.com" target='_blank'>Visit Google</a>
// )

const username="Adityakumar_ak"

const reactElement = React.createElement(  //we use createElement which is inject by "Babel"  a JavaScript compiler that's used in React to convert JSX into JavaScript.
  'a',    //this is anchor tag. We can also change this tag for instance we can use h1,h2,p etc..
  { href: 'https://google.com', target: '_blank' },
  'click me to visit google',
  username  //this is evaluated expression and here we can not use any expression like if else,for loop ,function etc..,We can use outside and use there varaible name.
);


const root = createRoot(document.getElementById('root'));  // Use createRoot directly
root.render(reactElement);

