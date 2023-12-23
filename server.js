import express from "express"


const app = express()

app.get("/api", (request, response) => {
    response.send("<h1> load balancing server is started </h1>")
})


app.listen(3000, () => {
    console.log("server is connected on 3000 port")
})