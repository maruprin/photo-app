import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link, NavLink } from 'react-router-dom';
import image from './image4.png'

export default function MainPage() {
  return (
    <Box>
      <Typography
        textAlign="center"
        marginTop={10}
        color='#8FE3CF'
        sx={{
          fontSize: {
            xs: "40px",
            sm: "50px",
            md: "60px",
            lg: "70px",
            xl: "90px",
          },
          fontWeight: { xs: 400, sm: 300, md: 200, lg: 100, xl: 100 },
          ":hover": {
            color: "#fbbead",
            }
        }}
      >
        Welcome
      </Typography>
      <br />
      <Typography
        textAlign="center"
        marginBottom="50px"
        color='#62adb3'
        sx={{
          fontSize: {
            xs: "20px",
            sm: "30px",
            md: "40px",
            lg: "50px",
            xl: "60px",
          },
          fontWeight: { xs: 400, sm: 300, md: 200, lg: 100, xl: 100 },
        }}
      >
        Start searching for your favorite photos
      </Typography>

      <Grid
        container
        sx={{
          justifyContent: "center",
          marginBottom: "30px",
        }}
      >
        <Button
          sx={{
            bgcolor: "#256D85",
            color: "#8FE3CF",
            borderRadius: '30px',
            width: '200px',
            height: '50px',
            ":hover": {
              cursor: "pointer",
              color: "#256D85",
              bgcolor: "#fbbead",
            },
          }}
          size="large"
          variant="contained"
          component={NavLink}
          to="/search"
        >
          Start!
        </Button>
      </Grid>

      <Box
        sx={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: {
            xs: "600px",
            sm: "600px",
            md: "600px",
            lg: "600px",
            xl: "600px",
          },
          margin: "auto",
          width: {
            xs: "800px",
            sm: "800px",
            md: "800px",
            lg: "800px",
            xl: "800px",
          },
        }}
      ></Box>
    </Box>
  );
}