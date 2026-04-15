import { useEffect, useRef } from "react";

const backgroundVideoSrc = new URL("../../../images/Video/Background.mp4", import.meta.url).href;

export function AnimatedBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlayVideo = () => {
      void video.play().catch(() => {
        /* ignore autoplay failures */
      });
    };
    tryPlayVideo();

    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        tryPlayVideo();
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return (
    <div
      className="portfolio-fabric fixed inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: -1 }}
      aria-hidden="true"
    >
      <div className="portfolio-fabric__video-shell">
        <video
          ref={videoRef}
          className="portfolio-fabric__video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/og-preview.png"
        >
          <source src={backgroundVideoSrc} type="video/mp4" />
        </video>
        <div className="portfolio-fabric__video-mask" />
      </div>
    </div>
  );
}
