import STAY_FIT from "../../assets/stay-fit.png";
import GYN from "../../assets/gyn.png";
import SOBIE_DESIGN from "../../assets/sobie-design.png";

function Sponsors() {
  return (
    <div className="flex w-full justify-center border-y-1 border-main bg-primary-900">
      <div className="flex w-full max-w-[800px] flex-wrap items-center justify-center gap-7 p-2 md:justify-between">
        <h4 className="border-[4px] border-primary-700 px-3 py-1 text-xl font-bold text-primary-700">
          PWR-LFT
        </h4>
        <img
          src={STAY_FIT}
          alt="Sponsor's logo"
          className="w-[120px] opacity-60"
        />

        <img src={GYN} alt="Sponsor's logo" className="w-[100px] opacity-60" />
        <img
          src={SOBIE_DESIGN}
          alt="Sponsor's logo"
          className="w-[80px] opacity-[0.15]"
        />
      </div>
    </div>
  );
}

export default Sponsors;
