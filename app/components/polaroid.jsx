// Basic structure - positions TBD
// No "use client" needed - pure display component
export default function PolaroidGallery() {
  const polaroids = [
    { id: 1,
      frame: "/blank-polaroid.svg",
      image: "/gray-frame.svg",
      caption: "Caption for Photo 1",
      watermark: "UofTHacks 13",
      alt: "Photo 1",
      rotation: 0,
      position: { top: 0, left: 0, zIndex: 4 },
    },
    { id: 2,
      frame: "/blank-polaroid.svg",
      image: "/gray-frame.svg",
      caption: "Caption for Photo 2",
      watermark: "UofTHacks 13",
      alt: "Photo 2",
      rotation: -10,
      position: { top: 20, left: -10, zIndex: 3 },
    },
    { id: 3,
      frame: "/blank-polaroid.svg",
      image: "/gray-frame.svg",
      caption: "Caption for Photo 3",
      watermark: "UofTHacks 13",
      alt: "Photo 3",
      rotation: 10,
      position: { top: -5, left: -5, zIndex: 2 },
    },
    { id: 4,
      frame: "/blank-polaroid.svg",
      image: "/gray-frame.svg",
      caption: "Caption for Photo 4",
      watermark: "UofTHacks 13",
      alt: "Photo 4",
      rotation: -2,
      position: { top: 15, left: -10, zIndex: 1 }
    }
  ];

  return (
    <div className="polaroid-gallery">
      {polaroids.map((polaroid) => (
        <div
          key={polaroid.id}
          className={`polaroid polaroid-${polaroid.id}`}
          style={{
            transform: `rotate(${polaroid.rotation}deg)`,
            top: `${polaroid.position.top}px`,
            left: `${polaroid.position.left}px`,
            zIndex: polaroid.position.zIndex
          }}
        >
          {/* white polaroid frame */}
          <img src={polaroid.frame} alt="polaroid frame" className="polaroid-frame" />
          {/* container for both texts and photo */}
          <div className="photo-container">
            <img src={polaroid.image} alt={polaroid.alt} className="photo" />
            {/* container for texts */}
            <div className="text-container">
              <div className="caption">{polaroid.caption}</div>
              <div className="watermark">{polaroid.watermark}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}