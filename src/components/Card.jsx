

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.info.imageUrl} alt="" className="card--left"/>
            <div className="card--right">

                {/* Country name and link*/}
                <span className="card--right--country">
                    <span className="card--right--country__location-name">
                        <i class="fa-solid fa-location-dot" ></i>
                        {props.info.location}
                    </span>

                    <span className="card--right--country__location-link">
                        <a href={props.info.googleMapsUrl} target="_blank">View on Google Maps</a>
                    </span>
                </span>


                {/* Location Name span */}
                <span className="card--right--title">
                    {props.info.title}
                </span>
                

                {/* Date span */}
                <span className="country--right--date">
                    {props.info.startDate} - {props.info.endDate}
                </span>

                {/* Description Paragraph */}
                <p className="country--right-desc">
                    {props.info.description}
                </p>

            </div>
        </div>
    )
}

/*
description: "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
​
endDate: "18 Nov, 2021"
​
googleMapsUrl: "https://goo.gl/maps/fBvqd55y2wmRCE1CA"
​
imageUrl: "https://source.unsplash.com/3PeSjpLVtLg"
​
location: "Norway"
​
startDate: "01 Oct, 2021"
​
title: "Geirangerfjord"
*/