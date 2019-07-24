const withLess = require("@zeit/next-less");
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");

// const lessToJS = require("less-vars-to-js");
// const fs = require("fs");
// const path = require("path");

// Where your antd-custom.less file lives
// const themeVariables = lessToJS(
//   fs.readFileSync(path.resolve(__dirname, './assets/antd-custom.less'), 'utf8')
// )

module.exports = withBundleAnalyzer(
    withLess({
        /* withLess config */
        cssModules: false,
        lessLoaderOptions: {
            javascriptEnabled: true,
            // modifyVars: themeVariables, // make your antd custom effective
        },

        /* withBundleAnalyzer config */
        analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
        analyzeBrowser: ["browser", "both"].includes(
            process.env.BUNDLE_ANALYZE
        ),
        bundleAnalyzerConfig: {
            server: {
                analyzerMode: "static",
                reportFilename: "../bundles/server.html",
            },
            browser: {
                analyzerMode: "static",
                reportFilename: "../bundles/client.html",
            },
        },
    })
);
