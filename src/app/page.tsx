import React from 'react';
import {
  Button,
  Container,
  Paper,
} from '@mui/material';
// import styles from './page.module.css';

export default function Home() {
  return (
    <Container>
      <Paper elevation={3} sx={{ p: 5 }}>
        <Button variant='contained' color='primary'>
          ボタン
        </Button>
      </Paper>
    </Container>
  );
}
