var tsImportPluginFactory = require('ts-import-plugin');
var getLoader = require("react-app-rewired").getLoader;
var rewireLess = require('react-app-rewire-less');
module.exports = function override(config, env) {
    var tsLoader = getLoader(config.module.rules, function (rule) {
        return rule.loader &&
            typeof rule.loader === 'string' &&
            rule.loader.includes('ts-loader');
    });
    tsLoader.options = {
        getCustomTransformers: function () { return ({
            before: [tsImportPluginFactory({
                    libraryName: 'antd',
                    libraryDirectory: 'es',
                    style: true,
                })]
        }); }
    };
    config = rewireLess.withLoaderOptions({
        modifyVars: {
        // "@primary-color": "#1DA57A"      
        },
    })(config, env);
    return config;
};
//# sourceMappingURL=config-overrides.js.map