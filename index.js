const express = require('express')
const app = express()

app.set("view engine", "pug")
app.set("views", __dirname)

app.get('/', function(req, res) {
    res.render("template", {
        heading: "Welcome to Rafaela Oliveira's Page",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis eius reiciendis repellat fugiat corrupti vitae voluptas, illum, quisquam possimus itaque ea voluptatum cumque esse vel quia! Corporis aperiam nihil velit.",
        label: "Contact Rafaela",
        url: "/contact",
        title: "Rafaela Oliveira's Page"
    })
})

app.get('/contact', function(req, res) {
    res.render("template", {
        heading: "Contact Info",
        content: "Reach ou to Rafaela via email.",
        label: "rafaela@contact.com",
        url: "mailto:rafaela@contact.com",
        title: "Rafaela Oliveira's contact information"
    })
})

app.listen(3000)