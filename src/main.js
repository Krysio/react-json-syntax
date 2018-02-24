/*****[ UMD ]*****/
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["react"], factory);
    } else if (typeof exports === "object") {
        module.exports = factory(require("react"));
    } else {
        root.reactParse = factory(root.React);
    }
}(typeof this == 'undefined' ? window : this, function (React) {
/*****[ UMD BODY ]*****/
    function parse (jsonElement) {
        // Vars

        let tag = 'div';
        let attributes = {};
        let children = [];

        // Aliasses

        let isArray = Array.isArray;

        // Body

        if (typeof jsonElement === 'undefined') {
            return null;
        }

        if (jsonElement === null) {
            return null;
        }

        if (!isArray(jsonElement)) {
            return jsonElement;
        }

        for (let i = 0, l = jsonElement.length; i < l; i++) {
            let item = jsonElement[ i ];

            if (typeof item === 'undefined') continue;
            if (typeof item === null) continue;

            if (typeof item === 'string') {
                tag = item;
                continue;
            }

            if (typeof item === 'function') {
                tag = item;
                continue;
            }

            if (isArray(item)) {
                for (let i = 0, l = item.length; i < l; i++) {
                    let child = item[ i ];

                    child = parse(child);

                    if (child !== null) {
                        children.push(child);
                    }
                }
            }

            if (typeof item === 'object') {
                for (let attribute in item) {
                    let value = item[ attribute ];

                    attributes[ attribute ] = value;
                }
            }
        }

        // Return

        return React.createElement.apply(
            React,
            [
                tag,
                attributes,
            ].concat(children)
        );
    }

    React.parse = React.parse || parse;

    return parse;
/*****[ UMD BODY END ]*****/
}));
/*****[ UMD END ]*****/
