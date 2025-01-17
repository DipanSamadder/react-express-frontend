import {useState, useEffect} from "react";
import postSevices from "../services/postSevices";
import UpdateModalComponent from "./UpdateModalComponent";
import {Button} from "react-bootstrap";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function ShowComponent(){

    const  [posts, setPosts] = useState({});

    const fetchPosts = async() => {
        setPosts(await postSevices.getPost());
    }

    useEffect(() => {
        fetchPosts();
    }, [posts]);
    const deletePost = async(id, e) => {
        const response = await postSevices.deletePost(id);
        if(response.data.success == true){
            alert(response.data.msg);
            document.getElementById(id).parentElement.parentElement.remove();
        }else{
            alert(response.data.msg);
        }
    }
    return (
        <div style={{ width:'80%', margin:'0 auto', padding:'50px 0px 0px'}}>
                
                {posts.data !== undefined && posts.data.data.length > 0 && (
                    <table style={{ width: '100%'}} border='1'>
                        <thead>
                            <tr>
                                <th>SR</th>
                                <th>Title</th>
                                <th>Date</th>
                                <th>Content</th>
                                <th>Image</th>
                                <th>delete</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.data.data.map(post =>(
                                    <tr>
                                        <td>{post._id}</td>
                                        <td>{post.title}</td>
                                        <td>{post.date}</td>
                                        <td>{post.content}</td>
                                        <td>
                                            <img src={'http://localhost:8000/api/uploaded/' +post.image} alt="{post.image}" style={{ width:'100px' }}/>
                                        </td>
                                        <td><Button variant="dark" id={post._id} onClick={(e) => deletePost(post._id, e)}>Delete</Button></td>
                                        <td><UpdateModalComponent id={post._id} title={post.title} date={post.date} content={post.content} /></td>
                                    </tr>
                                    )
                                )
                            }
                        </tbody>
                    </table>
                )
                }
            
        </div>
    );
}

export default ShowComponent;