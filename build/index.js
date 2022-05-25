var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react");
var import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:C:\Users\eli\Documents\Javascript\remixjs\my-remix-app\app\root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/styles/global.css
var global_default = "/build/_assets/global-ZZT2GM56.css";

// route:C:\Users\eli\Documents\Javascript\remixjs\my-remix-app\app\root.tsx
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
var links = () => {
  return [
    {
      rel: "stylesheet",
      href: global_default
    }
  ];
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react2.Meta, null), /* @__PURE__ */ React.createElement(import_react2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react2.Outlet, null), /* @__PURE__ */ React.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react2.Scripts, null), /* @__PURE__ */ React.createElement(import_react2.LiveReload, null)));
}

// route:C:\Users\eli\Documents\Javascript\remixjs\my-remix-app\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links2
});
var import_react3 = require("react");

// app/shared/components/Logo.tsx
var Logo = () => {
  return /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "3.5rem",
    height: "3.5rem",
    fill: "#8FB13A"
  }, /* @__PURE__ */ React.createElement("path", {
    fill: "none",
    d: "M0 0h24v24H0z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
  }));
};
var Logo_default = Logo;

// app/styles/home.css
var home_default = "/build/_assets/home-X3JSMUOY.css";

// route:C:\Users\eli\Documents\Javascript\remixjs\my-remix-app\app\routes\index.tsx
var links2 = () => {
  return [
    {
      rel: "stylesheet",
      href: home_default
    }
  ];
};
function Index() {
  const checkRef = (0, import_react3.useRef)();
  const imageRef = (0, import_react3.useRef)();
  (0, import_react3.useEffect)(() => {
    if (typeof window !== "undefined") {
      const options = {
        root: null,
        rootMargin: "0px"
      };
      const observer = new IntersectionObserver(function(entries, observer2) {
        entries.forEach((entry2) => {
          if (!entry2.isIntersecting) {
            return;
          } else {
            entry2.target.classList.add("active");
          }
        });
      }, options);
      if (checkRef.current) {
        observer.observe(checkRef.current);
      }
      if (imageRef.current) {
        observer.observe(imageRef.current);
      }
      const pEls = document.querySelectorAll("p");
      pEls.forEach((el) => observer.observe(el));
      const buttonEls = document.querySelectorAll("button");
      buttonEls.forEach((el) => observer.observe(el));
    }
  }, []);
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "green"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "check",
    ref: checkRef
  }, /* @__PURE__ */ React.createElement(Logo_default, null)), /* @__PURE__ */ React.createElement("div", {
    className: "image-wrapper"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "image",
    ref: imageRef
  })), /* @__PURE__ */ React.createElement("p", {
    className: "largeText"
  }, "The latest Nike sports products"), /* @__PURE__ */ React.createElement("p", {
    className: "smallText"
  }, "Discover new sports clothing, the latest sneakers releases, daily training tips, fashion advise, and athlete inspiration on the Nike app"), /* @__PURE__ */ React.createElement("button", {
    className: "letsStart"
  }, "Let's Start"));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { "version": "77c4ad14", "entry": { "module": "/build/entry.client-UB4RODFY.js", "imports": ["/build/_shared/chunk-KTCDO3YM.js", "/build/_shared/chunk-IYRIQ6PI.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-TTSGOLHQ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-EUXYAOZ5.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-77C4AD14.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=index.js.map
