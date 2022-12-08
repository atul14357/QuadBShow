import React, { useState, useEffect } from "react";
import { useNavigate,Link  } from "react-router-dom"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "./App.css";
import axios from "axios";


const gitHubUrl = "https://api.tvmaze.com/search/shows?q=all";

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getGitHubUserWithFetch();
  }, []);

  const getGitHubUserWithFetch = async () => {
    const response = await fetch(gitHubUrl);
    const jsonData = await response.json();
    setUserData(jsonData);
  };

  const getGiHubUserWithAxios = async () => {
    const response = await axios.get(gitHubUrl);
    setUserData(response.data);
  };

  // let navigate = useNavigate(); 
  // const ShowPath = () =>{ 
  //   let path = `/${userData.show.id}`; 
  //   navigate(path);


  return (
    <div className="App">
      <header className="App-header">
        <h2>GitHub User Data</h2>
      </header>
      {userData.map((item) => (
        <div className="card-container">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={item.show.image.original}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.show.name}
                </Typography>
                <Typography component="legend">Runtime: {item.show.runtime}</Typography>
                <Typography component="legend">Released: {item.show.premiered}</Typography>
                <Typography>
                  Rating <Rating name="read-only" value={item.show.rating.average / 2.0} readOnly />
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button variant="contained" size="small" color="success" className="card-btn">
                Show Details
              </Button>
            </CardActions>
          </Card>
        </div>
      ))
      }
    </div>
  );
}


export default App;