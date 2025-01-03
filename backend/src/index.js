import express from "express";
const app = express();

app.use("/api/auth, authRoutes");
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
