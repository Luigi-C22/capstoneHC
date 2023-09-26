import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const token = JSON.parse(localStorage.getItem('userLoggedIn'));

const AddPostModal = (props) => {
    const [formData, setFormData] = useState({});
    const [file, setFile] = useState(null)
    const [loading, setLoading] = useState(false);

console.log(formData);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    //funzione che fa l'upload del file immagine 
    const uploadFile = async (file) => {
        const fileData = new FormData()
        fileData.append('carPicture', file)

        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/posts/cloudUpload`,
             { headers: {
                'Authorization': 
                `Bearer ${token}`},
                //'Content-Type': 'multipart/form-data',

                method:'POST',
                body: fileData,
            });
            return await response.json();
        } catch (error) {
            console.error("File upload failed...");
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (file) {
            try {
                const uploadedFile = await uploadFile(file);
                const postFormData = {
                    ...formData,
                    carPicture: uploadedFile.carPicture,
                };
                const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/posts`, {
                    method: 'POST',
                    body: JSON.stringify(postFormData),
                    headers: {
                        
                            'Authorization': 
                            `Bearer ${token}`,
                        'Content-type': 'application/json',
                        
                    },
                });

                if (response.ok) {
                    props.onHide(); //chiude il modale dopo aver inviato il post
                    window.location.reload(); // Effettua il refresh della pagina dopo aver aggiunto un post
                 } else {
                    console.error('Failed to save post'); 
                }

             } catch (error) {
                console.error('Failed to save post');
            } finally {
                setLoading(false);
            } 
        } else {
            console.error('Please select at least one file to upload');
            setLoading(false);
        }
    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered

        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Please compile this form to sale your car
                </Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <Form
                    onSubmit={handleSubmit}
                    className='flex flex-col p-3 gap-2'
                    encType='multipart/form-data'>
                    <input
                        type='text'
                        name='carBrand'
                        placeholder='Brand'
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                carBrand: e.target.value,
                            })
                        }
                        className='mb-3 m-2'
                    />
                    <input
                        type='text'
                        name='carName'
                        placeholder='Name of model'
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                carName: e.target.value,
                            })
                        }
                        className='mb-3 m-2'
                    />
                    <input
                        required
                        type='file'
                        name='carPicture'
                        onChange={handleFileChange}
                    />
                    <input
                        type='text'
                        name='year'
                        placeholder='Year of enrollment '
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                year: e.target.value,
                            })
                        }
                        className='mb-3 m-2'
                    />
                    <input
                        type='text'
                        name='price'
                        placeholder='Price'
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                price: Number(e.target.value),
                            })
                        }
                        className='mb-3 m-2'
                    />
                    <input
                        type='text'
                        name='contact'
                        placeholder='Phone number or email'
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                contact: e.target.value,
                            })
                        }
                        className='mb-3 m-2'
                    />
                    <input
                        type='text'
                        name='description'
                        placeholder='A short description of car'
                        value={formData.description || ''}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                description: e.target.value,
                            })
                        }
                        className='mb-3 m-2'
                    />
                    <input
                        type='text'
                        name='authorName'
                        placeholder='Your name'
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                authorName: e.target.value,
                            })
                        }
                        className='mb-3 m-2'
                    />

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" type='submit' onClick={handleSubmit}>Send Post</Button>
                <Button variant="danger" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddPostModal;