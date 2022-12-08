import React, { useState, useEffect } from "react";
import Show from "./Show";
import axios from "axios";
import styles from "./showList.module.css";

const gitHubUrl = "https://api.tvmaze.com/search/shows?q=all";

const ShowList = () => {




    const [userData, setUserData] = useState([]);

    useEffect(() => {
      getGitHubUserWithFetch();
      // getGiHubUserWithAxios();
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
  
//   const [posts, setPosts] = useState("");

//   let config = { Authorization: "..........................." };
//   const url = "............................................";

//   useEffect(() => {
//     AllPosts();
//   }, []);

//   const AllPosts = () => {
//     axios
//       .get(`${url}`, { headers: config })

//       .then((response) => {
//         const allPosts = response.data.articles;
//         console.log(response);
//         setPosts(allPosts);
//       })
//       .catch((error) => console.error(`Error: ${error}`));
//   };

  return (
    <div>
      <Show className={styles.UserData} userData={userData} />
    </div>
  );
};

export default ShowList;
