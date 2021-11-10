var Datastore = require('nedb')
  , db = new Datastore({ filename: './data.db', autoload: true });

const express = require('express')
const app = express()
const port = 394

app.use(express.json())
app.use(express.static('static'));

app.get('/iine', (req, res) => {
    db.find({}, function (err, docs) {
        if(err){
            res.send(400)
        }
        res.send(docs)
    });
})

app.post('/iine', (req, res) => {
  console.log(req.body)
  if(req.body.from !== undefined && req.body.to !== undefined) {
    db.insert([{
        "from" : req.body.from,
        "to" : req.body.to,
        "date" : new Date() 
    }], (err, newDocs) => {
        if(err){
            throw err;
        }
        console.log(newDocs);
    });
    res.send(202)
  } else {
      res.send(400)
  }
})

app.get('/leaderboard', (req, res) => {
    db.find({}, function (err, docs) {
        if(err){
            res.send(400)
        }
    
        const iinecounts = {}
        for (const iine of docs) {
            if(iinecounts[iine.to] == undefined){
                iinecounts[iine.to] = 1
            } else {
                iinecounts[iine.to]++
            }
    
        }

        res.send(iinecounts)
    
    });
})

app.listen(port, () => {
  console.log(`Thanks app listening at http://localhost:${port}`)
})