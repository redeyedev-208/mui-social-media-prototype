import { useState } from 'react';
import { Box, Stack, createTheme } from '@mui/material';
import Feed from './components/Feed';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import Navbar from './components/Navbar';
import Add from './components/Add';
import { ThemeProvider } from '@emotion/react';

function App() {
  const [mode, setMode] = useState('light');
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        bgcolor={'background.default'}
        color={'text.primary'}
      >
        <Navbar />
        <Stack
          direction='row'
          spacing={2}
          justifyContent='space-between'
        >
          <LeftSidebar
            setMode={setMode}
            mode={mode}
          />
          <Feed />
          <RightSidebar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
