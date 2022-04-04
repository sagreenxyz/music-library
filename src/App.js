import './App.css'
import { useEffect, useState } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'

function App() {
  let [search, setSearch] = useState('')
  let [message, setMessage] = useState('Search for Music')
  let [data, setData] = useState([])

  return (
    <div className="App">
      <SearchBar />
      {message}
      <Gallery />
    </div>
  );
}

export default App;
