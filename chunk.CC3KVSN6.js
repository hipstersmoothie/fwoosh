import {
  __toModule,
  require_jsx_runtime
} from "./chunk.NDPHL7RG.js";

// docs/snippets/install-snippet.mdx
var import_jsx_runtime = __toModule(require_jsx_runtime());
function MDXContent(_props) {
  const _components = Object.assign({
    pre: "pre",
    code: "code"
  }, _props.components), {wrapper: MDXLayout} = _components;
  const _content = import_jsx_runtime.jsx(import_jsx_runtime.Fragment, {
    children: import_jsx_runtime.jsxs(_components.pre, {
      children: [import_jsx_runtime.jsxs(_components.code, {
        className: "language-bash syntax-light",
        style: {
          background: "#fff"
        },
        children: [import_jsx_runtime.jsx("span", {
          style: {
            color: "#24292E"
          },
          children: "npm i --save-dev fwoosh"
        }), "\n", "\n", import_jsx_runtime.jsx("span", {
          style: {
            color: "#6A737D"
          },
          children: "# Or when using yarn"
        }), "\n", import_jsx_runtime.jsx("span", {
          style: {
            color: "#24292E"
          },
          children: "yarn add -D fwoosh"
        }), "\n"]
      }), import_jsx_runtime.jsxs(_components.code, {
        className: "language-bash syntax-light syntax-dark",
        style: {
          background: "#24292e"
        },
        children: [import_jsx_runtime.jsx("span", {
          style: {
            color: "#E1E4E8"
          },
          children: "npm i --save-dev fwoosh"
        }), "\n", "\n", import_jsx_runtime.jsx("span", {
          style: {
            color: "#6A737D"
          },
          children: "# Or when using yarn"
        }), "\n", import_jsx_runtime.jsx("span", {
          style: {
            color: "#E1E4E8"
          },
          children: "yarn add -D fwoosh"
        }), "\n"]
      })]
    })
  });
  return MDXLayout ? import_jsx_runtime.jsx(MDXLayout, Object.assign({}, _props, {
    children: _content
  })) : _content;
}
var install_snippet_default = MDXContent;

export {
  install_snippet_default
};
