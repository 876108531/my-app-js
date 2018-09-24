var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// // 导入http模块:
// var http = require('http');

// // 创建http server，并传入回调函数:
// var server = http.createServer(function (request, response) {
//     // 回调函数接收request和response对象,
//     // 将HTTP响应200写入response, 同时设置Content-Type: text/html:
//     response.writeHead(200, {'Content-Type': 'text/html'});
//     // 将HTTP响应的HTML内容写入response:
//     response.end('<h1>Hell world!</h1>');
// });

// gulp.task('default', function() {

// // 让服务器监听8080端口:
// server.listen(3000);

// console.log('Server is running at http://127.0.0.1:3000/');
// })

gulp.task('server', function() {
  browserSync({
    server: {
      baseDir: './app'
    }
  });

  gulp.watch(['*.html', 'css/*.css', 'js/*.js'], {cwd: 'app'}, reload);
})

gulp.task('tserver', function() {
  browserSync({
    server: {
      baseDir: 'test'
    }
  });

  gulp.watch(['*.html', 'css/**/*.css', 'js/**/*.js'], {cwd: 'test'}, reload);
})