export default (req, res) => {
  if (req.method === 'POST') {
    const { email } = req.body
    if (!email || !email.includes('@')) {
      res
        .status(422)
        .json({ message: 'Failed to Signup Newsletter, Invalid Email address' })
    } else {
      res
        .status(201)
        .json({ message: 'Newsletter Signup Successfully!', email })
    }
  } else {
    res.status(200).json({ message: 'API is running' })
  }
}
