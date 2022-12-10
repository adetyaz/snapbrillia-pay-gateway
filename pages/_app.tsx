import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MeshProvider } from '@martifylabs/mesh-react'
MeshProvider
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import GridViewIcon from '@mui/icons-material/GridView';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { Button, Link } from '@mui/material';
import { color } from '@mui/system';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const connect = () => {
	console.log('Hey');
}

export default function App({ Component, pageProps }: AppProps) {
	const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
	
	return (
		<MeshProvider>
			<Box sx={{ display: 'flex' }}>
      	<CssBaseline />
				<AppBar sx={{ background: '#30668a'}} position="fixed" open={open}>
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							onClick={handleDrawerOpen}
							edge="start"
							sx={{ mr: 2, ...(open && { display: 'none' }) }}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
							Cardano-Pay-Gateway
						</Typography>
						<Button sx={{ background: '#914ddf', color: '#FEFEFE', width: '9.5rem' }} onClick={connect}>
							Edmund EE
						</Button>
					</Toolbar>
				</AppBar>
				<Drawer
					sx={{
						width: drawerWidth,
						flexShrink: 0,
						'& .MuiDrawer-paper': {
							width: drawerWidth,
							boxSizing: 'border-box',
						},
					}}
					variant="persistent"
					anchor="left"
					open={open}
				>
					<DrawerHeader>
						<IconButton onClick={handleDrawerClose}>
							{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
						</IconButton>
					</DrawerHeader>
					<Divider />
					<List>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<GridViewIcon />
								</ListItemIcon>
								<Link href={'/home'} color='inherit' underline='none' variant='subtitle1'>Dashboard</Link>
							</ListItemButton>
						</ListItem>
					</List>
					<Divider />
					<List>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<InsertLinkIcon />
								</ListItemIcon>
								{/* <ListItemText primary={'Payment button'} />'Payment link' */}
								<Link href={'/payment-link'} color='inherit' underline='none' variant='subtitle1'>Payment link</Link>
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<MoreHorizIcon />
								</ListItemIcon>
								<Link href={'/payment-button'} color='inherit' underline='none' variant='subtitle1'>Payment button</Link>
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton>
								<ListItemIcon>
									<MoreHorizIcon />
								</ListItemIcon>
								<Link href={'/ecommerce'} color='inherit' underline='none' variant='subtitle1'>Ecommerce </Link>
							</ListItemButton>
						</ListItem>
					</List>
				</Drawer>
				<Main open={open}>
					<DrawerHeader />
					<Component {...pageProps} />
				</Main>
			</Box>
		</MeshProvider>
	)
}
