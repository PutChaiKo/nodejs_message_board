const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const fs = require('fs');

const app = new Koa();

function addControllers(router) {
  var files = fs.readdirSync(__dirname + '/controllers');
  var js_files = files.map((f)=> {
    return f.endsWith('.js');
  })
  console.log(files);
}
addControllers(router)
// app.use(async (ctx, next) => {
//   console.log(`Process ${ctx.request.method}, ${ctx.request.url}...`);
//   await next();
// });

// // add url-router
// router.get('/', async (ctx, next) => {
//   ctx.response.body = `<h1>Index</h1>
//     <form action="/sigin" method="post">
//     <p>Name: <input name="name" value="koa" /></p>
//     <p>password: <input name="password" type="password" /></p>
//     <p><input type="submit" value="Submit" /></p>
//     </form>
//     `;
// });

// router.post('/sigin', async (ctx, next) => {
//   var name = ctx.request.body.name || '';
//   var password = ctx.request.body.password || '';
//   console.log(`name: ${name}, pw: ${password}`);
//   if (name === 'koa' && password === '123456') {
//     ctx.response.body = `<h1>welcome ${name}</h1>`;
//   } else {
//     ctx.response.body = `<h1>Try again</h1>`;
//   }
// });

// app.use(bodyParser());
// app.use(router.routes());
// app.use(async (ctx, next)=>{
//     const start = new Date().getTime();
//     await next();
//     const ms = new Date().getTime() - start;
//     console.log(`Time: ${ms}ms`)
// })
// app.use(async (ctx, next) => {
//   await next();
//   ctx.response.type = 'text/html';
//   ctx.response.body = '<h1>Hello</h1>';
// });

app.listen(3200);
console.log('打开 http://localhost:3200/');

// const Koa = require('koa');
// const app = new Koa();
// app.use(async (ctx, next) => {
//     await next();
//     ctx.response.type = 'text/html';
//     ctx.response.body = '<h1>Hello, koa2!</h1>';
// });

// app.listen(3200);
// console.log('app started at port 3000...');
