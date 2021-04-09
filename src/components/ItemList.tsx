import React from 'react';
import { Row, Card, Container } from 'react-bootstrap'

interface ItemInterface {
  cargo_capacity: string,
  consumables: string,
  cost_in_credits: string,
  created: string,
  crew: string,
  edited: string,
  films: string[],
  length: string,
  manufacturer: string,
  max_atmosphering_speed: string,
  model: string,
  name: string,
  passengers: string,
  pilots: string[]
  url: string
  vehicle_class: string
}

type Props = {
  items: ItemInterface[],
}

function SearchInput({ items }: Props): JSX.Element {
  return (
    <Container>
      <Row className="justify-content-md-center" xs={1} sm={1} md={3} lg={4}>
        {
          items.map((item) => (
            <Card style={{ width: '18rem' }} className="m-md-2">
              {/* No image in response unfortunately */}
              <Card.Img variant="top"
                src="https://www.willow-car-sales.co.uk/wp-content/uploads/2019/11/placeholder-image-1.jpg"
              />
              <Card.Body>
                <Card.Title>Name: { item.name }</Card.Title>
                <Card.Text>Model: { item.model }</Card.Text>
              </Card.Body>
            </Card>)
          )
        }
      </Row>
    </Container>
  )
}

export default SearchInput
