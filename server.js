var express = require('express')
var app = express()
var port = process.env.PORT;
var ip = process.env.IP;

var months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December']
  
app.use('/', express.static('public'));

app.get('/:dateIn', function(req, res){
  var dateIn = req.params.dateIn
  if (isNaN(parseInt(dateIn))){
    var d = new Date(dateIn)
  } else {
    var d = new Date(parseInt(dateIn)*1000)
  }
  res.send({unix: d.getTime()/1000, natural: months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear()})
})

app.listen(port)