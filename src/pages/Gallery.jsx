import React, { useState } from 'react';
import '../styles/Gallery.css';

// Import images
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import image4 from '../assets/images/image4.jpg';
import image5 from '../assets/images/image5.jpg';
import image6 from '../assets/images/image6.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Gallery images
  const images = [
    {
      id: 1,
      title: "Award Ceremony",
      description: "Receiving an academic achievement award at school",
      url: image1
    },
    {
      id: 2,
      title: "Gaming Moment",
      description: "Victory in a mobile game - showcasing my gaming hobby",
      url: image2
    },
    {
      id: 3,
      title: "My Pet",
      description: "My adorable white cat with heterochromia eyes",
      url: image3
    },
    {
      id: 4,
      title: "Virtual World",
      description: "A beautiful sunset scene from one of my favorite games",
      url: image4
    },
    {
      id: 5,
      title: "Mirror Selfie",
      description: "A casual day outfit - self-portrait",
      url: image5
    },
    {
      id: 6,
      title: "Night Scenery",
      description: "Beautiful evening lights reflecting on water",
      url: image6
    }
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="gallery-section section">
      <div className="container">
        <div className="content-wrapper">
          <div className="section-title">
            <h2>Photo Gallery</h2>
          </div>
          <div className="section-subtitle">
            <p>A collection of moments captured through my lens.</p>
          </div>

          <div className="gallery-grid">
            {images.map((image) => (
              <div 
                className="gallery-item" 
                key={image.id}
                onClick={() => openLightbox(image)}
              >
                <div className="gallery-image-container">
                  <img src={image.url} alt={image.title} className="gallery-image" />
                  <div className="image-overlay">
                    <h3>{image.title}</h3>
                    <p>{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedImage && (
          <div className="lightbox" onClick={closeLightbox}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={closeLightbox}>×</button>
              <img src={selectedImage.url} alt={selectedImage.title} className="lightbox-image" />
              <div className="lightbox-caption">
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}

        <div className="content-wrapper">
          <div className="gallery-info">
            <h3>About My Gallery</h3>
            <p>
              This gallery showcases a collection of images that represent my interests, experiences, and journey.
              From gaming achievements to special moments with my pet, these photos reflect different aspects of my life.
            </p>
            <p>
              As someone who enjoys gaming and capturing memorable moments, this collection gives you a glimpse
              into my world and the things that matter to me.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery; 