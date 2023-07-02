import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      {" "}
      <Navbar />
      <div className="bg">
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item c-item active">
            <img
              src="https://images.unsplash.com/photo-1465929639680-64ee080eb3ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              className="d-block w-100 c-image"
              alt="Image"
            />
            <div className="carousel-caption ">
              <h5>"A room without books is like a body without a soul."</h5>
              <p>Marcus Tullius Cicero</p>
            </div>
          </div>
          <div className="carousel-item c-item">
            <img
              src="https://images.unsplash.com/photo-1588581939864-064d42ace7cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              className="d-block w-100 c-image"
              alt="Image"
            />
            <div className="carousel-caption ">
              <h5>
                "The only thing that you absolutely have to know is the location
                of the library."
              </h5>
              <p>Albert Einstein</p>
            </div>
          </div>
          <div className="carousel-item c-item">
            <img
              src="https://images.unsplash.com/photo-1549675584-91f19337af3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
              className="d-block w-100 c-image"
              alt="Image"
            />
            <div className="carousel-caption ">
              <h5>"Reading is to the mind what exercise is to the body."</h5>
              <p>Joseph Addison</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="library-paragraph">
        <div className="row gy-5">
          <div className="col-md-6 home-image">
            <img src="./images/Image-1.png" alt="Image" />
          </div>
          <div className="col-md-6">
            <p>
               <h2>Where Wisdom Thrives:</h2>
              Libraries play a crucial role in society as vital centers of
              knowledge, learning, and community engagement. They serve as
              repositories of human wisdom, preserving and organizing a wealth
              of information across various formats, from books and magazines to
              digital resources and multimedia materials. Libraries provide
              invaluable access to knowledge, enabling individuals to explore a
              vast array of topics, expand their horizons, and enhance their
              education.
            </p>
          </div>
          <hr className="horizontal-line" />
          <div className="col-md-6">
            <p>
            <h2>Empowering Minds:</h2>
              One of the key advantages of libraries is their ability to promote
              literacy and foster a love for reading. They serve as gateways to
              literature, offering a diverse range of books and materials for
              people of all ages and backgrounds. Libraries encourage reading as
              a lifelong habit, nurturing imagination, critical thinking, and
              creativity. Through their resources and programs, libraries
              support education, helping children develop strong literacy skills
              and supporting lifelong learning for adults.
            </p>
          </div>
          <div className="col-md-6 home-image">
            <img src="./images/Image-2.png" alt="Image" />
          </div>
        </div>
      </div>
      </div>

     <Footer /> 
    </>
  );
}
export default Home;
