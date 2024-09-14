import HorizontalLine from "../horizontalLine/HorizontalLine";
import IntroCardCont from "../introCardCont/IntroCardCont";
import "./SpeechIntro.css";

function SpeechIntro() {
  return (
    <div className="speech__intro-cont">
      <div className="speech__intro-content">
        <h2 className="page-heading">What is JAPAN SPEECH ?</h2>
        <HorizontalLine />
        <p className="intro-cont__subhead">
          JAPAN AI SPEECH is an AI solution that simultaneously achieves the
          world's most accurate and fastest transcription and speaker
          separation.
        </p>
        <IntroCardCont />
      </div>
    </div>
  );
}

export default SpeechIntro;
