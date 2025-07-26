import React, { useEffect, useState, useContext } from 'react';
import Cards from '../components/Cards';
import CarouselBanner from '../components/liveimg';
import { SearchContext } from '../components/Search';

const Home = () => {
  const [wholeData,setData] = useState([]);
  const [cats,setCats] = useState([]);
  const { searchTerm } = useContext(SearchContext);

  useEffect(() => {
    (async ()=>{
      const resp = await fetch("http://localhost:5000/displaydata", { method: 'POST' });
      const json = await resp.json();
      setData(json[0]);
      setCats(json[1]);
    })();
  }, []);

  const filtered = searchTerm ? wholeData.filter(i=>i.name.toLowerCase().includes(searchTerm.toLowerCase())) : wholeData;

  return (
    <>
      <CarouselBanner />
      <div className="container">
        {filtered.length ? (
          <div className="cards-grid">
            {filtered.map(i=><Cards key={i._id} fooditems={i} quantity={i.option} />)}
          </div>
        ) : <h4>No items found</h4>}
      </div>
    </>
  );
};

export default Home;
