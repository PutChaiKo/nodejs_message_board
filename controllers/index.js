var fn_index = async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
    <form action="/sigin" method="post">
    <p>Name: <input name="name" value="koa" /></p>
    <p>password: <input name="password" type="password" /></p>
    <p><input type="submit" value="Submit" /></p>
    </form>
    `;
}

var fn_sigin = async (ctx, next) => {
    var name = ctx.request.body.name || '';
    var password = ctx.request.body.password || '';
    console.log(`name: ${name}, pw: ${password}`);
    if (name === 'koa' && password === '123456') {
      ctx.response.body = `<h1>welcome ${name}</h1>`;
    } else {
      ctx.response.body = `<h1>Try again</h1>`;
    }
}

module.exports = {
    'GET /' :fn_index,
    'POST /sigin': fn_sigin
}