// import "./boxs.css"
// function Boxs({ index, color, label, onClick }) {
//   return (
//     <div className="box" onClick={() => onClick(index)} style={{ backgroundColor: color }}>
//       {label}
//     </div>
//   )
// }

// export default Boxs

import props from "prop-types";
import "./boxs.css"
function Boxs({ color = "pink", label }) {
  return (
    <div className="box" style={{ backgroundColor: color }}>
      {label}
    </div>
  )
}

Boxs.defaultProps = {
  color: "red",
  label: "This is red color"
}

Boxs.propTypes = {
  color: props.string,
  label: props.number,
}

export default Boxs

