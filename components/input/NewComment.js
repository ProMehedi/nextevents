import { useState } from 'react'
import styles from './NewComment.module.css'

const NewComment = ({ onAddComment }) => {
  const [isInvalid, setIsInvalid] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')

  const sendCommentHandler = (event) => {
    event.preventDefault()
    if (
      !email ||
      email.trim() === '' ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !comment ||
      comment.trim() === ''
    ) {
      setIsInvalid(true)
      return
    }
    onAddComment({ email, name, comment })
    setEmail('')
    setName('')
    setComment('')
    setIsInvalid(false)
  }

  return (
    <form className={styles.form} onSubmit={sendCommentHandler}>
      <div className={styles.row}>
        <div className={styles.control}>
          <label htmlFor='email'>Your email</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.control}>
          <label htmlFor='name'>Your name</label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div className={styles.control}>
        <label htmlFor='comment'>Your comment</label>
        <textarea
          id='comment'
          rows='5'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </div>
      {isInvalid && <p>Please enter a valid email address and comment!</p>}
      <button>Submit</button>
    </form>
  )
}

export default NewComment
