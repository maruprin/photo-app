import { useEffect, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InfoIcon from "@mui/icons-material/Info";
import TransitionsModal from "../Components/modal";
import { useDispatch, useSelector } from "react-redux";
import { deletePhoto } from "../features/favorite/favoriteSlice";
import { selectFavorites } from "../features/favorite/favoriteSlice";
import SelectOrder from "../Components/selectOrder";
import {
  Box,
  Button,
  Pagination,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { paletaPagination } from "../styles/paletaPagination";
import { darkTheme } from "../styles/darkTheme";
import { useNavigate } from "react-router-dom";
import image1 from './noResults.png'

export default function FavoritesPage(props) {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const [myPhotos, setMyPhotos] = useState([]);
  const [data, setData] = useState({
    description: "",
    id: "",
    width: "",
    height: "",
    likes: "",
    date: "",
    urls: "",
  });

  const [currentPage, setCurrentPage] = useState(1);

  const photosFavs = useSelector(selectFavorites);

  const dispatch = useDispatch();
  const photosPerPages = 12;

  const handleClose = () => setOpen(false);
  const handleDelete = (photo) => {
    dispatch(deletePhoto(photo));
  };
  const handleOpen = (item) => {
    setOpen(true);
    setData(item);
  };
  const handleFavsChange = (e, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    setMyPhotos(photosFavs);
  }, [photosFavs]);
  useEffect(() => {
    let filterPhotos;
    if (searchTerm.length) {
      filterPhotos = photosFavs.filter(
        (p) =>
          p.description &&
          p.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      filterPhotos = photosFavs;
    }
    const arrOrderPhotos = [...filterPhotos];

    switch (orderBy) {
      case "width":
        arrOrderPhotos.sort((a, b) => a.width - b.width);
        break;
      case "height":
        arrOrderPhotos.sort((a, b) => a.height - b.height);
        break;
      case "likes":
        arrOrderPhotos.sort((b, a) => a.likes - b.likes);
        break;
      case "date":
        arrOrderPhotos.sort((b, a) => a.date - b.date);
        break;
      default:
        break;
    }
    setMyPhotos(arrOrderPhotos);
  }, [searchTerm, orderBy, photosFavs]);

  const numPages = Math.ceil(myPhotos.length / photosPerPages);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/search");
  };

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Box width="94%" display="block" sx={{ marginBottom: "30px" }}>
          <Box justifyContent="right" display="flex">
            <TextField
              id="standard-basic"
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="search by description"
              label="search by description"
              size="small"
            />
            <SelectOrder orderBy={orderBy} setOrderBy={setOrderBy} />
          </Box>
        </Box>
      </ThemeProvider>
      
      {myPhotos.length === 0 ? (
        <h2
          style={{
            color: "white",
            textAlign: "center",
            width: 400,
            margin: "0 auto 50px",
            display: "block",
          }}
        >
          Sorry, no favorite photos yet!
        </h2>
      ) : (
        <ImageList sx={{ width: "90%", margin: "0 auto" }}>
          {myPhotos &&
            myPhotos.length &&
            myPhotos
              .slice(
                (currentPage - 1) * photosPerPages,
                currentPage * photosPerPages
              )
              .map((item, i) => (
                <ImageListItem key={i}>
                  <img
                    src={`${item.urls.thumb}?w=248&fit=crop&auto=format&h=300`}
                    alt={item.alt_description}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    sx={{ height: 50 }}
                    title={item.description < 1 ? "Untitled" : item.description}
                    actionIcon={
                      <>
                        <IconButton
                          sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                          aria-label={`info about ${item.title}`}
                          onClick={() => handleOpen(item)}
                        >
                          <InfoIcon />
                        </IconButton>

                        <IconButton
                          sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                          onClick={() => handleDelete(item)}
                        >
                          <FavoriteIcon />
                        </IconButton>
                      </>
                    }
                  />
                </ImageListItem>
              ))}
        </ImageList>
      )}

      <ThemeProvider theme={paletaPagination}>
        {numPages < 1 ? (
         <> <Button
            onClick={handleClick}
            sx={{ width: 200, margin: "0 auto", display: "block", border: '1px solid #256D85',color:'#8FE3CF', backgroundColor:'#256D85', borderRadius: 20, padding: 3, marginBottom: 10, ":hover":{
              bgcolor: ' #fbbead',
              color:'#2B4865',
              border: '1px solid #fbbead'
            }}}
       
            variant="contained"
          >
            GO TO SEARCH PAGE
          </Button>
          <Box
        sx={{
          backgroundImage: `url(${image1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: {
            xs: "200px",
            sm: "200px",
            md: "300px",
            lg: "300px",
            xl: "300px",
          },
          margin: "0 auto",
          width: {
            xs: "200px",
            sm: "200px",
            md: "300px",
            lg: "300px",
            xl: "300px",
          },
        }}
      ></Box>
      </>
        ) : (
          <Pagination
            count={numPages}
            page={parseInt(currentPage)}
            onChange={(e, value) => handleFavsChange(e, value)}
            variant="outlined"
            color="primary"
            sx={{ width: "fit-content", margin: "0 auto 5px auto" }}
          />
        )}
        <TransitionsModal open={open} handleClose={handleClose} data={data} />
      </ThemeProvider>
    </>
  );
}
