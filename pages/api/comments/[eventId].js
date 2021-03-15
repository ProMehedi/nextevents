import {
  connectDatabase,
  getAllDocuments,
  insertDocument,
} from '../../../helper/DbUtils'

export default async (req, res) => {
  const eventId = req.query.eventId

  let client
  try {
    client = await connectDatabase()
  } catch (error) {
    res.status(500).json({ message: 'Connecting to the database failed!' })
    return
  }

  if (req.method === 'POST') {
    const { email, name, comment } = req.body
    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !comment ||
      comment.trim() === ''
    ) {
      res.status(422).json({
        message:
          'Invalid comment data! Please fillup all data to submit comment',
      })
      return
    } else {
      const newComment = { eventId, email, name, comment }

      let result

      try {
        result = await insertDocument(client, 'comments', newComment)
        newComment._id = result.insertedId
        res.status(201).json({ message: 'Added comment.', comment: newComment })
      } catch (error) {
        res.status(500).json({ message: 'Inserting comment failed!' })
      }
    }
  }

  if (req.method === 'GET') {
    try {
      const documents = await getAllDocuments(client, 'comments', { _id: -1 })
      res.status(200).json({ comments: documents })
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  client.close()
}
