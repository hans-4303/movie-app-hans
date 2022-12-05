import React, { useEffect } from 'react'

const Detail = ({props}) => {
  useEffect(() => {
    console.log(props);
  }, [])

  return (
    <div>hello</div>
  )
}

export default Detail