import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

const Job = ({ data }) => { 

  const [isSelected, setIsSelected] = useState(false)
  const dispatch = useDispatch()

  return(
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
        <Button onClick={() => {
          console.log('aggiungo azienda')
          dispatch({
            type: 'ADD_ENTERPRISE',
            payload: data
          })
          setIsSelected(true)
        }}>{isSelected ? (<i className="bi bi-heart-fill"></i>) : (<i className="bi bi-heart"></i>)}</Button>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  )}

export default Job
