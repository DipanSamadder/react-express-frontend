import {useState} from 'react';
import {Modal, Button} from "react-bootstrap";
import postSevices from '../services/postSevices';

function UpdateModalComponent(props){
    const [isShow, invokeModal] = useState(false);
    const [title, setTitle] = useState(props.title);
    const [date, setDate] = useState(props.date);
    const [id, setId] = useState(props.id);
    const [content, setContent] = useState(props.content);
    const [file, setFile] = useState('');

    const initModal = () =>{
        return invokeModal(!isShow);
    }

    const handleSubmit = async(event) =>{
        event.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('date', date);
        formData.append('content', content);
        formData.append('id', id);

        if(file !='' && file.length !=0){
            formData.append('image', file);
        }
        const response = await postSevices.updatePost(formData);
        if(response.data.success == true){
            alert(response.data.msg);
        }
        initModal();
    }
    return(
        <div>
            <Button variant="success" onClick={initModal}>Edit</Button>
            <Modal show={isShow}>
                <Modal.Header closeButton onClick={ initModal }>
                    <Modal.Title>Update Post</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit}>
                <Modal.Body>
                    <input type='hidden' name="_id" value={id}/>
                    <input type="text" name="title" 
                        placeholder='Title' 
                        value={title} 
                        onChange={event => setTitle(event.target.value) } 
                        /><br></br><br></br>
                    <input type="date" name="date" 
                            placeholder='Date' 
                            value={date} 
                            onChange={event => setDate(event.target.value) } 
                            /><br></br><br></br>
                    <input type="file" name="file" 
                            placeholder='file' 
                            onChange={event => setFile(event.target.files[0]) } 
                            /><br></br><br></br>
                        
                    <input type="content" name="content" 
                            placeholder='content' 
                            value={content} 
                            onChange={event => setContent(event.target.value) } 
                            /><br></br><br></br>
                </Modal.Body>
                
                <Modal.Footer>
                    <Button variant='danger' onClick={initModal}>Close</Button>

                    <Button type="success" variant='success'>Update</Button>
                </Modal.Footer>
                </form>

            </Modal>
        </div>
    );
}

export default UpdateModalComponent;