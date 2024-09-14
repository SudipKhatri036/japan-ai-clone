import "./Speech.css";

import SpeechHero from "../components/speechHero/SpeechHero";
import SpeechIntro from "../components/SpeechIntro/SpeechIntro";
import SpeechFeatures from "../components/SpeechFeatures/SpeechFeatures";
import InquiryArea from "../components/InquiryArea/InquiryArea";

function Speech() {
  return (
    <section className="speech">
      <SpeechHero
        pageSubTxt="High-precision Automated Minutes Sytem by AI"
        pageTxt="A fully Automated Ai meeting minutes system"
        pageMainTxt="Speech"
      />
      <SpeechIntro />
      <SpeechFeatures />
      <InquiryArea />
    </section>
  );
}

export default Speech;
