"use client";
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState } from 'react';

export default function Gallery() {
  const [polaroids, setPolaroids] = useState([
    {
      id: 1,
      image: "/gray-frame.svg",
      caption: "Caption for Photo 1",
      rotation: 0,
      position: { top: 0, left: 0, zIndex: 4 },
    },
    {
      id: 2,
      image: "/gray-frame.svg",
      caption: "Caption for Photo 2",
      rotation: -10,
      position: { top: 20, left: -10, zIndex: 3 },
    },
    {
      id: 3,
      image: "/gray-frame.svg",
      caption: "Caption for Photo 3",
      rotation: 10,
      position: { top: -5, left: -5, zIndex: 2 },
    },
    {
      id: 4,
      image: "/gray-frame.svg",
      caption: "Caption for Photo 4",
      rotation: -2,
      position: { top: 15, left: -10, zIndex: 1 }
    }
  ]);

  const sendToBack = (targetId: number) => {
    setPolaroids(prevPolaroids => {
      return prevPolaroids.map(polaroid => {
        if (polaroid.id === targetId) {
          return {
            ...polaroid,
            position: { ...polaroid.position, zIndex: 0 }
          };
        } else {
          return {
            ...polaroid,
            position: { ...polaroid.position, zIndex: polaroid.position.zIndex + 1 }
          };
        }
      });
    });
  };

  // Styles object
  const styles = {
    gallery: {
      position: 'relative' as const,
    },
    polaroid: {
      position: 'absolute' as const,
      width: '500px',
      height: '650px',
      marginLeft: '1000px',
      marginTop: '180px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    polaroidFrame: {
      position: 'absolute' as const,
      width: '500px',
      height: 'auto',
      top: 0,
      left: 0,
      zIndex: 1,
    },
    photoContainer: {
      position: 'relative' as const,
      width: '400px',
      height: '600px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2,
    },
    photo: {
      position: 'absolute' as const,
      top: '22px',
      width: '100%',
      height: 'auto',
      objectFit: 'cover' as const,
    },
    textContainer: {
      position: 'absolute' as const,
      width: '100%',
      height: '80px',
      bottom: 0,
      display: 'flex',
      flexDirection: 'row' as const,
      justifyContent: 'space-between',
      alignItems: 'center',
      boxSizing: 'border-box' as const,
    },
    caption: {
      fontFamily: "'Caveat', cursive",
      fontSize: '30px',
      color: 'black',
      marginBottom: '4px',
    },
    watermark: {
      fontFamily: "'Open Sans', sans-serif",
      fontSize: '16px',
      color: 'black',
      marginBottom: '4px',
    }
  };

  return (
    <>
      {/* Import Google Fonts */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap');
      `}</style>
      
      <div style={styles.gallery}>
        {polaroids.map((polaroid) => (
          <motion.div
            key={polaroid.id}
            style={{
              ...styles.polaroid,
              transform: `rotate(${polaroid.rotation}deg)`,
              rotate: useTransform(useMotionValue(polaroid.rotation), (r) => `${r}deg`),
              top: `${polaroid.position.top}px`,
              left: `${polaroid.position.left}px`,
              zIndex: polaroid.position.zIndex
            }}
            drag
            dragElastic={0.3}
            dragSnapToOrigin={true}
            onDragEnd={() => sendToBack(polaroid.id)}
            onTap={() => sendToBack(polaroid.id)}
            whileTap={{ cursor: "grabbing" }}
          >
            {/* white polaroid frame */}
            <img 
              src={"/blank-polaroid.svg"} 
              alt="polaroid frame" 
              style={styles.polaroidFrame}
              draggable="false" 
            />
            
            {/* container for both texts and photo */}
            <div style={styles.photoContainer}>
              <img 
                src={"/gray-frame.svg"} 
                alt="polaroid photo" 
                style={styles.photo}
                draggable="false" 
              />
              
              {/* container for texts */}
              <div style={styles.textContainer}>
                <div style={styles.caption}>{polaroid.caption}</div>
                <div style={styles.watermark}>UofTHacks 13</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}