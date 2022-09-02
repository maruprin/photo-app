import { useState } from 'react'; 
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import DownloadIcon from '@mui/icons-material/Download'
import { Button, TextareaAutosize } from '@mui/material';
import { useDispatch } from 'react-redux';
import { editPhoto } from '../features/favorite/favoriteSlice';

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

export default function TransitionsModal2(props) {
    const [open2, setOpen2] = useState(false);
    const handleClose2 = () => setOpen2(false);
    const [edit, setEdit] = useState(false)
    const [descriptionPhoto, setDescriptionPhoto] = useState('')
    const dispatch = useDispatch()
    const handleOpen2 = () => {
         setOpen2(true)
         console.log('entro en modal 2')
     };
   
    const handleClickSaveDescription = (id) => {
         dispatch(editPhoto({ id, descriptionPhoto }));
         setEdit(false);
         handleClose2()
       };

      const handleChangeOfDescription = (e) => {
        setDescriptionPhoto(e.target.value);
      };
    console.log(props.open2)
    return (
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={props.open2}
          onClose={props.handleClose2}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={props.open2}>
            <Box sx={style}>
              <Typography id="transition-modal-title" variant="h6" component="h2">
                  Edit description: 
  
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>


              <TextareaAutosize
              aria-label="minimum height"
              minRows={7}
              style={{ width: 400 }}
              value={props.data.description}
              onChange={(e) => handleChangeOfDescription(e)}
            ></TextareaAutosize>
            <Button
              sx={{
                backgroundColor: "#2B4865",
                color: "white",
                marginTop: "20px",
                ":hover": {
                  backgroundColor: "#256D85",
                  transition: "0.2s ease",
                },
              }}
              onClick={handleClickSaveDescription}
            >
              Click to save
            </Button>
               
              </Typography>
            </Box>
          </Fade>
        </Modal>
      </div>
      )
      
  }