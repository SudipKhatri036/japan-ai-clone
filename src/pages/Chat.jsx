import Faq from "../components/faq/Faq";
import ButtonArrow from "../components/buttonArrow/ButtonArrow";
import "./Chat.css";
import ChatHero from "../components/chatHero/ChatHero";
import HorizontalLine from "../components/horizontalLine/HorizontalLine";
import SpeechFeaturesCard from "../components/speechFeaturesCard/SpeechFeaturesCard";
import InquiryArea from "../components/InquiryArea/InquiryArea";
import SpeechIntro from "../components/SpeechIntro/SpeechIntro";

function Chat() {
  return (
    <section className="chat">
      <ChatHero />
      <SpeechIntro />
      <div className="advantage">
        <h2>4 advantage over ChatGPT</h2>
        <HorizontalLine />
        <SpeechFeaturesCard imgSrc="./content_col1.png" />
        <SpeechFeaturesCard imgSrc="./content_col1.png" />
        <SpeechFeaturesCard imgSrc="./content_col1.png" />
        <SpeechFeaturesCard imgSrc="./content_col1.png" />
      </div>

      <InquiryArea />
      <Faq />
      <ButtonArrow />
    </section>
  );
}

export default Chat;
