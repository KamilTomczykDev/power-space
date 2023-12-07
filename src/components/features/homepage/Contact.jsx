import contactImg from "../../../assets/contact-img2.jpg";
import rectangles from "../../../assets/rectangles.svg";

function Contact() {
  return (
    <div className=" flex w-full items-center justify-center overflow-hidden py-[100px]">
      <div className="relative flex flex-col items-center gap-6 p-4 lg:gap-10">
        <img
          src={rectangles}
          className="translate absolute bottom-[-300px] left-[-600px] w-[1300px] opacity-[0.02] md:flex"
        />
        <div className="rounded-full border-2 border-green-500 bg-green-900 px-4 py-1 text-sm text-white">
          Contact
        </div>
        <div className="z-[5] flex items-center">
          <img
            className="hidden h-[400px] rounded-l-xl border-2 border-r-0 border-stone-700 lg:flex"
            src={contactImg}
          />
          <div className="flex max-w-[400px] flex-col gap-6 rounded-md border-2 border-stone-700 p-2 sm:p-6">
            {/* form */}
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
            <form className="flex w-full flex-col gap-2">
              <input
                type="email"
                className="w-full bg-stone-800 p-2 text-white"
                placeholder="E-mail"
              />
              <textarea
                rows="7"
                placeholder="Message"
                className="w-full bg-stone-800 p-2 text-white"
              />
              <button className="w-full rounded-md border-2 border-stone-600 bg-stone-800 p-2 text-white hover:bg-stone-700">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
