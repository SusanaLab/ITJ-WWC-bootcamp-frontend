import React from "react";
import Post from "../Componets/Post";
import AddComment from "../Componets/coment/AddComment";
import Remark from "../Componets/coment/ShowComment";
import { useParams } from "react-router-dom";
import { getPostById } from "../api/apiPost";
import { useEffect, useState, useCallback} from "react";
import { saveComment, getComments, updateComment, deleteComment } from "../api/apiRemark";
export const DetailPostPage = ({ onDelete }) => {
  const params = useParams();
  const { postId } = params;
  const [post, setPost] = useState({})
  const [postComments, setPostComments] = useState([])
  const [toEditComment, setToEditComment] = useState()

  const fetchPost = useCallback(async () => {
    const res = await getPostById(postId);
    setPost(res);  
    const comments = await getComments(postId)
    if (comments) {
      setPostComments(comments)
    } 
  }, [postId]);

  useEffect(()=>{
    fetchPost();
      },[postId, fetchPost]);
  


      const handleOnSave = async comment => {
        const savedComment = await saveComment(postId, comment)
        if (savedComment)
          setPostComments([...postComments, savedComment])
      }
    
      const handleOnEdit = async comment => {
        const updatedComment = await updateComment(postId, comment._id, comment)
        if (updatedComment) {
          const copyOfComments = Array.from(postComments);
          const result = copyOfComments.filter(c => c._id !== comment._id)
          setPostComments([...result, updatedComment])
        }
        setToEditComment()
      }
    
      const handleOnDelete = async commentId => {
        const deletedComment = await deleteComment(postId, commentId)
        if (deletedComment) {
          const copyOfComments = Array.from(postComments);
          const result = copyOfComments.filter(c => c._id !== commentId)
          setPostComments(result)
        }
      }

  //const post = findPostById(postId);
  return (
   <>
    <Post
        id={ post._id }
        post={ post }
        isDetails={ true }
        onDelete={ onDelete }
      />
      <div className="comments-section">
        {
          postComments.map(c => (
            <Remark
              key={c._id}
              comment={ c }
              onEdit={ () => setToEditComment(c) }
              onDelete={ handleOnDelete }
            />
          ))
        }
        <AddComment
          comment={ toEditComment }
          onSave={ handleOnSave }
          onEdit={ handleOnEdit }
        />
      </div>
   </>
  );
};