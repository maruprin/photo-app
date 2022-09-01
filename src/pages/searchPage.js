import { useState,useEffect } from 'react'; 
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { fetchPhotos } from '../features/search/searchSlice';
import { useDispatch, useSelector } from "react-redux";
import { selectPhotos } from '../features/search/searchSlice';
import { selectFavorites } from '../features/favorite/favoriteSlice';
import { addPhoto } from '../features/favorite/favoriteSlice';
import FavoriteIcon from '@mui/icons-material/Favorite';



export default function SearchPage() {

    const dispatch = useDispatch();
    const photosRes = useSelector(selectPhotos);
    const [query, setQuery] = useState('')
    useEffect(()=>{dispatch(fetchPhotos(query))},[query])
    const photosFavs = useSelector(selectFavorites);
    const handleSave = photo => {
        dispatch(addPhoto(photo))
    }
    //quiero cambiar el icono cuando apriete la persona
    const [icon, setIcon] = useState('')
    const favIds = photosFavs.map((photo)=>photo.id)

    
    
    
    return (
        <>
            <input className='input-search' onChange={(e)=>setQuery(e.target.value)}type='text' placeholder='search your photos' />
            
            <ImageList  sx={{ width: '90%', margin: '0 auto', }}>
              {photosRes && photosRes.length && photosRes.map((item,i) => (
                <ImageListItem key={i} >
                  <img
                    src={`${item.urls.thumb}?w=248&fit=crop&auto=format&h=300`}
                    alt={item.alt_description}
                    loading="lazy"
                  />
                <ImageListItemBar
                  sx={{height: 50}}
                    title={item.description}
                    subtitle={item.author}
                    actionIcon={
    
                        <IconButton
                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                        aria-label={`info about ${item.title}`}
                        onClick={()=> handleSave(item)}
                        >
                            <FavoriteBorderIcon/>
                        </IconButton> }
                    
                />
                </ImageListItem>
              ))}
            </ImageList>
          
            </>
          );  }
        
    
       