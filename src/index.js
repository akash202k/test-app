import express from "express"
import userRoute from "./routes/index.js"

const app = express();


app.use("/user", userRoute)

app.listen(8080, () => {
    console.log("Server Listening on port 8080");
})