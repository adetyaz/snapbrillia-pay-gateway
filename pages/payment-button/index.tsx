import React, { useState } from 'react';
import { Button, Typography, Box, Stack, Modal } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{
      minHeight: '80vh',
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }}>
      <Button onClick={handleOpen} sx={{ width: '9.75rem', margin: 'auto' }} variant='contained'>Create button</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Some important information here
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula. Nisi commodo laboris eiusmod nostrud cupidatat nostrud sit sunt duis laboris voluptate dolor pariatur quis.
            </Typography>
          </Box>
        </Modal>
    </Box>
  );
}