import { LinksFunction } from "@remix-run/node";
import { useEffect, useRef } from "react";
import Logo from "~/shared/components/Logo";
import styles from "~/styles/home.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
};

export default function Index() {
  const checkRef = useRef<any>();
  const imageRef = useRef<any>();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const options = {
        root: null,
        rootMargin: "0px",
      };
      const observer = new IntersectionObserver(function (entries, observer) {
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

      const pEls = document.querySelectorAll("p");
      pEls.forEach((el) => observer.observe(el));
      const buttonEls = document.querySelectorAll("button");
      buttonEls.forEach((el) => observer.observe(el));
    }
  }, []);

  return (
    <div className="container">
      {/* <div className="wrapper">Home</div> */}
      <div className="green"></div>
      <div className="check" ref={checkRef}>
        <Logo />
      </div>
      <div className="image-wrapper">
        <div className="image" ref={imageRef}></div>
      </div>
      <p className="largeText">The latest Nike sports products</p>
      <p className="smallText">
        Discover new sports clothing, the latest sneakers releases, daily
        training tips, fashion advise, and athlete inspiration on the Nike app
      </p>
      <button className="letsStart">Let's Start</button>
    </div>
  );
}
//#8FB13A
