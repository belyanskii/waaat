module.exports = function(config) {
    config.mode("development", function() {

    });
    config.mode("production", function() {

    });

    config.node("bundles/index", function(nodeConfig) {
        nodeConfig.addTechs([
            [ require("enb/techs/levels"), { levels: getLevels() } ],
            [ require("enb/techs/file-provider"), { target: "?.bemjson.js" } ],
            require("enb/techs/bemdecl-from-bemjson"),
            require("enb/techs/deps-old"),
            require("enb/techs/files"),
            require("enb-xjst/techs/bemhtml"),
            require("enb-xjst/techs/html-from-bemjson")
        ]);
        nodeConfig.addTargets(["?.html"]);

        function getLevels() {
            return [
                {"path":"libs/bem-bl/blocks-common","check":true},
                {"path":"blocks","check":true}
            ].map(function(l) { return config.resolvePath(l); });
        }
    });
}