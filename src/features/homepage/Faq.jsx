import FaqDropdown from "../../ui/FaqDropdown";

function Faq() {
  return (
    <div
      name="faq"
      className="flex w-full items-center justify-center py-[50px] md:py-[100px]"
    >
      <div className="flex w-full max-w-[1500px] flex-col items-center justify-center gap-5 p-4 md:gap-10">
        <div className="rounded-full border-1 border-secondary-500 bg-secondary-900 px-4 py-1 text-sm text-white">
          FAQ
        </div>
        <FaqDropdown title="Is Power Space for everybody?">
          We belive that both experienced and unexperienced lifters can use
          Power Space platform without any problems. One and only requirment is
          basic knowlege about strength training.
        </FaqDropdown>
        <FaqDropdown title="Will I lose my posts after my pro access expires?">
          Absolutely not, all posts stay in your wall. The only way to lose them
          is to delete them or to delete your account.
        </FaqDropdown>
        <FaqDropdown title="Where can I get informations about upcoming events?">
          The best way to be up to date is to follow our facebook and instagram.
          In the upcoming months we want to add news section to our website to
          have better connection with users.
        </FaqDropdown>
      </div>
    </div>
  );
}

export default Faq;
