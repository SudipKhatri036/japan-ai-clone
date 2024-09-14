import Faq from "../components/faq/Faq";
import InquiryArea from "../components/InquiryArea/InquiryArea";
import SpeechFeatures from "../components/SpeechFeatures/SpeechFeatures";
import SpeechHero from "../components/speechHero/SpeechHero";
import SpeechIntro from "../components/SpeechIntro/SpeechIntro";

import "./Marketing.css";

function Marketing() {
  return (
    <section className="marketing">
      <SpeechHero
        pageSubTxt="Maximize marketing efficiency with AI"
        pageMainTxt="Marketing"
      />
      <SpeechIntro />
      <SpeechFeatures />
      <InquiryArea />
      <Faq />
    </section>
  );
}

export default Marketing;
