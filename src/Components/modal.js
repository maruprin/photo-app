import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import { selectFavorites } from '../features/favorite/favoriteSlice';
import { useSelector } from 'react-redux';
import IconButton from '@mui/material/IconButton';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};




export default function TransitionsModal(props) {
const photosFavs = useSelector(selectFavorites);
// const handleInfo = () => {
//     console.log('apretaste infoo')
// }
//console.log(photosFavs)
  return (
  
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
                Información: 

            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Descripción: {props.data.description}
                  <IconButton 
                sx={{ color: 'black' }}
                >
                    <EditIcon/>
                </IconButton> 
                <br/>
                Width: {props.data.width}<br/>
                Height: {props.data.height}<br/>
                Likes: {props.data.likes}<br/>
                Date: {props.data.updated_at}<br/>

            
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
    )
    
}
