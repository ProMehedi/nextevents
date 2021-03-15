import { useEffect, useState } from 'react'

import CommentList from './CommentList'
import NewComment from './NewComment'
import styles from './Comments.module.css'
import ErrorAlert from '../ui/ErrorAlert'

const Comments = ({ eventId }) => {
  const [message, setMessage] = useState()
  const [comments, setComments] = useState()
  const [showComments, setShowComments] = useState(false)

  useEffect(async () => {
    const reqData = await fetch(`/api/comments/${eventId}`)
    const resData = await reqData.json()
    setComments(resData.comments)
  }, [showComments])

  const toggleCommentsHandler = async () => {
    setShowComments((prevStatus) => !prevStatus)
  }

  const addCommentHandler = async (commentData) => {
    const reqData = await fetch(`/api/comments/${eventId}`, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const resData = await reqData.json()
    console.log(resData)
    setMessage(resData.message)
  }

  return (
    <section className={styles.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {message && <ErrorAlert>{message}</ErrorAlert>}
      {showComments && <CommentList items={comments} />}
    </section>
  )
}

export default Comments
