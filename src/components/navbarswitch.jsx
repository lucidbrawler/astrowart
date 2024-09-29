import Navigator from "./navbar";
import OffcanvasExample from "./navmobile";
const Navbarswitch = () => {
  return (
    <div> {(windowDim.winWidth > 125)
        ? <Navigator />
        : <OffcanvasExample />
    }</div>
  )
}

export default Navbarswitch