import React from 'react'
import { map } from 'lodash'
import Post from './Post'

const PostList = ({ posts }) => {
  return (
    <>
      {map(posts, (post) => (
        <Post key={`post-key-${post.id}`} post={post} />
      ))}
    </>
  )
}

export default PostList
