import { toast } from "react-hot-toast";
import { useState } from "react";

import contactImg from "../../assets/contact-img2.jpg";
import rectangles from "../../assets/rectangles.svg";
import Button from "../../ui/Button";

function Contact() {
  const [isDisabled, setIsDisabled] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully");
    setIsDisabled(true);
  };

  return (
    <div
      name="contact"
      className="flex w-full items-center justify-center overflow-hidden py-[100px]"
    >
      <div className="relative flex flex-col items-center gap-6 p-4 lg:gap-10">
        <img
          src={rectangles}
          alt="Background image"
          className="translate absolute bottom-[-300px] left-[-600px] w-[1300px] opacity-[0.02] md:flex"
        />
        <div className="z-[5] flex items-center">
          <img
            className="hidden h-[400px] rounded-l-xl border-1 border-r-0 border-main lg:flex"
            alt="Weights"
            src={contactImg}
          />
          <div className="flex max-w-[400px] flex-col items-center gap-6 rounded-md border-1 border-main bg-primary-900 px-2 py-6 sm:px-6">
            <div className="rounded-full border-1 border-secondary-500 bg-secondary-900 px-4 py-1 text-sm text-white">
              Contact
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="max-w-[600px] text-2xl font-semibold tracking-wide text-white">
                {"Got any questions?"}
              </h2>
              <h2 className="max-w-[600px] text-2xl font-semibold tracking-wide text-white">
                {" Maybe You've found some issues with the platform?"}
              </h2>
              <h2 className="max-w-[600px] text-2xl font-semibold tracking-wide text-white">
                {"Contact us and let's figure it out together!"}
              </h2>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-col gap-2"
            >
              <input
                type="email"
                className="w-full bg-primary-800 p-2 text-white"
                placeholder="E-mail"
              />
              <textarea
                rows="7"
                placeholder="Message"
                className="w-full resize-none bg-primary-800 p-2 text-white"
              />
              <Button disabled={isDisabled} variant="secondary">
                Send message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
