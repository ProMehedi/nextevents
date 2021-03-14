const ErrorAlert = ({ children }) => {
  return (
    <>
      <div className='alert'>{children}</div>
      <style jsx>{`
        .alert {
          margin: 1rem auto;
          padding: 1rem 2rem;
          width: 90%;
          max-width: 40rem;
          background-color: #d5bdfc;
          color: #38028d;
          font-weight: bold;
          font-size: 1.5rem;
          text-align: center;
          border-radius: 6px;
        }
      `}</style>
    </>
  )
}

export default ErrorAlert
