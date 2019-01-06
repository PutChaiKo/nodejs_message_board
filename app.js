const Koa = require('koa');

const router = require('koa-router')();

const app = new Koa();

app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method}, ${ctx.request.url}...`);
  await next();
});

// add url-router
router.get('/hello/:name', async (ctx, next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>hello ${name}</h1>`
    await next();
})

router.get('/', async (ctx, next)=>{
    ctx.response.body = '<h1>Index</h1>'
})

app.use(router.routes());
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
