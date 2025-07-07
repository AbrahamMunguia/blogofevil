export function Container(props: any) {
  return <div id="container" >
    {props.value.map((comment: string) => <p key={comment}>{comment}</p>)}
  </div>
}