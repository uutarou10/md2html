// MarkDownファイルが入っているディレクトリを指定
let src = "./src/"

var gulp = require("gulp")
var markdown = require("gulp-markdown")
var layout = require("gulp-layout")
var minify = require("gulp-minify-html")

gulp.task("default",["markdown","copyContents"])

gulp.task("markdown",function(){
    return gulp.src(src + "/*.md")
        .pipe(markdown())
        .pipe(layout({
            layout:"./templete/templete.jade"
        }))
        .pipe(minify())
        .pipe(gulp.dest("./dest"))
})

gulp.task("copyContents",function(){
    return gulp.src([
        src + "/**/*",
        "!" + src + "/**/*.md"],{base:"./src/"})
        .pipe(gulp.dest("./dest"))
})

