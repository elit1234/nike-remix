import {
  React,
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-IYRIQ6PI.js";

// browser-route-module:C:\Users\eli\Documents\Javascript\remixjs\my-remix-app\app\routes\index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
var import_react = __toESM(require_react());

// app/shared/components/Logo.tsx
init_react();
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
var home_default = "/build/_assets/home-FVE2HIQ3.css";

// app/routes/index.tsx
var links = () => {
  return [
    {
      rel: "stylesheet",
      href: home_default
    }
  ];
};
function Index() {
  const checkRef = (0, import_react.useRef)();
  const imageRef = (0, import_react.useRef)();
  (0, import_react.useEffect)(() => {
    if (typeof window !== "undefined") {
      const options = {
        root: null,
        rootMargin: "0px"
      };
      const observer = new IntersectionObserver(function(entries, observer2) {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          } else {
            entry.target.classList.add("active");
          }
        });
      }, options);
      if (checkRef.current) {
        observer.observe(checkRef.current);
      }
      if (imageRef.current) {
        observer.observe(imageRef.current);
      }
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
  })), /* @__PURE__ */ React.createElement("div", {
    className: "largeText"
  }, "The latest Nike sports products"), /* @__PURE__ */ React.createElement("div", {
    className: "smallText"
  }, "Discover new sports clothing, the latest sneakers releases, daily training tips, fashion advise, and athlete inspiration on the Nike app"));
}
export {
  Index as default,
  links
};
//# sourceMappingURL=/build/routes/index-IDAGRXEK.js.map
