import React, { useState, useEffect } from 'react';
import SingleCard from './navigation/SingleCard'; 
import AddPostModal from './modals/AddPostModal';
import '../styles/BlogSection.css';


function BlogSection() {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    
     fetch('http://localhost:5050/posts/')
       .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((data) => {
        setPosts(data);
    })
        .catch((error) => {
         console.error('Errore nella richiesta', error);
       });
  }, []);

  return (
    <div>
      <h1 className='titleStyle'> If you want to sell your old car, post here your offer</h1>

      {/* Bottone per aprire il modale */}
      <button className='formButton' onClick={() => setShowModal(true)}>Open form to publish</button>

      {/* Visualizza le cards dei post */}

      
      <div className="card-container">
        {posts.map((post) => (
          <SingleCard
           key={post.id}
           carBrand={post.carBrand} 
           carName={post.carName}
           carPicture={post.carPicture}
           year={post.year}
           price={post.price}
           contact={post.contact}
           description={post.description}
           authorName={post.authorName}
           />
        ))}
      </div>

      {/* Modale per aggiungere un post */}
      <AddPostModal show={showModal} onHide={() => setShowModal(false)} />
    </div>
  );
}

export default BlogSection;