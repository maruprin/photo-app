import {useState} from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InfoIcon from '@mui/icons-material/Info';
import TransitionsModal from '../Components/modal';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoto,deletePhoto } from '../features/favorite/favoriteSlice';
import { selectFavorites } from '../features/favorite/favoriteSlice';
import DownloadIcon from '@mui/icons-material/Download'

export default function FavoritesPage() {
    const [open, setOpen] = useState(false);
    const handleOpen = (description,id,width, height, likes,updated_at, urls) => {
        setOpen(true)
        setData({description, id, width, height,likes, updated_at,urls})
    };
    const handleClose = () => setOpen(false);
    const photosFavs = useSelector(selectFavorites);
    const dispatch = useDispatch()
    const handleDelete = photo => {
        dispatch(deletePhoto(photo))
    }
    const [data,setData] = useState({
        description: '',
        id: ''
    })
    
    console.log(photosFavs)
    return (
        <>
        <input className='input-search' type='text' placeholder='search your photos' />

        <ImageList  sx={{ width: '90%', margin: '0 auto', }}>
              {photosFavs && photosFavs.length && photosFavs.map((item,i) => (
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
        
                        >
                    <DownloadIcon />
                </IconButton>
                <IconButton
                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                        aria-label={`info about ${item.title}`}
                        onClick={()=> handleOpen(item.description,item.id,item.width,item.height,item.likes,item.updated_at,item.urls.full,item.urls.thumb)}
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
    const itemData = [
      {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        author: '@bkristastucchio',
        rows: 2,
        cols: 2,
        featured: true,
      },
      {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        author: '@rollelflex_graphy726',
      },
      {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
        author: '@helloimnik',
      },
      {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        author: '@nolanissac',
        cols: 2,
      },
      {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        author: '@hjrc33',
        cols: 2,
      },
      {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
        featured: true,
      },
      {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
        author: '@tjdragotta',
      },
      {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
        author: '@katie_wasserman',
      },
      {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
        author: '@silverdalex',
        rows: 2,
        cols: 2,
      },
      {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
        author: '@shelleypauls',
      },
      {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
        author: '@peterlaster',
      },
      {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
        author: '@southside_customs',
        cols: 2,
      },
    ];

   