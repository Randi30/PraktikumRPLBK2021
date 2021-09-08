import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'


class App extends Component {
handleClick =()=> {
    console.log('Helo');
    alert('Hai');

}
hitung= () =>{
  // program input
let marks,marks2,marks3,a,b,c,d,e,f,a1,b1,c1,d1,e1,f1;
a = prompt('Enter your marks 1 :'); a1 = parseInt(a);
b = prompt('Enter your marks 2 :'); b1 = parseInt(b);
c = prompt('Enter your marks 3 :'); c1 = parseInt(c);
marks = (a1 + b1 + c1 ) / 3;
d = prompt('Jumlah Bolos mahasiswa : '); d1 = parseInt(d);
marks2 = (14 - d1);
f = prompt('UKT ke :'); f1 = parseInt(f);
marks3 = 500000 * f1;

// check the condition
let result = 
    (marks < 40) ? ('C') 
  : (marks >= 40 && marks < 75 ) ? ('B') 
  : (marks >= 75 && marks <= 100 ) ? ('A')
  : ('Tidak Ada')



console.log(`You ${result} the exam.`);
alert(`You ${result} the exam.`);
document.getElementById("pesan").innerHTML = `You score : ${marks} <br> Passing Grade : ${result} <br> Total Kehadiran : ${marks2} <br> Total Ukt mahasiswa : Rp.${marks3}`; 
}
  render() {  
    

    return (
      <div style={{textAlign:'center', top:'30vh', position:'relative'}}>
        <h1>Penilaian Siswa</h1>
        <button onClick={() => this.hitung()}>click disini</button>
        <h2 id="pesan"></h2>
      </div>
    )
  }

}

// Tingaal Tambahin logika asynch sama array


export default App;




// class Foo extends Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     console.log('Click happened');
//   }
//   render() {
//     return <button onClick={this.handleClick}>Click Me</button>;
//   }
// }


// class Foo extends Component {
//   // Note: this syntax is experimental and not standardized yet.
//   handleClick = () => {
//     console.log('Click happened');
//   }
//   render() {
//     return <button onClick={this.handleClick}>Click Me</button>;
//   }
// }


// class Foo extends Component {
//   handleClick() {
//     console.log('Click happened');
//   }
//   render() {
//     return <button onClick={this.handleClick.bind(this)}>Click Me</button>;
//   }
// }



// class Foo extends Component {
//   handleClick() {
//     console.log('Click happened');
//   }
//   render() {
//     return <button onClick={() => this.handleClick()}>Click Me</button>;
//   }
// }