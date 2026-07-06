import React from "react";
import "./Gallery.css";

const galleryImages = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1580281657527-47c1f89d95f3?w=600",
  },
];

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="container">

        <div className="gallery-title">
          <h5>OUR GALLERY</h5>
          <h2>Hospital Gallery</h2>
          <p>
            Take a look at our modern hospital facilities, advanced equipment,
            and healthcare environment.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((item) => (
            <div className="gallery-card" key={item.id}>
              <img src={item.image} alt="Hospital" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;