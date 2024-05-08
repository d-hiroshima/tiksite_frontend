import React from 'react';
import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Inter } from 'next/font/google';
import './globals.css';
import {
  Box,
  // CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import MailIcon from '@mui/icons-material/Mail';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TikSite',
  description: 'TikSite is a TikTok clone built with Next.js and Supabase.',
};
const drawerWidth = 240;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <Box sx={{ display: 'flex' }}>
            {/* <CssBaseline /> */}
            <AppBar
              position='fixed'
              color='default'
              sx={{ zIndex: 9999 }}
            >
              <Toolbar>
                <Typography variant='h6' noWrap component='div'>
                  TikSite
                </Typography>
              </Toolbar>
            </AppBar>
            <Drawer
              variant='permanent'
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                  width: drawerWidth,
                  boxSizing: 'border-box',
                },
              }}
            >
              <Toolbar />
              <Box sx={{ overflow: 'auto' }}>
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <DashboardIcon />
                      </ListItemIcon>
                      <ListItemText primary={'ダッシュボード'} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <AnalyticsIcon />
                      </ListItemIcon>
                      <ListItemText primary={'分析するで'} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <MailIcon />
                      </ListItemIcon>
                      <ListItemText primary={'お問い合わせ'} />
                    </ListItemButton>
                  </ListItem>
                </List>
                <Divider />
              </Box>
            </Drawer>
            <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
              <Toolbar />

              {children}
            </Box>
          </Box>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
