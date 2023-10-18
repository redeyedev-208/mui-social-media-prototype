import React, { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import DateRangeIcon from '@mui/icons-material/DateRange';

import {
  Avatar,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
} from '@mui/material';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import { Image, PersonAdd, VideoCameraBack } from '@mui/icons-material';

const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '20px',
});

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {' '}
      <Tooltip
        onClick={(e) => setOpen(true)}
        title='Add new post'
        sx={{
          position: 'fixed',
          bottom: 20,
          left: { xs: 'calc(50% - 25px)', md: 30 },
        }}
      >
        <Fab
          color='secondary'
          aria-label='add'
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby='StyledModal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box
          width={400}
          height={250}
          bgcolor={'background.default'}
          color={'text.primary'}
          p={3}
          borderRadius={5}
        >
          <Typography
            variant='h6'
            color='black'
            textAlign='center'
          >
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              id='user-id'
              alt='user avatar'
              onClick={(e) => setOpen(true)}
              sx={{ height: 30, width: 30 }}
              src='https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1287'
            />
            <Typography
              variant='span'
              fontWeight={500}
            >
              Gil
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: '100%' }}
            id='standard-multiline-static'
            multiline
            rows={3}
            placeholder='Share your thoughts...'
            variant='standard'
          />
          <Stack
            direction='row'
            gap={1}
            mt={2}
            mb={3}
          >
            <EmojiEmotionsIcon color='primary' />
            <Image color='secondary' />
            <VideoCameraBack color='success' />
            <PersonAdd color='error' />
          </Stack>
          <ButtonGroup
            color='secondary'
            fullWidth
            variant='contained'
            aria-label='outlined primary button group'
          >
            <Button
              id='user post button'
              aria-label='user post button'
            >
              Post
            </Button>
            <Button
              sx={{ width: '100px' }}
              aria-label='date post created'
            >
              <DateRangeIcon aria-describedby='id' />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
