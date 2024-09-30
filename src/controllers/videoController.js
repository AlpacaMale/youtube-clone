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
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id].title = title;
  return res.redirect(`/videos/${id}`);
};
export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};
export const postUpload = (req, res) => {
  const { title } = req.body;
  const newVideo = { title, rating: 0, comments: 0, createdAt: "2 minutes ago", views: 0, id: 3 };
  videos.push(newVideo);
  return res.redirect("/");
};
