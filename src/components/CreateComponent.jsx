import React, { useState } from "react";
import postSevices from "../services/postSevices";

function CreateComponent() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');
    const [date, setDate] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async(event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        formData.append('image', image);
        formData.append('date', date);

        const response = await postSevices.create(formData);
        if(response.data.success== true){
          setMessage(response.data.msg);
        }else{
          setMessage("Sorry!");
        }
        event.target.reset();
        setTimeout(function(){setMessage("");}, 2000)
    }
  return (
    <div className="App">
        <div>Create Form</div>
        <form onSubmit={handleSubmit}>
            <input type="text" 
            name="title" 
            placeholder="Title"
            onChange={event => setTitle(event.target.value)}
            required/><br/>
            <input type="date" 
            name="date" 
            placeholder="Date"
            onChange={event => setDate(event.target.value)}
            required/><br/>
            <input type="text" 
            name="content" 
            placeholder="Content"
            onChange={event => setContent(event.target.value)}
            required/><br/>
            <input type="file" 
            name="image" 
            onChange={event => setImage(event.target.files[0])} /><br/>
            <input type="submit" name="button"/>
        </form>
        <p>{message}</p>
    </div>
  );
}

export default CreateComponent;
