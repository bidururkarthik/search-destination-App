// Write your code here
import './index.css'

const DestinationItem = props => {
  const {detailsdetails} = props
  const {name, imgUrl} = detailsdetails
  return (
    <li className="app-container">
      <div>
        <img src={imgUrl} alt={name} className="app-img" />
        <p className="name">{name}</p>
      </div>
    </li>
  )
}

export default DestinationItem
