import React from "react";

const CommentForm = () => {
  return (
    <>
      <div style={{padding:"30px 25px",backgroundColor:"#f0fff0",borderRadius:"8px"}} className="postbox__comment-form">
        <h3 className="postbox__comment-form-title">Leave a Quation</h3>
        <p style={{marginBottom:"15px"}}>
          Your email address will not be published. Required fields are marked *
        </p>
        <form onSubmit={e => e.preventDefault()}>
          <div className="row">
            <div className="col-xxl-12 col-xl-12 col-lg-12">
              <div className="postbox__comment-input">
                <input type="text" placeholder="Enter your Name" />
              </div>
            </div>
            <div className="col-xxl-12 col-xl-12 col-lg-12">
              <div className="postbox__comment-input">
                <input type="email" placeholder="Enter your email" />
              </div>
            </div>
            <div className="col-xxl-12 col-xl-6 col-lg-12">
              <div className="postbox__comment-input">
                <input type="text" placeholder="Enter your number" />
              </div>
            </div>
            <div className="col-xxl-12 col-xl-12 col-lg-12">
              <div className="postbox__comment-input">
                <input type="text" placeholder="Enter your website" />
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="postbox__comment-input">
                <textarea placeholder="Type your comment"></textarea>
              </div>
            </div>
            <div className="col-xxl-12">
              <div className="postbox__comment-btn">
                <button type="submit" className="tp-btn">
                Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CommentForm;
