export default (req, res) => {
  const eventId = req.query.eventId
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
      res.status(201).json({
        message: 'Comment successfuly added!',
        comment: { id: Date.now().toString(), email, name, comment },
      })
    }
  } else if (req.method === 'GET') {
    const dummyComments = [
      {
        id: 'c1',
        email: 'test@example.com',
        name: 'Mehedi Hasan',
        comment: 'This is comment 1',
      },
      {
        message: 'Comment successfuly added!',
        comment: {
          id: 'c2',
          email: 'test@example.com',
          name: 'Mehedi Hasan',
          comment: 'This is comment 2',
        },
      },
      {
        message: 'Comment successfuly added!',
        comment: {
          id: 'c3',
          email: 'test@example.com',
          name: 'Mehedi Hasan',
          comment: 'This is comment 3',
        },
      },
    ]

    res.status(200).json({ comments: dummyComments })
  } else {
  }
}
