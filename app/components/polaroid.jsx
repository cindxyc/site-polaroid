"use client";
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState } from 'react';

export default function PolaroidGallery() {
  const polaroids = [
    { id: 1,
      image: "/gray-frame.svg",
      caption: "Caption for Photo 1",
      rotation: 0,
      position: { top: 0, left: 0, zIndex: 4 },
    },
    { id: 2,
      image: "/gray-frame.svg",
      caption: "Caption for Photo 2",
      rotation: -10,
      position: { top: 20, left: -10, zIndex: 3 },
    },
    { id: 3,
      image: "/gray-frame.svg",
      caption: "Caption for Photo 3",
      rotation: 10,
      position: { top: -5, left: -5, zIndex: 2 },
    },
    { id: 4,
      image: "/gray-frame.svg",
      caption: "Caption for Photo 4",
      rotation: -2,
      position: { top: 15, left: -10, zIndex: 1 }
    }
  ];

  return (
    <div className="polaroid-gallery">
      {polaroids.map((polaroid) => (
        <motion.div
          key={polaroid.id}
          className={`polaroid polaroid-${polaroid.id}`}
          style={{
            transform: `rotate(${polaroid.rotation}deg)`,
            rotate: useTransform(useMotionValue(polaroid.rotation), (r) => `${r}deg`),
            top: `${polaroid.position.top}px`,
            left: `${polaroid.position.left}px`,
            zIndex: polaroid.position.zIndex
          }}
          drag
          dragSnapToOrigin={true}
          dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
          dragElastic={0.3}
          whileTap={{ cursor: "grabbing" }}
          >
          {/* white polaroid frame */}
          <img src={"/blank-polaroid.svg"} alt="polaroid frame" className="polaroid-frame" draggable="false" />
          {/* container for both texts and photo */}
          <div className="photo-container">
            <img src={"/gray-frame.svg"} alt="polaroid photo" className="photo" draggable="false" />
            {/* container for texts */}
            <div className="text-container">
              <div className="caption">{polaroid.caption}</div>
              <div className="watermark">UofTHacks 13</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}