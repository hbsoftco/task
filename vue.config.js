module.exports = {
    lintOnSave: false,
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/sass/_style.scss";`
            }
        }
    }
}