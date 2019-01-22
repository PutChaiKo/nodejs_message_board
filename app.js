const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const controller = require('./controller');

const app = new Koa();

// 打印请求的url
app.use(async (ctx, next) => {
    console.log('请求传入的链接是：\033[35m' + ctx.request.method + '===>' + ctx.request.url + '\033[0m');
    await next();
})
app.use(bodyParser());
app.use(controller());
app.listen(3200);
console.log('打开 \033[35;1m http://localhost:3200/ \033[0m');

