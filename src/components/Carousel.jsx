import React, { useEffect, useState } from "react";

const images = [
  "https://source.unsplash.com/random/500x300/?burger",
  "https://source.unsplash.com/random/500x300/?juice",
  "https://source.unsplash.com/random/500x300/?pizza",
];

export default function Carousel() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      await Promise.all(
        images.map((image) =>
          new Promise((resolve, reject) => {
            const img = new Image();
            img.src = image;
            img.onload = resolve;
            img.onerror = reject;
          })
        )
      );
      setLoaded(true);
    };
    loadImages();
  }, []);

  if (!loaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{ objectFit: "contain !important" }}
      >
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{ zIndex: "10" }}>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success text-white bg-success"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
          <div className="carousel-item active">
            <img
              src={images[0]}
              className="d-block w-100"
              alt="Carousel Img"
              style={{ filter: "brightness(30%)" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={images[1]}
              className="d-block w-100"
              alt="Carousel Img"
              style={{ filter: "brightness(30%)" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={images[2]}
              className="d-block w-100"
              alt="Carousel Img"
              style={{ filter: "brightness(30%)" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
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
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
