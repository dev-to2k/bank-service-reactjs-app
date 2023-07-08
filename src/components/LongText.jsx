import React from 'react'

function LongText({ content, limit }) {
  const [showAll, setShowAll] = React.useState(false)

  const handleShowAll = () => {
    setShowAll(true)
  }

  if (content?.length <= limit) {
    return <p>{content}</p>
  }

  if (!showAll) {
    return (
      <>
        <p>
          {content?.slice(0, limit)}...
          <button
            onClick={handleShowAll}
            className='bg-transparent fw-bold border-0 text-primary px-0'
          >
            Show more
          </button>
        </p>
      </>
    )
  }

  if (showAll) {
    return (
      <>
        <p>{content}</p>
        <button
          onClick={() => setShowAll(false)}
          className='bg-transparent fw-bold border-0 text-primary px-0'
        >
          Show less
        </button>
      </>
    )
  }
}

export default LongText
