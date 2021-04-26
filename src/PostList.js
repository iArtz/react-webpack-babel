import React from 'react'
import { map } from 'lodash'
import Post from './Post'

const postList = ({ posts }) => {
  return (
    <>
      {map(posts, (post) => (
        <Post Key={post.id} post={post} />
      ))}
    </>
  )
}

export default postList
