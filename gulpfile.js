const gulp= require("gulp");
const cleanCSS= require("gulp-clean-css");
const uglify= require("gulp-uglify");

gulp.task("minify-css", function(){
    return gulp.src("css/*.css")
    .pipe(cleanCSS())
    .pipe(gulp.dest("css"));
});

gulp.task("minify-js", function(){
    return gulp.src("js/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("js"));
});

//Default task
gulp.task("default", gulp.parallel("minify-css","minify-js"));