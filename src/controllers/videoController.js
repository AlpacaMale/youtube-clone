const fakeUser = {
  username: "Nicolas",
  loggedIn: false,
};

let videos = [
  { title: "Marvel", rating: 5, comments: 2, createdAt: "2 minutes ago", views: 1, id: 0 },
  { title: "Second", rating: 5, comments: 2, createdAt: "2 minutes ago", views: 59, id: 1 },
  { title: "Third", rating: 5, comments: 2, createdAt: "2 minutes ago", views: 59, id: 2 },
];

export const trending = (req, res) => {
  res.render("home", { pageTitle: "HOME", fakeUser, videos });
};
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id];
  res.render("watch", { pageTitle: `Watching ${video.title}`, video });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id];
  res.render("edit", { pageTitle: `Editing: ${video.title}`, video });
};
export const postEdit = (req, res) => {};
