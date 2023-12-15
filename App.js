// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



// import './App.css'; 
// import Header from './header' 
 
// let arr = [ 
//   {name:'Sona',surname:'Petrosyan', sallary:100000000000}, 
//   {name:'Hasmik',surname:'Simonyan', sallary:100}, 
//   {name:'Hrayr',surname:'Melqonyan', sallary:200}, 
//   {name:'Eva',surname:'Malkhasyan', sallary:2000}, 
//   {name:'Nare',surname:'Harutyunyan', sallary:300} 
// ] 
 
// function  Card(obj) { 
//   return ( 
//     <div> 
//       <h1>Hello {obj.name} {obj.surname}</h1> 
//       <p>Sallary: {obj.sallary}</p> 
//     </div> 
//   ) 
// } 
// function App() { 
//   return ( 
//     <div className="App"> 
//       <header className="App-header"> 
//         <Header/> 
//         <Card name="Narine" surname="Balyan"/> 
//         {arr.map((e,i)=><Card name={e.name} surname={e.surname} sallary={e.sallary} key={i} />)} 
//       </header> 
//     </div> 
//   ); 
// } 
// export default App;


// App.js
import React from 'react';
import './App.css'; // If you have a separate CSS file for styling

const TableComponent = ({ data }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const App = () => {
  const data = [
    { id: 1, name: 'Soan Petrosyan', email: 'spetrosyan004@gmail.com' },
    { id: 2, name: 'Seroj Mesropyan', email: 'mesropiian00@gmail.com' },
    { id: 3, name: 'Armine (azganuny chgitem)', email: 'armin777@gmail.com' },
  ];

  return (
    <div className="App">
      <h1>ERKVORYAKNER</h1>
      <TableComponent data={data} />
    </div>
  );
};

export default App;
