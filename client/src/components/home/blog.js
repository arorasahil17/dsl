import "./style.css";
const Blog = () => {
  return (
    <>
      <div className="blogs container-fluid">
        <div className="container">
          <h5 className="text-center blog-h">Article</h5>
          <h3 className="text-center fw-bold main-h">Latest Blog Posts</h3>
          <div className="d-flex justify-content-center">
            <div className="em-bar-main float-start">
              <div className="em-bar" />
            </div>
          </div>
          <p className="text-center global-text" style={{ fontSize: 16 }}>
            Phasellus vitae velit sit amet diam semper commodo quis quis libero.
            Morbi consequat arcu augue, molestie faucibus.
          </p>
          <div className="row justify-content-center mt-5 gap-5">
            <div className="col-md-3 blog-col">
              <img src="images/blog-t1.jpg" className="img-fluid" alt="blog" />
              <div className="blog-content">
                <div className="blog-subtitle">
                  <a href=".">Cyber</a>
                  <span>January 22, 2022</span>
                </div>
                <h2 className="blog-title">
                  Tiktok Illegally collecting data sharing
                </h2>
                <p className="global-text" style={{ fontSize: 14 }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi unde saepe ex facere modi soluta est? Alias eius
                  praesentium
                </p>
                <a href="." className="blog-btn">
                  read more <i className="fa fa-angle-right" />
                </a>
              </div>
            </div>
            <div className="col-md-3 blog-col">
              <img src="images/blog-t2.jpg" className="img-fluid" alt="blog" />
              <div className="blog-content">
                <div className="blog-subtitle">
                  <a href=".">Cyber</a>
                  <span>January 22, 2022</span>
                </div>
                <h2 className="blog-title">
                  Convincing reasons you need to learn
                </h2>
                <p className="global-text" style={{ fontSize: 14 }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi unde saepe ex facere modi soluta est? Alias eius
                  praesentium
                </p>
                <a href="." className="blog-btn">
                  read more <i className="fa fa-angle-right" />
                </a>
              </div>
            </div>
            <div className="col-md-3 blog-col">
              <img src="images/blog-t3.jpg" className="img-fluid" alt="blog" />
              <div className="blog-content">
                <div className="blog-subtitle">
                  <a href=".">Cyber</a>
                  <span>January 22, 2022</span>
                </div>
                <h2 className="blog-title">
                  The five devices you need to work anytime
                </h2>
                <p className="global-text" style={{ fontSize: 14 }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Commodi unde saepe ex facere modi soluta est? Alias eius
                  praesentium
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
