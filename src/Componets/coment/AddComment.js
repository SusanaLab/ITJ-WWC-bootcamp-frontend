import React, { useEffect, useState } from 'react'
import "../coment/comment.css"


const CommentInput = ({ comment, onSave, onEdit }) => {

    const defaultComment = {
        comment: '',
        author: '',
    }

    const [newComment, setNewComment] = useState(defaultComment)

    useEffect(() => {
        if (comment)
            setNewComment(comment)
    }, [comment])

    const handleOnChange = event => {
        const name = event.target.name
        const value = event.target.value
        setNewComment({ ...newComment, [name]: value })
    }

    return(
        <div className='comment-input-container'>
            <div className="input-field">
                <input
                    type="text"
                    name="author"
                    placeholder="Add your name"
                    value={ newComment.author }
                    onChange={ handleOnChange }
                />
            </div>
            <div className="input-field">
                <textarea
                    style={{ height: "100px"}}
                    type="text"
                    name="comment"
                    placeholder="Add your comment"
                    value={ newComment.comment }
                    onChange={ handleOnChange }
                />
            </div>
            <div className='buttons-container'>
                <button className='button-save'
                    onClick={ () => {
                        if (newComment._id)
                            onEdit(newComment)
                        else
                            onSave(newComment)
                        setNewComment(defaultComment)
                    }}>
                    { newComment._id ? 'Edit comment' : 'Save comment' }
                </button>
            </div>
        </div>
    )
}

export default CommentInput