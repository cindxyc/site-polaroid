import Image from 'next/image';
import PolaroidGallery from './components/polaroid';
import './components/polaroid.css';

export default function Home() {
  return (
    <div id="about" className="flex flex-col w-full min-h-screen relative">
      {/* Top section with stars and bookmark */}
      <div className="flex w-full relative">
        {/* Left side with stars */}
        <div className="w-6/10 relative my-[10%] mx-[5%]">
          <Image
            src="/stars.svg"
            alt="stars"
            width={0}
            height={0}
            className="w-full h-auto"
          />
        </div>

        {/* Right side with bookmark and polaroid gallery and avatar selector overlay */}
        <div className="w-4/10 relative flex justify-center items-start">
          {/* Bookmark image as a full-height vertical rectangle */}
          <div className="relative w-full h-full">
            <Image
              src="/bookmark-art.svg"
              alt="bookmark"
              width={0}
              height={0}
              className="w-full h-auto min-h-[90vh]"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
            <div className="absolute top-[10%]">
              <PolaroidGallery />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}