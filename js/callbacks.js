function loginUser(email, password, onSuccess, onFailure) {
  setTimeout(() => {
    if (true) {
      onSuccess({ username: email });
    } else {
      onFailure("Something Went Wrong");
    }
  }, 2000);
}

function fetchUserVideos(email, callback) {
  setTimeout(() => {
    videos = ["video1", "video2", "video3"];
    callback(videos);
  }, 2000);
}

function fetchVideoDetails(video, callback) {
  setTimeout(() => {
    let aboutVideo = `${video} is about why people don't understand js`;
    callback(aboutVideo);
  }, 1000);
}

const user = loginUser(
  "jasmeet@gmail.com",
  "123456",
  (user) => {
    console.log(`Welcome, ${user.username}`);
    fetchUserVideos(user.username, (videos) => {
      console.log(videos);
      fetchVideoDetails(videos[0], (about) => {
        console.log(about);
      });
    });
  },
  (err) => {
    console.log(err);
  }
);
