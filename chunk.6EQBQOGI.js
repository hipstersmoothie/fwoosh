import {
  help_snippet_default
} from "./chunk.RQMRPBDZ.js";
import {
  install_snippet_default
} from "./chunk.CC3KVSN6.js";
import {
  __toModule,
  components,
  require_react
} from "./chunk.NDPHL7RG.js";

// docs/index.tsx
var React = __toModule(require_react());
var description = "A lightening quick MDX static website generator";
function Home() {
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col items-center justify-center h-96",
    style: {background: "conic-gradient(at top right, #9CA3AF, white)"}
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-8xl text-gray-800 font-extralight mb-6"
  }, "fwoosh"), /* @__PURE__ */ React.createElement(components.p, {
    className: "text-xl text-gray-500 font-semibold"
  }, description)), /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto my-16 max-w-2xl px-8"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-3xl text-center mb-10"
  }, "A \u{1F480} simple static website generator"), /* @__PURE__ */ React.createElement("ul", {
    className: "text-lg space-y-4"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "flex space-x-2 items-start"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-2xl"
  }, "\u26A1\uFE0F"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-0.5"
  }, "Lightening quick builds powered by", " ", /* @__PURE__ */ React.createElement(components.a, {
    href: "https://esbuild.github.io/"
  }, "esbuild"))), /* @__PURE__ */ React.createElement("li", {
    className: "flex space-x-2 items-start"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-2xl"
  }, "\u{1F5C4}"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-0.5"
  }, "File System Based Routing: New pages are as easy as adding a file")), /* @__PURE__ */ React.createElement("li", {
    className: "flex space-x-2 items-start"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-2xl"
  }, "\u{1F4DD}"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-0.5"
  }, "Pages can be authored in modern JavaScript,", " ", /* @__PURE__ */ React.createElement(components.a, {
    href: "https://www.typescriptlang.org/"
  }, "TypeScript"), ", or ", /* @__PURE__ */ React.createElement(components.a, {
    href: "https://mdxjs.com/"
  }, "MDX"))), /* @__PURE__ */ React.createElement("li", {
    className: "flex space-x-2 items-start"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-2xl"
  }, "\u{1F381}"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-0.5"
  }, "Build wrappers for you pages using", " ", /* @__PURE__ */ React.createElement("span", {
    className: "font-semibold"
  }, "Layouts"))), /* @__PURE__ */ React.createElement("li", {
    className: "flex space-x-2 items-start"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-2xl"
  }, "\u{1F50C}"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-0.5"
  }, "Use plugins to build upon fwoosh, add your own assets, layouts, and more")))), /* @__PURE__ */ React.createElement("div", {
    className: "bg-gray-200 rounded-xl w-20 h-2 mx-auto my-20"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto my-16 max-w-2xl px-8"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-4xl mb-6"
  }, "Getting Started"), /* @__PURE__ */ React.createElement(components.p, null, "First you need to install fwoosh."), /* @__PURE__ */ React.createElement(install_snippet_default, {
    components
  }), /* @__PURE__ */ React.createElement(components.p, null, "Once installed you need to define the place where you are going to store your pages. The default is the ", /* @__PURE__ */ React.createElement(components.code, null, "docs/"), " ", "folder, but this can be customized using the", " ", /* @__PURE__ */ React.createElement(components.code, null, "dir"), " option."), /* @__PURE__ */ React.createElement(components.h3, {
    className: "mt-10"
  }, "Usage"), /* @__PURE__ */ React.createElement(components.p, null, "The fwoosh cli comes with a few easy to use commands:"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("span", {
    className: "text-xl text-blue-500 font-semibold"
  }, "clean"), /* @__PURE__ */ React.createElement("span", null, ": Delete all of fwoosh's build and output files")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("span", {
    className: "text-xl text-blue-500 font-semibold"
  }, "build"), /* @__PURE__ */ React.createElement("span", null, ": Build your static website")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("span", {
    className: "text-xl text-blue-500 font-semibold"
  }, "dev"), /* @__PURE__ */ React.createElement("span", null, ": Start the fwoosh development server"))), /* @__PURE__ */ React.createElement(components.p, null, "To get more information about each command use the", " ", /* @__PURE__ */ React.createElement(components.code, null, "--help"), " flag."), /* @__PURE__ */ React.createElement(help_snippet_default, {
    components
  }), /* @__PURE__ */ React.createElement(components.h3, {
    className: "mt-10"
  }, "Deploying"), /* @__PURE__ */ React.createElement(components.p, null, "To build your website for deploying use", " ", /* @__PURE__ */ React.createElement(components.code, null, "fwoosh build"), ". This creates a set of simple HTML and JS files that represent your static website. All you need to do is upload it to a server somewhere to be hosted. This can be a GitHub pages website, vercel, netlify, an s3 bucket, really anywhere you want \u{1F389}")));
}

export {
  description,
  Home
};
