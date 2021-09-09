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
let marks,marks2,marks3,a,b,c,d,e,f,a1,b1,c1,d1,e1,f1,bea1;
a = prompt('Enter your marks 1 :'); 
if (a === null) {
  return;
}
a1 = parseInt(a);

b = prompt('Enter your marks 2 :'); 
if (b === null) {
  return;
}
b1 = parseInt(b);

c = prompt('Enter your marks 3 :'); 
if (c === null) {
  return;
}
c1 = parseInt(c);
marks = (a1 + b1 + c1 ) / 3;

d = prompt('Jumlah Bolos mahasiswa : '); 
if (d === null) {
  return;
}
d1 = parseInt(d);

marks2 = (14 - d1);


f = prompt('Semester Berjalan :'); 
if (f === null) {
  return;
}
f1 = parseInt(f);
marks3 = 500000 * f1;

// check the condition
let result = 
    (marks < 40) ? ('C') 
  : (marks >= 40 && marks < 75 ) ? ('B') 
  : (marks >= 75 && marks <= 100 ) ? ('A')
  : ('Tidak Ada')

const parambea = [result, f1];

const newArr = parambea.filter(elemen => {
 if(result === 'B' || result === 'A') {
  if(f1 >= 4){ bea1 = 'Lolos'
    
  }
  else {bea1 = 'Tidak Lolos'}
 }
})

console.log(`You ${result} the exam.`);
alert(`You ${result} the exam.`);
document.getElementById("pesan").innerHTML = `You score : ${marks} <br> Passing Grade : ${result} <br> Lolos Beasiswa : ${bea1} <br> Total Kehadiran : ${marks2} <br> Total Ukt mahasiswa : Rp.${marks3}`; 
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