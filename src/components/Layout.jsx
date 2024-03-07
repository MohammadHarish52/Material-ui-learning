import { AddCircleOutlineOutlined, SubjectOutlined } from "@material-ui/icons";
import {
  AppBar,
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useHistory, useLocation } from "react-router-dom";
import React from "react";
import { format } from "date-fns";

const useStyles = makeStyles((theme) => {
  return {
    appbar: {
      width: `calc(100% - ${240}px)`,
    },
    toolbar: theme.mixins.toolbar,
    date: {
      flexGrow: 1,
    },
  };
});

const Layout = ({ children }) => {
  const classes = useStyles();

  const navigate = useHistory();
  const location = useLocation();

  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Note",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/create",
    },
  ];

  return (
    <div className="wrapper">
      {/* app bar */}
      <AppBar
        className={classes.appbar}
        sx={{ backgroundColor: "white", color: "black" }}
        elevation={0}
      >
        <Toolbar>
          <Typography className={classes.date}>
            Today is the {format(new Date(), "do MMMM y")}
          </Typography>
          <Typography>Tachyon</Typography>
          <Avatar
            src="/mario.png"
            sx={{
              paddingLeft: "16px",
            }}
          />
        </Toolbar>
      </AppBar>
      {/* side bar */}
      <Drawer
        variant="permanent"
        className="drawer"
        anchor="left"
        classes={{
          paper: "drawer_paper",
        }}
      >
        <div>
          <Typography variant="h5" sx={{ padding: "20px" }}>
            New Notes
          </Typography>
        </div>

        {/* List items*/}
        <List>
          {menuItems.map((list) => (
            <ListItem
              key={list.text}
              onClick={() => navigate.push(list.path)}
              className={location.pathname === list.path ? "active" : ""}
              sx={{ padding: "20px" }}
            >
              <ListItemIcon>{list.icon}</ListItemIcon>
              <ListItemText primary={list.text} />
            </ListItem>
          ))}
        </List>

        {/* <List>
          <ListItem>
            <ListItemText primary="hello" />
          </ListItem>
        </List> */}
      </Drawer>
      <div className="layout">
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
