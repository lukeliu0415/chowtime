import React from 'react';
import './foodlist.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function FoodList (props) {
    // console.log(props.foodlist)
  return(

    <div class='foodlist'>
    {
      props.foodlist.forEach((item) => {
        console.log(item)
        // <h1>{ item }</h1>
      })
    }

    <div class='row spacing'>
      <div class='col-8 bottom-border'><h2>Banana</h2></div>
      <div class='col-4'><img src="https://img.icons8.com/pastel-glyph/64/000000/edit.png"></img></div>
    </div>

    <div class='row spacing'>
      <div class='col-8 bottom-border'><h2>Orange</h2></div>
      <div class='col-4'><img src="https://img.icons8.com/pastel-glyph/64/000000/edit.png"></img></div>
    </div>   <div class='row spacing'>
      <div class='col-8 bottom-border'><h2>Mint</h2></div>
      <div class='col-4'><img src="https://img.icons8.com/pastel-glyph/64/000000/edit.png"></img></div>
    </div>   <div class='row spacing'>
      <div class='col-8 bottom-border'><h2>Pear</h2></div>
      <div class='col-4'><img src="https://img.icons8.com/pastel-glyph/64/000000/edit.png"></img></div>
    </div>   <div class='row spacing'>
      <div class='col-8 bottom-border'><h2>Raddish</h2></div>
      <div class='col-4'><img src="https://img.icons8.com/pastel-glyph/64/000000/edit.png"></img></div>
    </div>   <div class='row spacing'>
      <div class='col-8 bottom-border'><h2>Tomato</h2></div>
      <div class='col-4'><img src="https://img.icons8.com/pastel-glyph/64/000000/edit.png"></img></div>
    </div>   <div class='row spacing'>
      <div class='col-8 bottom-border'><h2>Celery</h2></div>
      <div class='col-4'><img src="https://img.icons8.com/pastel-glyph/64/000000/edit.png"></img></div>
    </div>
    <div class="row">
        <button class="spacing col confirm" ><Link to={`/recipe`} >Confirm</Link></button> 
      </div>
  
   
    </div>
  )
}