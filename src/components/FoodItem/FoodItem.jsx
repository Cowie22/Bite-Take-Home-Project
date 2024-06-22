import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import axiosClient from '../../axiosClient'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

import ArrowRightWhite from '../Svgs/ArrowRightWhite'

const FoodDetail = (props) => {
  const router = useRouter()
  const { query } = router
  const id = query ? query.id : props.id

  const [foodItem, setFoodItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchFoodItem = async () => {
      try {
        const response = await axiosClient.get(`/food/${id}`)
        setFoodItem(response.data[0]) // Assuming your API returns a single food item object
      } catch (err) {
        setError(err.message || 'Something went wrong')
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchFoodItem()
    }
  }, [id])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!foodItem) return null

  const { name, description, price, imageURL } = foodItem

  return (
    <Row>
      <Col lg={{ span: 6, offset: 3 }}>
        <div className='food-item-inner-container'>
          <h1>{name}</h1>
          <p>{description}</p>
          <h2 className='green'>Price: ${price}</h2>
          <Image
            src={`${imageURL}`}
            width={400}
            height={400}
            alt={`img-${name}`}
          />
          <div className='food-item-btn-container'>
            <Link href='/'>
              <button
                className='cta-btn orange-btn'
                onClick={() => {}}
              >
                ADD TO CART
                <ArrowRightWhite />
              </button>
            </Link>
            <Link href='/'>
              <button className='cta-btn orange-btn'>
                RETURN HOME
                <ArrowRightWhite />
              </button>
            </Link>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default FoodDetail
