import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios'
import SearchInput from './components/SearchInput';
import ItemList from './components/ItemList';
import { Container } from 'react-bootstrap';

// interface RecipeInterface {
//   title: string,
//   href: string,
//   ingredients: string,
//   thumbnail: string,
// }
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

function App() {

  const [term, setTerm] = useState<string>('')
  const [data, setData] = useState<ItemInterface[]>([])

  useEffect(() => {
    if (term) {
      handleFetchItems()
    }
  }, [term])

  const handleFetchItems = useCallback(() => {
    axios.get(`https://swapi.dev/api/vehicles/`, {
      params: {
        search: term,
      },
    })
    .then(({ data }) => {
      setData(data.results)
    })
  }, [term]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value)
  }

  return (
    <Container className="App">
      <h1 className="text-center">Star Wars Vehicle Search</h1>
      <SearchInput onInputChange={onInputChange} />
      {
        term ?
          <ItemList items={data} /> :
          <h2 className={"text-center"}>No Results yet!</h2>
      }
    </Container>
  );
}

export default App;
