import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import quickstart from './matthewgod.js';

import DragDrop from './drag-drop/drag-drop'
import BottomNav from './bottom-nav/bottom-nav'
import Header from './header/Header';
import { isLogicalExpression } from '@babel/types';


// let data = JSON.parse(setData);

function App() {
  const [test, setTest] = useState(false);
  let foodItems = [];
  let image;
  let title;
  let description;
  let url;
  let healthLabels;
  let ingredients = [];
  let calories;
  let totalTime;
  let servingSize;

  const bukebiu = quickstart().catch((err) => console.log(err));

  function getData() {
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest()
    foodItems.push('apple');
    foodItems.push('ginger');
console.log(bukebiu)
    // get a callback when the server responds
    // xhr.addEventListener('load', () => {
    //   // update the state of the component with the result here

    //   let response = JSON.parse(xhr.responseText);
    //   let info = response.hits[7].recipe;
    //   console.log(info);
    //   image = info.image;
    //   title = info.label;
    //   // description = info;  //!!!!!!
    //   url = info.url;
    //   calories = info.calories.toFixed(0);
    //   totalTime = info.totalTime;
    //   servingSize = info.yield;

    //   healthLabels = info.dietLabels.concat(info.healthLabels);
    //   for (let ingredient of foodItems) {
    //     for (let each of info.ingredientLines) {
    //       if (each.includes(ingredient) && !ingredients.includes(ingredient)) {
    //         ingredients.push(ingredient);
    //       }
    //     }
    //   }
    // }
    //
    //)

      // console.log(data);
    // open the request with the verb and the url
    xhr.open('GET', `https://api.edamam.com/search?q=${foodItems.join(", ")}&app_id=2159764c&app_key=c14aac6f866abd8129cc457ce54da71e`)
    // send the request
    xhr.send()
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <DragDrop />
        <BottomNav />

        <button onClick={() => getData()} >{test ? <h1>Hello</h1> : <h1>Goodbye</h1>} </button>
      </header>

      {/* <div>
          <div>{bukebiu}</div>}
      </div> */}

    </div>
  );
}


export default App;
