const app = require('express')();

function sleep(ms) {
  return new Promise((res, rej) => {
    setTimeout(() => {res(true)}, ms);
  })
}

app.use(require('cors')());

app.get('/', async function(req, res) {
  await sleep(5000);
  res.json({'hello' : 'world'});  
});

require('http').createServer(app).listen(7777, () => {
  console.log('listen server');
});