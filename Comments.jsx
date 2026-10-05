import UserComment from './UserComment.jsx'
import React from 'react' 
import { useState, useEffect } from 'react'

const Comments = () => {
  const [apiComments, setApiComments] = useState([])

  useEffect(() => {
    fetch('/comments.json')
      .then(response => response.json())
      .then(data => setApiComments(data))
  }, [])
  
  return (
    <div className='comments'>
      {apiComments.map(c => (
        <UserComment
          key={c.id}
          user={c.user}
          comment={c.comment}
          likes={c.likes}
          created_at={c.created_at}
        />
      ))}
    </div>
  )
}

export default Comments