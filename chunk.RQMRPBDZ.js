import {
  __toModule,
  require_jsx_runtime
} from "./chunk.NDPHL7RG.js";

// docs/snippets/help-snippet.mdx
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
          children: "fwoosh --help"
        }), "\n", "\n", import_jsx_runtime.jsx("span", {
          style: {
            color: "#6A737D"
          },
          children: "# Or get help for a specific command"
        }), "\n", import_jsx_runtime.jsx("span", {
          style: {
            color: "#24292E"
          },
          children: "fwoosh build --help"
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
          children: "fwoosh --help"
        }), "\n", "\n", import_jsx_runtime.jsx("span", {
          style: {
            color: "#6A737D"
          },
          children: "# Or get help for a specific command"
        }), "\n", import_jsx_runtime.jsx("span", {
          style: {
            color: "#E1E4E8"
          },
          children: "fwoosh build --help"
        }), "\n"]
      })]
    })
  });
  return MDXLayout ? import_jsx_runtime.jsx(MDXLayout, Object.assign({}, _props, {
    children: _content
  })) : _content;
}
var help_snippet_default = MDXContent;

export {
  help_snippet_default
};
