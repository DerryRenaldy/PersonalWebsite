import "./CVWebsite.css";

const CVWebsite = () => {
  return (
    <div className="hidden h-full text-center xl:flex xl:items-center xl:justify-center">
      {/* CONTENT */}
      <iframe
        className="absolute frame z-[5] rounded-2xl mix-blend-lighten"
        src="https://cv.derryrenaldy.tech"
        title="Curiculum Vitae"
      />
      {/* IMAGE TEXTURE */}
      <div className="absolute z-0 rounded-2xl wrap w-[626px] h-[468px] shadowFrame" />
      {/* VIDEO TEXTURE */}
      <div className="videoPlayer1 absolute z-0 w-[630px] h-[470px]">
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline
          className="rounded-2xl"
        >
          <source src="real.mp4" type="video/mp4" />
        </video>
      </div>
      {/* VIDEO TEXTURE */}
      <div className="absolute z-0 videoPlayer2 rounded-2xl w-[630px] h-[468px]">
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline
          className="rounded-2xl"
        >
          <source src="static-texture-layer.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default CVWebsite;
