import React from 'react'
import FeaturedPost from '../Componets/FeaturedPost'
import ListPost from '../Componets/ListPost'
import pic from '../pages/Group 1.png'
import '../Componets/coment/comment.css'

 export const HomePage = ({posts, OnEdit, onDelete}) => {
     return (
    
   
         <>
        <img className='inicio' src={pic} alt="pic"   />
        <div className='share'>     <h2 className='share' > Share with us advice, articles and any important information on how to save the planet. Click on "Share tips". </h2></div>
   
{/* here we add another componet that is called list post were we can show al post, and also we share props */}
          <ListPost posts={posts} onEdit={OnEdit} onDelete={onDelete}/>
        </>

  );
};
