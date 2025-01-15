import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h2>Custom App</h2>
    </div>
  )
}

// const reactElement={
//   type:'a',
//   props:{
//       href:'https://googgle.com',
//       target:'_blank',
//   },

//   children:'click me to visit google'
// }

const anotherElement=(
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const reactElement=React.createElement(
  'a',
  {href:"https://google.com", target:'_blank'},
  'Click to visit Google'
)

ReactDOM.createRoot(document.getElementById('root')).render(

  <App />
  
)
