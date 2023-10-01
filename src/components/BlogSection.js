import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SingleCard from './SingleCard';
import AddPostModal from './modals/AddPostModal';
import { Row, Col, Modal} from 'react-bootstrap';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
import '../styles/BlogSection.css';
import ImageDetail from './ImageDetail';

function BlogSection() {
  const [currentPage, setCurrentPage] = useState(1); //pagination
  
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); //richiama la card in un modale per vedere i dettagli
 
  console.log(posts);

  const handlePageChange = (value) => {
    setCurrentPage(value)
}
  const handleCardClick = (image) => {
    setSelectedImage(image);
     setShowDetailModal(true);
    }

  useEffect(() => {

    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}posts?page=${currentPage}`)
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
  }, [currentPage]);

  

  return (
    <div>
      <h1 className='titleStyle'> Now you can sell your car! Post here your offer</h1>

      {/* Bottone per aprire il modale */}
      <div class="formButtonContainer">
        <button className='formButton' onClick={() => setShowModal(true)}>Open form to publish</button>
      </div>
      {/* Visualizza le cards dei post */}


      <div  className=" container d-flex justify-content-center mt-3 mb-3">
        <Row>
          {posts && posts?.posts?.slice(0, 4).map((post) => {
            
            return (
              <Col key={post.id} md={3}>
                
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
                  onClick={() => handleCardClick(post.carPicture)} // Aggiungi l'evento onClick
                />
              </Col>
            );

          })}
        </Row>
      </div>
      <ResponsivePagination
        current={currentPage}
        total={posts && posts.totalPages}
        onPageChange={handlePageChange}
      />
      {/* Modale per aggiungere un post */}
      <AddPostModal show={showModal} onHide={() => setShowModal(false)} />
    
{/* Modale per i dettagli dell'immagine */}
<Modal show={showDetailModal} onHide={() => setShowDetailModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedImage && <ImageDetail image={selectedImage} />}
        </Modal.Body>
      </Modal>

    </div>
  );
}

export default BlogSection;