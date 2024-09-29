export const trending = (req, res) => res.render("home", { pageTitle: "HOME" });
export const see = (req, res) => res.render("watch", { pageTitle: "Watch" });
export const edit = (req, res) => res.render("edit", { pageTitle: "Edit" });
export const search = (req, res) => res.send("Search");
export const deleteVideo = (req, res) => res.send("Delete");
export const upload = (req, res) => res.send("Upload");
