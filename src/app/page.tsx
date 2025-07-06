import { Button } from "@/components/Button/Button";
import { Container } from "@/components/IdeaContainer/Container";
import { TextAreaInput } from "@/components/TextAreaInput/TextAreaInput";

export default function Home() {
  return (
    <div className="container-main">
      <div id="show_comments" className="comment-container">
        <h1>My ideas!</h1>
        <Container />
      </div>
      <div className="comment-section">
        <TextAreaInput />
        <Button />
      </div>
    </div>
  );
}
