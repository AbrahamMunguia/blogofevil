'use client'

import { useState } from "react"
import { Button } from "../Button/Button"
import { TextAreaInput } from "../TextAreaInput/TextAreaInput"


export default function SectorArea(props: any) {
  const [textArea, setTextArea] = useState('')

  return <div className="comment-section">
    <TextAreaInput textValue={textArea} setValue={setTextArea} />
    <Button onClick={() => {
      props.addComment(textArea);
      setTextArea("")
    }} />
  </div>
}