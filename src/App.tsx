
import Focus from "./components/focus"
export default function App(){
  return(
    <>
    <Focus sentence="True Focus"
manualMode={false}
blurAmount={5}
borderColor="red"
animationDuration={2}
pauseBetweenAnimations={1}></Focus>
    <h1>
      Hello Wolrd!!
    </h1>
    </>
  )
}