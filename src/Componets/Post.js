import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import "../styles/Blog.css";
import lapiz from './coment/lapiz.png'
import borrar from './coment/borrar-archivo.png'


const Post = ({ post, onEdit, onDelete, id, isDetails}) => {
  return (
    <div className="blog-post">
      <div className="blog-post-image">
        <img
          src={post.imageUrl}
          alt="Blog header image"
          width={250}
          height={250}
        />
      </div>
      <div className="blog-post-details">
        <p>{post.updatedAt && format(new Date(post.updatedAt), 'MMMM dd, yyyy')}</p>
        <h1 className="titulo">{post.title}</h1>
        <p>{post.body}</p>
        <p>By {post.author}</p>
        { !isDetails && <Link to={`post/${id}`}>READ MORE</Link> }
      </div>
      {
        isDetails &&
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <Link
            to={`/create-new-post/${id}`}>
                     <img className='flecha' src={lapiz} alt="card__image" />
          </Link>
    
              <img className='flecha' src={borrar} alt="card__image"   onClick={() => onDelete(id)} />
        </div>
     }
    </div>
  );
};

export default Post;