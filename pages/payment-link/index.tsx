import React, { useState } from 'react';
import { Button, Typography, Box, Stack } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

export default function Home() {
  const [links, setLinks] = useState<string[]>([]);

  const handleClick = () => {
    setLinks(prevLinks => [...prevLinks, 'https://customdemolink.com/' + Math.floor(Math.random() * 100000) * 26]);
  }

  return (
    <Box sx={{
      minHeight: '80vh',
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }}>
      {links.length == 0 ?
        <Stack>
          <Typography align='center' variant="h3" gutterBottom>No payment link yet</Typography>
          <Typography width={'50%'} marginX={'auto'} align='center' variant="subtitle1" gutterBottom>Create a payment link to start receiving digital payments from your clients across borders</Typography>
          <Button variant="contained" onClick={() => setLinks(prevLinks => [...prevLinks, 'https://customdemolink.com/' + Math.floor(Math.random() * 100000) * 26])} sx={{ maxWidth: '9.5rem', alignSelf: 'center', marginY: '1rem' }}><AddIcon />Create Link</Button>
        </Stack>
      :
        <Stack flexDirection={'column'} justifyContent={'center'}>
          <Typography align='center' variant="h3" gutterBottom>Here is your payment link</Typography>
          <Button variant="contained" onClick={() => setLinks(prevLinks => [...prevLinks, 'https://customdemolink.com/' + Math.floor(Math.random() * 100000) * 26])} sx={{ maxWidth: '9.5rem', alignSelf: 'center', marginY: '1rem' }}><AddIcon />Create Link</Button>
          {
            links.map((element, index) => {
              return(
                <Typography key={index} variant='h5' align='center'>{element}</Typography>
              );
            })
          }
        </Stack>
      }
    </Box>
  );
}