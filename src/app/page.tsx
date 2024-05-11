import React from 'react';
import {
  Card,
  CardContent,
  Container,
  Grid,
  Typography
} from '@mui/material';
// import styles from './page.module.css';

export default function Home() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                投稿数
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                20
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                フォロワー数
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                1,000
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                インプレッション数
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                1,000,000
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
