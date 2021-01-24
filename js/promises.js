// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (true) {
//       resolve({ username: "jasspn" });
//     } else {
//       reject(new Error("Something Went Wrong"));
//     }
//   }, 2000);
// });

// promise
//   .then((user) => {
//     console.log(user.username);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

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

const user = loginUser("jasspn2014", "12345")
  .then((user) => {
    console.log(user.username);
    return fetchUserVideos(user.username);
  })
  .then((videos) => {
    console.log(videos);
    return fetchVideoDetails(videos[0]);
  })
  .then((about) => console.log(about))
  .catch((err) => console.log(err));

console.log(user);
  /* 
// If want to start all promise methods at the same time then use promise.all();

const yt = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Getting Data from Youtube");
    resolve((videos = [1, 2, 3, 4, 5, 6, 8, 7, 89]));
  }, 2000);
});

const fb = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Getting Data from Facebook");
    resolve({ username: "jasspn", post: "Hi Everyone" });
  }, 3500);
});

Promise.all([yt, fb]).then((results) => console.log(results));
*/
