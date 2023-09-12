import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BlogSection = () => {
  const [userPost, setUserPosts] = useState([]);

  useEffect(() => {
    axios.get('/localhost:5050/posts') // endpoint degli annunci utenti
      .then((response) => {
        setUserPosts(response.data);
      })
      .catch((error) => {
        console.error('Errore nella richiesta API:', error);
      });
  }, []);

  return (
    <div>
      {/* Visualizza gli annunci qui */}
      {userPost.map((userPost) => (
        <div key={userPost.id}>
          {/* Visualizza i dettagli dell'annuncio */}
          <h2>{userPost.title}ciao</h2>
          <p>{userPost.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogSection;