import React from 'react'

const useGif = () => {
  const [gif,setgif]=useState('');
  const [loading,sertloading]=useState('flase');


  async function fetchData(){
    sertloading(true);
      const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
      const  {data}=await axios.get(url);
     const imgsrc=data.data.images.downsized_large.url;
     setgif(imgsrc);
     sertloading(false);
  }
  useEffect(()=>{
fetchData();
  },[])











}

export default useGif