import React from 'react'
import { Form } from 'react-bootstrap'

type Props = {
  term: string,
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function SearchInput({ term, onInputChange }: Props ): JSX.Element {
  return (
    <div>
      <Form.Group>
        <Form.Control
          size="lg"
          type="text"
          placeholder="Large text"
          onChange={onInputChange}
        />
        <br />
      </Form.Group>
    </div>
  )
}

export default SearchInput
