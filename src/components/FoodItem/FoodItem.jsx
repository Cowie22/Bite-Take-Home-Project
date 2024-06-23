import { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import axiosClient from '../../axiosClient'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

import ArrowRightWhite from '../Svgs/ArrowRightWhite'

const FoodItem = (props) => {
  const router = useRouter()
  const { query } = router
  const id = query ? query.id : props.id

  const [foodItem, setFoodItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const fetchFoodItem = async () => {
      try {
        const response = await axiosClient.get(`/api/food/${id}`)
        setFoodItem(response.data[0])
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

  const handleAddToCart = async () => {
    try {
      const response = await axiosClient.post(`/api/cart`, {
        food_id: id,
        quantity: quantity,
      })
      console.log('Item added to cart:', response.data)
    } catch (err) {
      console.error('Error adding item to cart:', err)
    }
  }

  const handleChangeQuantity = (value) => {
    if (value < 1) {
      return
    }
    setQuantity(value)
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!foodItem) return null

  const { name, description, price, imageURL } = foodItem

  return (
    <>
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
          </div>
        </Col>
      </Row>
      <Row>
        <Col xl={{ span: 6, offset: 3 }} lg={{ span: 8, offset: 2 }}>
          <div className='food-item-btn-container'>
            <Link href='/cart'>
              <button
                className='cta-btn orange-btn'
                onClick={handleAddToCart}
              >
                ADD TO CART
                <ArrowRightWhite />
              </button>
            </Link>
            <div className='quantity-control'>
              <button
                className='quantity-btn cta-btn orange-btn'
                onClick={() => handleChangeQuantity(quantity - 1)}
              >
                -
              </button>
              <p>{quantity}</p>
              <button
                className='quantity-btn cta-btn orange-btn'
                onClick={() => handleChangeQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <Link href='/'>
              <button className='cta-btn orange-btn'>
                RETURN HOME
                <ArrowRightWhite />
              </button>
            </Link>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default FoodItem
