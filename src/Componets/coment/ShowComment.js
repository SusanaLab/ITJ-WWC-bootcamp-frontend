import React from 'react'
import { format } from 'date-fns'
import "../coment/comment.css"
import lapiz from './lapiz.png'
import borrar from './delete.png'

const Comment = ({ comment, onEdit, onDelete }) => {

    return (
        <div className='comment-container'>
            <div className='date-container'>
            <strong>{ comment.updatedAt && format(new Date(comment.updatedAt), 'MMMM dd, yyyy') }</strong>
                <div className='iconos' >
                    <img className='flecha' src={lapiz} alt="card__image" onClick={ () => onEdit() } />
                    <img className='flecha' src={borrar} alt="card__image" onClick={ () => onDelete(comment._id) } />
                </div>
            </div>
            <h1  className='aut' >{ comment.author }</h1>
            <p>{ comment.comment }</p>
            <hr/>
        </div>
    )
}

export default Comment