import React from 'react';

export default function Main(){
    return(
        <div>
            <div class="input-group rounded">
            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
             <span class="input-group-text border-0" id="search-addon">
              <i class="fas fa-search"></i>
             </span>
        </div>
        <div class="card">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="card-link">2.4 Dt</a>
          <a href="#" class="btn btn-primary">More</a>
        </div>
      </div>
      </div>
    );
}