import { useContext, useEffect, useState } from 'react'

import CommentList from './CommentList'
import NewComment from './NewComment'
import styles from './Comments.module.css'
import ErrorAlert from '../ui/ErrorAlert'
import NotificationContext from '../../store/NotificationContext'

const Comments = ({ eventId }) => {
  const notificationCtx = useContext(NotificationContext)

  const [comments, setComments] = useState()
  const [showComments, setShowComments] = useState(false)

  useEffect(async () => {
    const reqData = await fetch(`/api/comments/${eventId}`)
    const resData = await reqData.json()
    setComments(resData.comments)
  }, [comments, showComments])

  const toggleCommentsHandler = async () => {
    setShowComments((prevStatus) => !prevStatus)
  }

  const addCommentHandler = async (commentData) => {
    notificationCtx.showNotification({
      title: 'Signing up...',
      message: 'Regitering for the newsletter...',
      status: 'pending',
    })

    try {
      const reqData = await fetch(`/api/comments/${eventId}`, {
        method: 'POST',
        body: JSON.stringify(commentData),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const resData = await reqData.json()
      notificationCtx.showNotification({
        title: 'Added!',
        message: 'Successfully added the comment',
        status: 'success',
      })
    } catch (error) {
      notificationCtx.showNotification({
        title: 'Comment Error!',
        message: error.message ? error.message : 'Failed to add the comment',
        status: 'error',
      })
      throw new Error(
        error.message ? error.message : 'Failed to submit the comment'
      )
    }
  }

  return (
    <section className={styles.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList items={comments} />}
    </section>
  )
}

export default Comments
