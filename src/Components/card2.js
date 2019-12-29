import React, { Component } from 'react';


export default function Card2(){
    return(
        <div class="card-columns">
        <div class="card bg-danger">
          <div class="card-body text-center">
            <p class="card-text">Some text inside the four card</p>
          </div>
        </div>
        <div class="card bg-light">
          <div class="card-body text-center">
            <p class="card-text">Some text inside the five card</p>
          </div>
        </div>
        <div class="card bg-info">
          <div class="card-body text-center">
            <p class="card-text">Some text inside the six card</p>
          </div>
        </div>

      </div>
    );
}