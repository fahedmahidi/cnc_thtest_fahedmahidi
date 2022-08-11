import { useState, useEffect } from "react";
import BlogPost from "./components/BlogPost";
import "./style.scss";

function App() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    fetch("https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json")
      .then((response) => response.json())
      .then((res) => setBlogPosts(res));
  }, []);

  return (
    <>
      <main>
        <header id="navigation" className="p-navigation">
          <div className="p-navigation__row">
            <div className="p-navigation__row">
              <div className="p-navigation__banner">
                <div className="p-navigation__logo">
                  <a className="p-navigation__item" href="https://canonical.com">
                    <img
                      className="p-navigation__image"
                      src="https://assets.ubuntu.com/v1/2eec3fd9-logo.svg"
                      alt=""
                      width="115"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="row">
          <h1>Take Home Test - Fahed Mahidi</h1>
        </div>

        <div className="row u-equal-height u-clearfix">
          {blogPosts.map((item: any, index: any) => {
            return (
              <BlogPost
                title={item.title.rendered}
                image={item.featured_media}
                author={item._embedded.author[0].name}
                date={item.date}
                link={item.link}
                authLink={item._embedded.author[0].link}
                key={index}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}

export default App;
