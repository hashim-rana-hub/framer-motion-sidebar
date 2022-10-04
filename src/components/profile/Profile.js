import React, { Profiler, useState } from "react";
import ProfileHeader from "./ProfileHeader";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import hotel from "../../images/hotel.jpg";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));
const data = [
  {
    date: new Date().toLocaleString(),
    name: "Hashim",
  },
  {
    date: new Date().toLocaleString(),
    name: "Ahmer",
  },
  {
    date: new Date().toLocaleString(),
    name: "Umair",
  },
  {
    date: new Date().toLocaleString(),
    name: "Umer",
  },
  {
    date: new Date().toLocaleString(),
    name: "Ibrar",
  },
  {
    date: new Date().toLocaleString(),
    name: "Ahsan",
  },
  {
    date: new Date().toLocaleString(),
    name: "Fateh",
  },
  {
    date: new Date().toLocaleString(),
    name: "xeeshan",
  },
  {
    date: new Date().toLocaleString(),
    name: "Afal",
  },
  {
    date: new Date().toLocaleString(),
    name: "Asad",
  },
  {
    date: new Date().toLocaleString(),
    name: "Ahmed",
  },
  {
    date: new Date().toLocaleString(),
    name: "Abdullah",
  },
];
const Profile = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [aratysad, setaratysad] = React.useState([]);

  const handledata = (value) => {
    setaratysad(value);
  };

  console.log("searchValue", searchValue);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const searchedValuePassed = (value) => {
    setSearchValue(value);
  };
  console.log("value", searchValue);

  return (
    <div>
      Profile
      <ProfileHeader
        handledata={handledata}
        aratysad={aratysad}
        searchedValuePassed={searchedValuePassed}
        searchValue={searchValue}
      />
      <div className="posts">
        {data
          .filter((elem) => {
            if (
              elem.name.toLowerCase().includes(searchValue) ||
              elem.name.toUpperCase().includes(searchValue)
            ) {
              return elem;
            }
          })
          .map((item) => (
            <Card className="postCard">
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={item.name}
                // title="Shrimp and Chorizo Paella"
                // subheader="September 14, 2016"
                subheader={item.date}
              />
              <CardMedia component="img" image={hotel} alt="Paella dish" />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  This impressive paella is a perfect party dish and a fun meal
                  to cook together with your guests. Add 1 cup of frozen peas
                  along with the mussels, if you like.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon className="heart" />
                </IconButton>
                <IconButton aria-label="share" className="heart1">
                  <ShareIcon />
                </IconButton>
                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Method:</Typography>
                  <Typography paragraph>
                    Heat 1/2 cup of the broth in a pot until simmering, add
                    saffron and set aside for 10 minutes.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default Profile;
