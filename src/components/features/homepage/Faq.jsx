import FaqDropdown from "../../ui/homepage/FaqDropdown";

function Faq() {
  return (
    <div
      name="faq"
      className="flex w-full items-center justify-center py-[50px] md:py-[100px]"
    >
      <div className="flex w-full max-w-[1500px] flex-col items-center justify-center gap-5 p-4 md:gap-10">
        <div className="rounded-full border-2 border-green-500 bg-green-900 px-4 py-1 text-sm text-white">
          FAQ
        </div>
        <FaqDropdown title="Is Power Space for everybody?">
          We belive that both experienced and unexperienced lifters can use
          Power Space platform without any problems. One and only requirment is
          basic knowlege about strength training.
        </FaqDropdown>
        <FaqDropdown title="Will I lose my messages after my pro access expires?">
          Absolutely not, all messages stay in your mailbox. The only way to
          lose them is to delete your account.
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
