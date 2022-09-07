import { ThemeProvider, createTheme } from '@mui/material/styles';
import { TextField } from '@mui/material'

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

 export const SearchBar = () => {
    return (
        
        <ThemeProvider theme={darkTheme}>
        <TextField id="searchBar"  label="search your photos" size='small'/>
        </ThemeProvider>
      
    )
  }