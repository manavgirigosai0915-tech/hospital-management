import React, { useState } from "react";
import AdminLayout from "../components/Layout/AdminLayout";
import "./Gallery.css";

const Gallery = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      title: "Hospital Building",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0?w=600",
    },
    {
      id: 2,
      title: "Operation Theatre",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=600",
    },
    {
      id: 3,
      title: "ICU Ward",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600",
    },
  ]);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const addImage = (e) => {
    e.preventDefault();

    if (!title || !image) {
      alert("Please fill all fields");
      return;
    }

    const newImage = {
      id: Date.now(),
      title,
      image,
    };

    setImages([...images, newImage]);

    setTitle("");
    setImage("");
  };

  const deleteImage = (id) => {
    setImages(images.filter((img) => img.id !== id));
  };

  return (
    <AdminLayout>
      <div className="gallery-page">

        <h2>🖼 Gallery Management</h2>

        <form className="gallery-form" onSubmit={addImage}>

          <input
            type="text"
            placeholder="Image Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <button type="submit">
            Add Image
          </button>

        </form>

        <div className="gallery-grid">

          {images.map((item) => (
            <div className="gallery-card" key={item.id}>

              <img src={item.image} alt={item.title} />

              <h3>{item.title}</h3>

              <button
                onClick={() => deleteImage(item.id)}
              >
                Delete
              </button>

            </div>
          ))}

        </div>

      </div>
    </AdminLayout>
  );
};

export default Gallery;