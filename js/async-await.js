function loginUser(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve({ username: email });
      } else {
        reject("Something Went Wrong");
      }
    }, 2000);
  });
}

function fetchUserVideos(email) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      videos = ["video1", "video2", "video3"];
      resolve(videos);
    }, 5000);
  });
}

function fetchVideoDetails(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let aboutVideo = `${video} is about why people don't understand js`;
      resolve(aboutVideo);
    }, 2000);
  });
}

// async function displayUser() {
//     try{
//         const user = await loginUser("jasspn", 12345);
//         const videos = await fetchUserVideos(user.username);
//         const detail = await fetchVideoDetails(videos[0]);
//         console.log(detail);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// displayUser();
