const express = require('express')
const app = express()

let port = 2000;

const urlSet= [
{id:1, url: "www.google.co.uk"},
{id:2, url: "www.yahoo.co.uk"},
{id:3, url: "www.facebook.co.uk"},
{id:4, url: "www.twitter.co.uk"},
{id:5, url: "www.instagram.co.uk"},
{id:6, url: "www.apple.co.uk"},
{id:7, url: "www.virgin.co.uk"},
{id:8, url: "www.britishairways.co.uk"},
{id:9, url: "www.bbc.co.uk"},
{id:10, url: "www.sky.co.uk"}
]



app.get('/results', (req, res) => res.send(urlSet));



function getRandomUrl(url) {
    
    let randomUrl = urlSet[Math.floor(Math.random() * urlSet.length)].url;
    return randomUrl;
        
}

//Returns only one random url
app.get('/results/final', (req, res) => res.send(getRandomUrl(urlSet)));


// how to use the data response that appears in the endpoint ?
// I guess it can be done by using fetch but still dont see how to implement it...
// Is there any other way of implementing this using the routes above?

    



app.listen(port, () => {
    console.log(`Listening from port ${port}`)
})    


