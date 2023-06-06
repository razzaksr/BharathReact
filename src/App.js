import External from "./External"
import Styles from "./Styles"

export default function App(){

  const myOwn={
    boxShadow:'10px 10px 10px red'
  }

  return(
    <>
      <Styles/>
      <External propertyOne="files/features.png" propertyTwo="1000px" propertyThree={myOwn}/>
    </>
  )
}