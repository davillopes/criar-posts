import React, { useState, useEffect } from 'react';
import './styles.css';

import { Card } from '../../components/Card'

function Home() {
  const [feedName, setFeedName] = useState('')
  const [feedMessage, setFeedMessage] = useState('')
  const [feeds, setFeeds] = useState([]);

  function handleAddFeed() {
    const newFeed = {
      name: feedName,
      message: feedMessage,
      }
    
    setFeeds(prevState => [...prevState, newFeed])
    
  }


  return (
    <div className="container">
      <h1>Not a twitteR</h1>
      <div className="message">       
        <img 
          src="https://source.unsplash.com/random" 
          alt="Random"
        />
        <form action="">
          <input 
            type="text"
            placeholder = "Digite seu nome"
            onChange={e => setFeedName(e.target.value)}
          />
          <textarea  
            id="mensagem" 
            placeholder='Mensagem'
            cols="30" 
            rows="5"
            onChange={e => setFeedMessage(e.target.value)}
          />
          <button 
            type="reset" 
            onClick={handleAddFeed}
            >Publicar
          </button>
          <button 
            type="reset"            
            >Descartar
          </button>
        </form>      

      </div>
      <h2>Feed</h2>
      {
        feeds.map(feed => 
          <Card 
            key={feed.message}
            name={feed.name} 
            message={feed.message} 
          />
        )
      }
    </div>
        
  )
}

export default Home
