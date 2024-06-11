import axios from 'axios';
import React,{useEffect, useState} from 'react'
import Spinner from './Spinner';


const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {
  const [gif,setgif]=useState('');
  const [loading,sertloading]=useState('flase');
  const [tag,settag]=useState('');


  async function fetchData(){
    sertloading(true);
      const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
      const  {data}=await axios.get(url);
     const imgsrc=data.data.images.downsized_large.url;
     setgif(imgsrc);
     sertloading(false);
  }
  useEffect(()=>{
fetchData();
  },[])


  function clickHandler(){
  fetchData();
  }

  function changeHandler(event){
  settag(event.target.value);
  }


  return (
    <div className="flex flex-col items-center bg-blue-500 w-1/2   w-10/12 rounded-lg border-2 border-gray-600 gap-y-5 mt-[15px] mx-auto py-5">
      <h2 className='mt-[15px] uppercase  underline font-blod text-2xl '>Random Gif</h2>

{
    loading?(<Spinner/>):(<img src={gif}  width="450"/>)

}

<input className='w-10/12  bg-white-300   text-lg py-2 rounded-lg  text-center'
onChange={changeHandler}
value={tag}/>





<button onClick={clickHandler} 
className='w-10/12  bg-yellow-300   text-lg py-2 rounded-lg
mb-[10px]'>
  Generate
  </button>
    </div>
  )
}

export default Tag