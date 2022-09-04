import { useState,useEffect } from 'react'; 
import ImageList from '@mui/material/ImageList';
import { fetchPhotos, selectPages } from '../features/search/searchSlice';
import { useDispatch, useSelector } from "react-redux";
import { selectPhotos } from '../features/search/searchSlice';
import Image from '../Components/image';
import { Pagination } from '@mui/material';

export default function SearchPage() {
    
    const [query, setQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1)
    const dispatch = useDispatch()
    const photosRes = useSelector(selectPhotos);
    let totalPages = useSelector(selectPages);
    
    
    const handlePageChange = (e,value) => {
        setCurrentPage(value);
        dispatch(fetchPhotos({ query:query, currentPage:currentPage }))
    }
    const handleWhileSearching = (e) => {
        setCurrentPage(1);
        setQuery(e.target.value);
    }  
    useEffect(()=>{dispatch(fetchPhotos({ query:query, currentPage:1 }))},[query,dispatch])
    
    return (
        <>
        <input className='input-search' onChange={handleWhileSearching} type='text' placeholder='search your photos' />
        
        <ImageList  sx={{ width: '90%', margin: '0 auto', }}>
            {photosRes && photosRes.length && photosRes.map((item,i) => (
            <Image key={i} item={item} />
            ))}
        </ImageList>
        <Pagination count={totalPages} page={parseInt(currentPage)} onChange={(e,value)=> handlePageChange(e,value)} />
        </>
    );
}
        
    
       