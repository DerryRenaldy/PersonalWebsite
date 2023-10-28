import Music from "./carousel/Music";

const MusicAndPodcast = () => {
  return (
    <div className="flex flex-col h-full p-6 font-rubik gap-y-6">
      <div className="text-2xl text-left">Music</div>
      <div className="flex flex-col gap-y-6 h-full justify-center">
        <div>
          <p className="text-left pb-2 italic">
            "Turn up the tunes, press play, and immerse yourself in a world of
            deep work."
          </p>
          <Music />
        </div>
        {/* <div>
          <p className="text-left pb-2">
            Press play and set sail on a voyage of intellect. This podcast is
            your ship, navigating the vast ocean of ideas, exploring uncharted
            territories with every episode.
          </p>
          <Podcast />
        </div> */}
      </div>
    </div>
  );
};

export default MusicAndPodcast;
