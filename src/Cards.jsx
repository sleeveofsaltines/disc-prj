import { useEffect, useState } from 'react'

const Cards = ({user_id}) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://disc-assignment-5-users-api-iyct.onrender.com/api/users/' + user_id)
        const result = await response.json()
        setData(result)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <p>Loading data...</p>
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>
  }

  return (
      <div className='cardlook'>
          <strong>Name:</strong> {data.firstName} {data.lastName}<br/>
          <strong>Major:</strong> {data.major}<br/>
          <strong>Bio:</strong> {data.bio}

      </div>
  )
}

export default Cards