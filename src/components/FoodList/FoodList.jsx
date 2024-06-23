import React, { memo, useContext, useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import axiosClient from '../../axiosClient'
import Image from 'next/image'
import Link from 'next/link'

const FoodList = (props) => {
  const [foodItems, setFoodItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchFoodItems = async () => {
      try {
        const response = await axiosClient.get('/api/food')
        setFoodItems(response.data)
      } catch (err) {
        setError(err.message || 'Something went wrong')
      } finally {
        setLoading(false)
      }
    }

    fetchFoodItems()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className='food-list-container'>
      <Row>
        {foodItems.map((item) => {
          const { id, name, description, price, imageURL } = item
          return (
            <Col
              key={id}
              className='food-list-col'
              lg={{ span: 3 }}
            >
              <Link
                href={`/food-item/${id}`}
                passHref
              >
                <div className='food-list-card-container'>
                  <div className='food-list-content-container'>
                    <h2 className='teal'>{name}</h2>
                    <div className='food-list-content-inner-container'>
                      <p>{description}</p>
                      <h3 className='green'>Price: ${price}</h3>
                    </div>
                  </div>
                  <div className='food-list-img-container'>
                    <Image
                      src={`${imageURL}`}
                      width={200}
                      height={200}
                      alt='Picture of the author'
                    />
                  </div>
                </div>
              </Link>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default memo(FoodList)
