import "./boxs.css"
function Boxs({ index,color, label, onClick}) {
  return (
    <div className="box" onClick={()=> onClick(index)} style={{ backgroundColor: color }}>
      {label}
    </div>
  )
}
export default Boxs

