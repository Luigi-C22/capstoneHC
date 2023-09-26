import React, { useState, useEffect } from 'react';
import SingleCard from './SingleCard';
import AddPostModal from './modals/AddPostModal';
import { Row, Col } from 'react-bootstrap';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
import '../styles/BlogSection.css';


function BlogSection() {
  const [currentPage, setCurrentPage] = useState(8); //pagination
  const totalPages = 15;
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  console.log(posts);
  
  useEffect(() => {

    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/posts/`)
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
      <h1 className='titleStyle'> Now you can sell your car! Post here your offer</h1>

      {/* Bottone per aprire il modale */}
      <div class="formButtonContainer">
        <button className='formButton' onClick={() => setShowModal(true)}>Open form to publish</button>
      </div>
      {/* Visualizza le cards dei post */}


      <div className="card-container  mb-4">
        <Row className='gap-4'>
          {posts && posts?.posts?.slice(0, 5).map((post) => {
            return (
              <Col key={post.id} md={3} >
                
                <SingleCard
                  key={post.id}
                  carBrand={post.carBrand}
                  carName={post.carName}
                  carPicture={post.carPicture}
                  year={post.year}
                  price={post.price}
                  contact={post.contact}
                  description={post.description}
                  authorName={post.user}
                />
              </Col>
            );

          })}
        </Row>
      </div>
      <ResponsivePagination
        current={currentPage}
        total={totalPages}
        onPageChange={setCurrentPage}
      />
      {/* Modale per aggiungere un post */}
      <AddPostModal show={showModal} onHide={() => setShowModal(false)} />
    </div>
  );
}

export default BlogSection;