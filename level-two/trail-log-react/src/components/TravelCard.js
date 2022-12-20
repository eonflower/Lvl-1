import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./TravelCard.css"

function TravelCard(props) {
    // console.log(props.image)
    let dates
    if (props.endDate === "") {
        dates = `${props.startDate}`
    } else {
        dates = `${props.startDate} - ${props.endDate}`
    }
    return (
        <div className="cards">
            <img src={props.image} alt="" className="card-img" />
            <div className="card-location">
                <span className='location'><FontAwesomeIcon icon={faLocationDot} className="location-icon" />  {props.location}</span>
                <a href={props.googleMapsUrl} className="google-link">view on google maps</a>
            </div>
            <h1 className="card-title">{props.title}</h1>
            <div className="card-info">
                <span className="card-dates">{dates}</span>
                <p className='card-description' id='card-description'>{props.description}</p>
                {/* <a className='read-more' id='read-more'>read more</a> */}
            </div>
            
        </div>
    )
}

export default TravelCard;