import { useState,useEffect } from 'react'; 
import ImageList from '@mui/material/ImageList';
import { fetchPhotos } from '../features/search/searchSlice';
import { useDispatch, useSelector } from "react-redux";
import { selectPhotos } from '../features/search/searchSlice';
import Image from '../Components/imagen';


export default function SearchPage() {

    const dispatch = useDispatch()
    const photosRes = useSelector(selectPhotos);
    const [query, setQuery] = useState('')
    useEffect(()=>{dispatch(fetchPhotos(query))},[query,dispatch])
 
    return (
        <>
        <input className='input-search' onChange={(e)=>setQuery(e.target.value)}type='text' placeholder='search your photos' />
        
        <ImageList  sx={{ width: '90%', margin: '0 auto', }}>
            {photosRes && photosRes.length && photosRes.map((item,i) => (
            <Image key={i} item={item} />
            ))}
        </ImageList>
        </>
    );
}
        
    
       