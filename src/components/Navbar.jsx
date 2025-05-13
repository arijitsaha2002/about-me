import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} marginX={2}>
                    Arijit Saha
                </Typography>
                <Typography marginX={4}>
                    <Link to="/" className='Link-Normal'>Home</Link>
                </Typography>
                <Typography marginX={4}>
                    <Link to="/projects" className='Link-Normal'>Projects</Link>
                </Typography>
                <Typography marginX={4}>
                    <Link to="/contact" className='Link-Normal'>Contact</Link>
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

