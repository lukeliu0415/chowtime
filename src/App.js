/* eslint-disable */
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import quickstart from './matthewgod.js';

import Recipe from './recipe/Recipe'
import DragDrop from './drag-drop/drag-drop'
import BottomNav from './bottom-nav/bottom-nav'
import Analyze from './analyze/Analyze'
import Header from './header/Header'
import FoodList from './foodlist/foodlist'
import { isLogicalExpression } from '@babel/types';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


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
    console.log("TEST")
    var xhr = new XMLHttpRequest()
    foodItems.push('potato');
    foodItems.push('tomato');
    
    // // get a callback when the server responds
    // xhr.addEventListener('load', () => {
    //   // update the state of the component with the result here

    //   let response = JSON.parse(xhr.responseText);
    //   let info = response.hits[7].recipe;
    //   // console.log(foodItems);
    //   image = info.image;
    //   title = info.label;
    //   // console.log(info)
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
    // })
      
    //   // console.log(data);
    // // open the request with the verb and the url
    // xhr.open('GET', `https://api.edamam.com/search?q=${foodItems.join(", ")}&app_id=2159764c&app_key=${applicationKey}`)
    // // send the request
    // xhr.send()
  }

  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Header />
        <Switch>
            <Route exact path="/" component={DragDrop} />
            <Route path="/process" component={() => <FoodList foodlist={foodItems} />} 
            />
            <Route path="/recipe" component={() => <Recipe  />} 
            />
        </Switch>
        <BottomNav />
      </header>

      {/* <div>
          <div>{bukebiu}</div>}
      </div> */}

    </div>

    </Router>

  );
}


export default App;
