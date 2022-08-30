import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

export default function MainPage() {
  return (
    <div>
        <Link className='link-start' to='/search'>Start searching for your favorite photos</Link>
    </div>
  );
}