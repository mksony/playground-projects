"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var _1 = require("./");
// tslint:disable
var addDefaultStyles = function () {
    return (_a = ["\n  html, body {\n    max-width: 100%;\n    overflow-x: hidden;\n  }\n  body {\n    /* system font https://medium.com/designing-medium/system-shock-6b1dc6d6596f */\n    font-family: \"Source Sans Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n    color: ", ";\n    overflow-y: scroll; /* has to be scroll, not auto */\n    -webkit-overflow-scrolling: touch;\n    min-height: 100vh;\n  }\n\n  li, p, a {\n    font-size: 1rem;\n    line-height: 1.4;\n    ", "\n    ", "\n  }\n  h1, .h1 {\n    font-size: 2em;\n    margin-bottom: .25em;\n    line-height: 1.2;\n    font-weight: bold;\n    ", "\n    ", "\n  }\n  h2, .h2 {\n    font-size: 1.8em;\n    margin-bottom: .25em;\n    line-height: 1.2;\n    ", "\n    ", "\n  }\n  h3, .h3 {\n    font-size: 1.6em;\n    margin-bottom: .25em;\n    line-height: 1.2;\n    ", "\n    ", "\n  }\n  h4, .h4 {\n    font-size: 1.4em;\n    margin-bottom: .25em;\n    line-height: 1.2;\n    ", "\n    ", "\n  }\n  h5, .h5 {\n    font-size: 1.2em;\n    margin-bottom: .25em;\n    line-height: 1.2;\n    ", "\n    ", "\n  }\n  h6, .h6 {\n    font-size: 1.2em;\n    margin-bottom: .25em;\n    line-height: 1.2;\n    ", "\n    ", "\n  }\n  img {\n    max-width: 100%;\n  }\n"], _a.raw = ["\n  html, body {\n    max-width: 100%;\n    overflow-x: hidden;\n  }\n  body {\n    /* system font https://medium.com/designing-medium/system-shock-6b1dc6d6596f */\n    font-family: \"Source Sans Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n    color: ", ";\n    overflow-y: scroll; /* has to be scroll, not auto */\n    -webkit-overflow-scrolling: touch;\n    min-height: 100vh;\n  }\n\n  li, p, a {\n    font-size: 1rem;\n    line-height: 1.4;\n    ",
        "\n    ",
        "\n  }\n  h1, .h1 {\n    font-size: 2em;\n    margin-bottom: .25em;\n    line-height: 1.2;\n    font-weight: bold;\n    ",
        "\n    ",
        "\n  }\n  h2, .h2 {\n    font-size: 1.8em;\n    margin-bottom: .25em;\n    line-height: 1.2;\n    ",
        "\n    ",
        "\n  }\n  h3, .h3 {\n    font-size: 1.6em;\n    margin-bottom: .25em;\n    line-height: 1.2;\n    ",
        "\n    ",
        "\n  }\n  h4, .h4 {\n    font-size: 1.4em;\n    margin-bottom: .25em;\n    line-height: 1.2;\n    ",
        "\n    ",
        "\n  }\n  h5, .h5 {\n    font-size: 1.2em;\n    margin-bottom: .25em;\n    line-height: 1.2;\n    ",
        "\n    ",
        "\n  }\n  h6, .h6 {\n    font-size: 1.2em;\n    margin-bottom: .25em;\n    line-height: 1.2;\n    ",
        "\n    ",
        "\n  }\n  img {\n    max-width: 100%;\n  }\n"], styled_components_1.injectGlobal(_a, _1.colors.grey.dark, (_b = ["\n        font-size: 1.1rem;\n        line-height: 1.5;\n      "], _b.raw = ["\n        font-size: 1.1rem;\n        line-height: 1.5;\n      "], _1.media.sm(_b)), (_c = ["\n        font-size: 1.2rem;\n        line-height: 1.5;\n      "], _c.raw = ["\n        font-size: 1.2rem;\n        line-height: 1.5;\n      "], _1.media.md(_c)), (_d = ["\n        font-size: 2.4em;\n      "], _d.raw = ["\n        font-size: 2.4em;\n      "], _1.media.sm(_d)), (_e = ["\n        font-size: 2.8em;\n      "], _e.raw = ["\n        font-size: 2.8em;\n      "], _1.media.md(_e)), (_f = ["\n        font-size: 2em;\n      "], _f.raw = ["\n        font-size: 2em;\n      "], _1.media.sm(_f)), (_g = ["\n        font-size: 2.2em;\n      "], _g.raw = ["\n        font-size: 2.2em;\n      "], _1.media.md(_g)), (_h = ["\n        font-size: 1.8em;\n      "], _h.raw = ["\n        font-size: 1.8em;\n      "], _1.media.sm(_h)), (_j = ["\n        font-size: 2em;\n      "], _j.raw = ["\n        font-size: 2em;\n      "], _1.media.md(_j)), (_k = ["\n        font-size: 1.6em;\n      "], _k.raw = ["\n        font-size: 1.6em;\n      "], _1.media.sm(_k)), (_l = ["\n        font-size: 1.8em;\n      "], _l.raw = ["\n        font-size: 1.8em;\n      "], _1.media.md(_l)), (_m = ["\n        font-size: 1.4em;\n      "], _m.raw = ["\n        font-size: 1.4em;\n      "], _1.media.sm(_m)), (_o = ["\n        font-size: 1.6em;\n      "], _o.raw = ["\n        font-size: 1.6em;\n      "], _1.media.md(_o)), (_p = ["\n        font-size: 1.4em;\n      "], _p.raw = ["\n        font-size: 1.4em;\n      "], _1.media.sm(_p)), (_q = ["\n        font-size: 1.6em;\n      "], _q.raw = ["\n        font-size: 1.6em;\n      "], _1.media.md(_q))));
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
};
exports.default = addDefaultStyles;
