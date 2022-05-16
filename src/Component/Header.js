import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{background: "#0c7580"}}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Expanse-Tracker
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}