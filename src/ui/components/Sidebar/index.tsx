import React, { FunctionComponent } from 'react';
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import HelpIcon from '@mui/icons-material/Help';
import DvrIcon from '@mui/icons-material/Dvr';
import SettingsIcon from '@mui/icons-material/Settings';
import ListIcon from '@mui/icons-material/List';
import { matchPath, useLocation, Link } from 'react-router-dom';
import BackpackIcon from '@mui/icons-material/Backpack';
import { SxProps, Theme } from '@mui/system';
import { useTranslation } from 'react-i18next';
import useAppState from '../../hooks/useAppState';
import AppStatus from '../../models/enum/AppStatus';

const drawerWidth = 215;

const styles: Record<string, SxProps<Theme>> = {
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: drawerWidth,
    },
  },
  drawerContainer: {
    overflow: 'auto',
  },
  menuItem: {
    paddingY: 1,
    paddingX: 3,
  },
};

const Sidebar: FunctionComponent = () => {
  const location = useLocation();
  const configuratorActive =
    matchPath(location.pathname, '/configurator') !== null;
  const backpackActive = matchPath(location.pathname, '/backpack') !== null;
  // const settingsActive = matchPath(location.pathname, '/settings') !== null;
  const logsActive = matchPath(location.pathname, '/logs') !== null;
  const serialMonitorActive =
    matchPath(location.pathname, '/serial-monitor') !== null;
  const settingsActive = matchPath(location.pathname, '/settings') !== null;
  const supportActive = matchPath(location.pathname, '/support') !== null;
  const { appStatus } = useAppState();

  const navigationEnabled = appStatus !== AppStatus.Busy;

  const { t } = useTranslation();

  return (
    <Drawer sx={styles.drawer} variant="permanent">
      <Toolbar />
      <Divider />
      <Box sx={styles.drawerContainer}>
        <List>
          <ListItem
            component={Link}
            to="/configurator"
            selected={configuratorActive}
            sx={styles.menuItem}
            button
            disabled={!navigationEnabled}
          >
            <ListItemIcon>
              <BuildIcon />
            </ListItemIcon>
            <ListItemText primary={t('Sidebar.Configurator')} />
          </ListItem>
          <ListItem
            component={Link}
            to="/backpack"
            selected={backpackActive}
            sx={styles.menuItem}
            button
            disabled={!navigationEnabled}
          >
            <ListItemIcon>
              <BackpackIcon />
            </ListItemIcon>
            <ListItemText primary={t('Sidebar.Backpack')} />
          </ListItem>

          <ListItem
            component={Link}
            to="/logs"
            selected={logsActive}
            sx={styles.menuItem}
            button
            disabled={!navigationEnabled}
          >
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText primary={t('Sidebar.Logs')} />
          </ListItem>

          <ListItem
            component={Link}
            to="/serial-monitor"
            selected={serialMonitorActive}
            sx={styles.menuItem}
            button
            disabled={!navigationEnabled}
          >
            <ListItemIcon>
              <DvrIcon />
            </ListItemIcon>
            <ListItemText primary={t('Sidebar.SerialMonitor')} />
          </ListItem>

          <ListItem
            component={Link}
            to="/settings"
            selected={settingsActive}
            sx={styles.menuItem}
            button
            disabled={!navigationEnabled}
          >
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary={t('Sidebar.Settings')} />
          </ListItem>

          <ListItem
            component={Link}
            to="/support"
            selected={supportActive}
            sx={styles.menuItem}
            button
            disabled={!navigationEnabled}
          >
            <ListItemIcon>
              <HelpIcon />
            </ListItemIcon>
            <ListItemText primary={t('Sidebar.Support')} />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
