'use client'
import { Container } from "@/components/IdeaContainer/Container";
import SectorArea from "@/components/Sector/SectorArea";
import { useState } from "react";
// nivel 1
export default function Home() {
  const [textList, setTextList] = useState([''])
  const addComment = (value: string) => {
    setTextList((previous) => {
      return [...previous, value]
    })
  }
  return (
    <div className="container-main">
      <div id="show_comments" className="comment-container">
        <h1>My ideas!</h1>
        {/** nive; 2 */}
        <Container value={textList} />
      </div>
      {/** nive; 2 */}
      <SectorArea addComment={addComment} />
    </div>
  );
}
/**
 * contexto: nivel 0
 * nivel 1: home
 *  nivel 2: caja texto, contenedor del texto
 *    nivel 3: text area imaginario complejo
 *        nivel 7: informacion caja de texto
 */