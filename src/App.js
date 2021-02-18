import React,{ useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import Header from './components/UI/Header';
import CharacterGrid from './components/Characters/CharacterGrid';
import Search from './components/UI/Search';

function App() {
  const [characters, setCharacters] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
    )
    
    setCharacters(result.data);
    setIsLoading(false);
    }
    fetchItems();
  }, [query])

  return (
    <div className="container">
    <Header/>
    <Search getQuery={(qu) => setQuery(qu)} />
    <CharacterGrid characters={characters} isLoading={isLoading}  />
    </div>
  );
}

export default App;
