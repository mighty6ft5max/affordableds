import React, { useState } from "react";
import classNames from "classnames";
import ReactHTMLParser from "react-html-parser";
import {
  FaBuilding,
  FaFacebook,
  FaPhone,
  FaAt,
  // FaCircle,
  FaPaperPlane,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TableContainer,
  // Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Typography,
  withStyles,
} from "@material-ui/core";
import { createStyles, Theme } from "@material-ui/core/styles";

const content_max_width = 960;

const styles = (theme: Theme) =>
  createStyles({
    biz_icon: {
      marginRight: 8,
    },
    biz_info: {
      color: "white",
      fontSize: ".9rem",
      lineHeight: 1.21,
      marginBottom: 8,
    },
    button: {
      background: theme.palette.success.main,
      color: "white",
    },
    content: {
      background: "white",
      borderRadius: "8px 8px 0 0",
      boxShadow: theme.shadows[4],
      padding: "48px 48px 135px",
      zIndex: 2,
      marginTop: -100,
      maxWidth: content_max_width,
      width: "100%",
    },
    hours: {
      "& td": {
        border: "none",
        color: "white",
        fontSize: "1.4rem",
      },
    },
    name: {
      width: "100%",
    },
    green: {
      color: theme.palette.success.light,
    },
    red: {
      color: theme.palette.error.light,
    },
    yellow: {
      color: theme.palette.warning.light,
    },
    quote: { fontStyle: "italic", padding: "0 24px", textAlign: "center" },
    select: {
      padding: 10,
      color: "white",
    },
    send: {
      background: theme.palette.success.main,
      color: "white",
      fontWeight: "bold",
      fontSize: 12,
    },
    services: {},
    text_field: {
      padding: 8,
    },
  });

interface Props {
  classes: any;
  isMobile: boolean;
}

const Contact: React.FC<Props> = (props) => {
  const { classes, isMobile } = props;
  const [messageType, setMessageType] = useState("general");
  // const page_info = {
  //   breadcrumbs: [
  //     {
  //       name: "Home",
  //       url: "/",
  //     },
  //     {
  //       name: "Contact",
  //       url: "/contact",
  //     },
  //   ],
  //   page_title: "Contact us",
  // };

  const contact_info = [
    {
      icon: <FaBuilding />,
      info: `954 Lauderdale Highway<br/>Trenton, New Jerson 12345`,
    },
    { icon: <FaPhone />, info: "(123) 345-1234" },
    { icon: <FaAt />, info: "info@halalcs.us" },
  ];

  const social_info = [
    {
      icon: <FaFacebook />,
      info: `Facebook`,
    },
    { icon: <FaTwitter />, info: "Twitter" },
    { icon: <FaYoutube />, info: "YouTube" },
  ];

  const hours = [
    {
      color: "yellow",
      name: "Sunday",
      time: "12P - 5P",
      comment: "Appointment only",
    },
    { color: "green", name: "Monday", time: "9AM - 5PM" },
    { color: "green", name: "Tuesday", time: "9AM - 5PM" },
    { color: "green", name: "Wednesday", time: "9AM - 5PM" },
    { color: "green", name: "Thursday", time: "9AM - 5PM" },
    { color: "red", name: "Friday", time: "Closed" },
    { color: "red", name: "Saturday", time: "Closed" },
  ];

  const handleChange = (event: any) => {
    setMessageType(event.target.value);
  };
  return (
    <Grid
      classes={{ root: classes.inner }}
      spacing={4}
      container
      style={{ margin: "0 auto", maxWidth: 960 }}
    >
      <Grid item xs={12} md={6} style={{ maxWidth: 500 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Grid container>
                  {contact_info.map((data, idx) => {
                    const { icon, info } = data;
                    return (
                      <Grid key={idx} item xs={12}>
                        <Grid container>
                          <Grid item classes={{ root: classes.biz_icon }}>
                            {icon}
                          </Grid>
                          <Grid item xs>
                            <Typography
                              classes={{ root: classes.biz_info }}
                              variant="body2"
                              component="p"
                            >
                              {ReactHTMLParser(info)}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
              <Grid item xs={6}>
                <Grid container>
                  {social_info.map((data, idx) => {
                    const { icon, info } = data;
                    return (
                      <Grid key={idx} item xs={12}>
                        <Grid container>
                          <Grid item classes={{ root: classes.biz_icon }}>
                            {icon}
                          </Grid>
                          <Grid item xs>
                            <Typography
                              classes={{ root: classes.biz_info }}
                              variant="body2"
                              component="p"
                            >
                              {ReactHTMLParser(info)}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5">Office hours</Typography>
          </Grid>
          <Grid item xs={12} style={{ marginBottom: 24, textAlign: "center" }}>
            <TableContainer style={{ margin: "0 auto", width: "fit-content" }}>
              <Table
                classes={{ root: classes.hours }}
                size="small"
                style={{ width: "unset" }}
              >
                <TableBody>
                  {hours.map((day) => {
                    const { name, time } = day;
                    return (
                      <TableRow key={name}>
                        {/* <TableCell>
                          <FaCircle className={classes[color]} />
                        </TableCell> */}
                        <TableCell>{name}</TableCell>
                        <TableCell>{time}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} style={{ maxWidth: 460 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h5">Send us a message!</Typography>
          </Grid>
          <Grid item xs={12} style={{ paddingLeft: isMobile ? "unset" : 48 }}>
            <Grid container>
              <Grid classes={{ root: classes.text_field }} item xs={12}>
                <TextField
                  classes={{ root: classNames(classes.name) }}
                  label="Name"
                  size="small"
                  variant="outlined"
                />
              </Grid>
              <Grid classes={{ root: classes.text_field }} item xs={12}>
                <TextField
                  classes={{ root: classNames(classes.name) }}
                  label="Email"
                  size="small"
                  variant="outlined"
                />
              </Grid>
              <Grid classes={{ root: classes.text_field }} item xs={6}>
                <TextField
                  classes={{ root: classNames(classes.name) }}
                  label="Phone (Optional)"
                  size="small"
                  variant="outlined"
                />
              </Grid>
              <Grid classes={{ root: classes.text_field }} item xs={6}>
                <FormControl
                  variant="outlined"
                  className={classes.formControl}
                  style={{ width: "100%" }}
                >
                  <InputLabel id="demo-simple-select-outlined-label">
                    Intent
                  </InputLabel>
                  <Select
                    classes={{ select: classes.select }}
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={messageType}
                    label="Intent"
                    onChange={handleChange}
                  >
                    <MenuItem value="general">General</MenuItem>
                    <MenuItem value={"quote"}>Quote Request</MenuItem>
                    <MenuItem value={"question"}>Question</MenuItem>
                    <MenuItem value={"comments"}>Comments</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid classes={{ root: classes.text_field }} item xs={12}>
                <TextField
                  classes={{ root: classNames(classes.name) }}
                  label="Message"
                  multiline
                  rows={4}
                  size="small"
                  variant="outlined"
                />
              </Grid>
              <Grid
                classes={{ root: classes.text_field }}
                item
                xs={12}
                style={{ textAlign: "right" }}
              >
                <Button
                  classes={{ root: classes.send }}
                  size="small"
                  variant="contained"
                >
                  <FaPaperPlane style={{ marginRight: 8 }} /> Send
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Contact);
