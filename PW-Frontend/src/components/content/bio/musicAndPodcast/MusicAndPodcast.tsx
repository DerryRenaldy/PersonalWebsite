import clsx from "clsx";
import Music from "./carousel/Music";

const MusicAndPodcast = () => {
  return (
    <div className="flex flex-col h-full p-6 font-rubik gap-y-4">
      <div className={clsx("text-left", "md:text-2xl", "text-xl")}>Music</div>
      <div className="flex flex-col h-full justify-center">
        <div>
          <p className="text-left pb-4 italic">
            "Turn up the tunes, press play, and immerse yourself in a world of
            deep work."{" "}
            <span className="text-xs not-italic text-[#9e9e9e]">
              *login to spotify desktop to play the full song*
            </span>
          </p>
          <Music />
        </div>
      </div>
    </div>
  );
};

export default MusicAndPodcast;
