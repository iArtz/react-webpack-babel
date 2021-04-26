import React from 'react'

const Post = ({ post: { title, body } }) => {
  return (
    <>
      <p>{title}</p>
      <p>{body}</p>
    </>
  )
}

export default Post
