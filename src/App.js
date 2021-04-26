import React, { useState, useEffect } from 'react'
import PostList from './PostList'

const App = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts').then((res) => {
      res.json().then((posts) => {
        setPosts(posts)
      })
    })
  }, [])

  return (
    <>
      <PostList posts={posts} />
    </>
  )
}

export default App
