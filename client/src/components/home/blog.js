import "./style.css";
const Blog = () => {
  return (
    <>
      <div className="blogs container-fluid">
        <div className="container">
          <h5 className="text-center blog-h">News & Blog</h5>
          <h3 className="text-center fw-bold main-h">Our Latest Articles</h3>
          <div className="d-flex justify-content-center">
            <div className="em-bar-main float-start">
              <div className="em-bar" />
            </div>
          </div>
          {/* <p className="text-center global-text" style={{ fontSize: 16 }}>
            Phasellus vitae velit sit amet diam semper commodo quis quis libero.
            Morbi consequat arcu augue, molestie faucibus.
          </p> */}
          <div className="row justify-content-center mt-5 gap-5">
            <div className="col-md-3 blog-col">
              <img
                src="https://datashieldlabs.com/home/assets/images/ai.png"
                className="img-fluid"
                alt="blog"
              />
              <div className="blog-content">
                <div className="blog-subtitle">
                  <span>Jul 03, 2022</span>
                </div>
                <h2 className="blog-title">The Future of AI in cyber</h2>
                <p className="global-text" style={{ fontSize: 14 }}>
                  Machine learning algorithms have rapidly become the key to
                  advancing technologies far beyond their current capabilities.
                </p>
                <a href="." className="blog-btn">
                  read more <i className="fa fa-angle-right" />
                </a>
              </div>
            </div>
            <div className="col-md-3 blog-col">
              <img
                src="https://datashieldlabs.com/home/assets/images/shod.jpg"
                className="img-fluid"
                alt="blog"
              />
              <div className="blog-content">
                <div className="blog-subtitle">
                  <span>May 31, 2022</span>
                </div>
                <h2 className="blog-title">
                  Shodan: Still the Scariest Search Engine on the Internet?
                </h2>
                <p className="global-text" style={{ fontSize: 14 }}>
                  The article stated that these devices had almost no security;
                  the lack of security was due to two main reasons.
                </p>
                <a href="." className="blog-btn">
                  read more <i className="fa fa-angle-right" />
                </a>
              </div>
            </div>
            <div className="col-md-3 blog-col">
              <img
                src="https://datashieldlabs.com/home/assets/images/fsoci.jpg"
                className="img-fluid"
                alt="blog"
              />
              <div className="blog-content">
                <div className="blog-subtitle">
                  <span>January 22, 2022</span>
                </div>
                <h2 className="blog-title">
                  Penetration Testing Tool - FSOCIETY
                </h2>
                <p className="global-text" style={{ fontSize: 14 }}>
                  Fsociety is a free and open-source tool available on GitHub
                  which is used as an information-gathering tool.
                </p>
                <a href="." className="blog-btn">
                  read more <i className="fa fa-angle-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Blog;
