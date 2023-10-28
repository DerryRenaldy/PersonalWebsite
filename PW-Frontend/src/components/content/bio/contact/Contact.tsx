import image from "@assets/images";

const Contact = () => {
  return (
    <div className="flex flex-col p-6 gap-y-4 font-rubik h-full">
      <p className="text-left text-2xl">Contact</p>
      <div className="text-left gap-y-6 flex flex-col">
        <p>
          An opportunity? A piece of advice? Good things come to those who don't
          wait. Reach out to me below!
        </p>
        <div className="flex gap-x-6 justify-center">
          <a
            href="mailto:derryrenaldyy@gmail.com?subject=Greetings!&body=Feel free to contact me for any discussion and collaboration"
            className="flex items-center flex-col"
            target="_blank"
          >
            <img src={image.gmail} className="w-16 h-16" alt="gmail" />
            <p className="text-center mt-2">Gmail</p>
          </a>
          <a
            href="https://www.linkedin.com/in/derry-renaldy-48422b183/"
            className="flex items-center flex-col"
            target="_blank"
          >
            <img src={image.likedin} className="w-16 h-16" alt="linkedin" />
            <p className="text-center mt-2">LinkedIn</p>
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=62895411960087&text=Write me a message"
            className="flex items-center flex-col"
            target="_blank"
          >
            <img src={image.whatsapp} className="w-16 h-16" alt="whatsapp" />
            <p className="text-center mt-2">Whatsapp</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
