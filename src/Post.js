import React from 'react'

const post = ({ post: { title, body } }) => {
  return (
    <>
      <p>{title}</p>
      <p>{body}</p>
    </>
  )
}

export default post
