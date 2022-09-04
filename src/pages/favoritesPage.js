import {useEffect, useState} from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InfoIcon from '@mui/icons-material/Info';
import TransitionsModal from '../Components/modal';
import { useDispatch, useSelector } from 'react-redux';
import { deletePhoto } from '../features/favorite/favoriteSlice';
import { selectFavorites } from '../features/favorite/favoriteSlice';
import SelectOrder from '../Components/selectOrder';


export default function FavoritesPage(props) {
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('')
    const [orderBy, setOrderBy] = useState('');
    const [myPhotos, setMyPhotos] = useState([])
    const [data,setData] = useState({
        description: '',
        id: '',
        width: '',
        height: '',
        likes: '',
        date: '',
        urls: ''
    })
    const photosFavs = useSelector(selectFavorites);
    const dispatch = useDispatch()
    const handleClose = () => setOpen(false);
    
    const handleDelete = photo => {
        dispatch(deletePhoto(photo))
    }
    
    const handleOpen = (item) => {
            setOpen(true)
            setData(item)
        };
    useEffect(()=>{
        setMyPhotos(photosFavs)
    },[photosFavs])
    
    useEffect(()=>{
        let filterPhotos;
        if(searchTerm.length){
           filterPhotos = photosFavs.filter(p => p.description && p.description.toLowerCase().includes(searchTerm.toLowerCase()));   
        } else {
            filterPhotos = photosFavs
        }
        const arrOrderPhotos = [...filterPhotos]
        
        switch (orderBy){
            case 'width':
                arrOrderPhotos.sort((a,b)=>a.width - b.width)
                break;
            case 'height':
                arrOrderPhotos.sort((a,b)=>a.height - b.height)
                break;
            case 'likes':
                arrOrderPhotos.sort((b,a)=>a.likes - b.likes)
                break;
            case 'date':
                arrOrderPhotos.sort((b,a)=>a.date - b.date)
                break;

        }
        setMyPhotos(arrOrderPhotos)

    },[searchTerm,orderBy,photosFavs])
console.log(myPhotos)

    //const filterPhotos = searchTerm.length ? myPhotos.filter(p => p.description.toLowerCase().includes(searchTerm.toLowerCase())) : myPhotos;
      
    return (
        <>
        <input className='input-search' type='text' onChange={(e)=>setSearchTerm(e.target.value)} placeholder='search by description' /> 
        
        <SelectOrder orderBy={orderBy} setOrderBy={setOrderBy}/>

        <ImageList  sx={{ width: '90%', margin: '0 auto', }}>
              {myPhotos && myPhotos.length && myPhotos.map((item,i) => (
                
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
                       <>
                
                <IconButton
                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                        aria-label={`info about ${item.title}`}
                        onClick={()=> handleOpen(item)}
                        >
                    <InfoIcon />
                </IconButton>
                         
                 <IconButton 
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                onClick={()=> handleDelete(item)}
                >
                    <FavoriteIcon/>
                </IconButton> 
                         </>
                    }
                  />
                </ImageListItem>
              ))}
            </ImageList>
      <TransitionsModal open={open} handleClose={handleClose} data={data}/>
        </>
      );  }
    