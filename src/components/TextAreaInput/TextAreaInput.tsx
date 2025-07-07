'use client'

export function TextAreaInput(props: any) {
  return <textarea name="text_area_blog" id="text_area_blog"
    value={props.textValue}
    onChange={(e) => props.setValue(e.currentTarget.value)}
  />
}