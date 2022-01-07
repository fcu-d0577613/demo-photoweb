import React,{useState, useEffect} from 'react'
import search, { Search } from '../components/Search'
import nav from '../components/Nav'
import footer from '../components/Footer'
import Picture from '../components/Picture'

const HomePage = () => {
  const [input, setInput] = useState("");
  let [data, setData] = useState(null);
  let [page,setpage] = useState(1);
  let [currentSearch,setcurrentSearch]=useState("");
  const auth ="563492ad6f91700001000001beb0e07a344548b4880d791647d4e71e";
  const intialurl="https://api.pexels.com/v1/curated?page=1&per_page=15";
  const searchurl=`https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=1`;
  
  //Fetch data from api
  const search = async(url) =>{
    setpage(2);
    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,

      },
    });
    let parsedData = await dataFetch.json();
    setData(parsedData.photos);
    
  };

  //Load more picture
  const morepicture = async() => {
    let newURL;
    if(input === ""){
      newURL=`https://api.pexels.com/v1/curated?page=${page}&per_page=15`;
    }else{
      newURL=`https://api.pexels.com/v1/search?query=${input}&per_page=15&page=${page}`;
    }
    setpage(page+1);
    const dataFetch = await fetch(newURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,

      },
    });
    let parsedData = await dataFetch.json();
    setData(data.concat(parsedData.photos));
  };



  //Fetch data when the page loads up 
  useEffect(() => {
    search(intialurl);
  },[]);

  useEffect(() => {
    if(currentSearch === ""){
      search(intialurl);
    }else{
      search(searchurl);
    }
    
  },[currentSearch]);

  
  return (
    <div style={{minHeight: "100vh"}}>
      <Search search={() => {
                setcurrentSearch(input);
                
              }}
                setInput={setInput}/>

      <div className="pictures">
        {data &&
          data.map( d=> {
            return <Picture data={d} />;
          })}

      </div>

      <div className="morePicture">
          <button onClick={morepicture}> Load More</button>
      </div>

    </div>
  )
}

export default HomePage
