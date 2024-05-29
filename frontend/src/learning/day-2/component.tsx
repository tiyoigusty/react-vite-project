// import React from "react";

// function HelloWorld() {
//   return <h1>Hello World 2</h1>
// }

// function App() {
//   return (
//     <>
//       <h1>Hello World</h1>
//     </>
//   )
// }

// export default App

// class HelloWorld extends React.Component {
//   render() {
//     return <h1>Hello World 2</h1>
//   }
// }

// class App extends React.Component {
//   render() {
//     return (
//       <>
//         <h1>Hello World</h1>
//         <HelloWorld/>
//       </>
//     );
//   }
// }

// export default App;

// ------------------ STATE -----------------------

// import { useState } from "react";

// function App() {
//   const [counter, setCounter] = useState<number>(0)

//   function add() {
//     setCounter((prev) => prev + 1)
//   }
//   function subtract() {
//     if (counter > 0) setCounter((prev) => prev - 1)
//   }

//   return (
//     <>
//     {counter}
//     <button onClick={add}>Tambah</button>
//     <button onClick={subtract}>Kurang</button>
//     </>
//   )
// }

// export default App