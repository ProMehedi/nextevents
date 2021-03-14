const ResultTitle = ({ date }) => {
  const readableDate = new Date(date).toLocaleDateString('en-us', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  return (
    <>
      <div className='title'>
        <h1>Events in {readableDate}</h1>
      </div>
      <style jsx>
        {`
          .title {
            margin: 2rem auto;
            width: 90%;
            max-width: 40rem;
            text-align: center;
          }
        `}
      </style>
    </>
  )
}

export default ResultTitle
