import styles from './CommentList.module.css'

const CommentList = ({ items }) => {
  if (!items) {
    return <h1>Loading...</h1>
  }
  return (
    <ul className={styles.comments}>
      {items.map((item) => (
        <li key={item.id}>
          <span>{item.comment}</span>
          <div>
            By
            <address>{item.name}</address>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default CommentList
