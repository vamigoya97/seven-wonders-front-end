import React from 'react';

class Wonder extends React.Component {
    
    render() {
        return (
            <div className="wonder-card">
                <div className="info">
                    <h1 id="wonder-name">{this.props.wonder.name}</h1>
                    <h2 id ="location">Located in {this.props.wonder.location}</h2>
                    <h2 id="date-built">Built {this.props.wonder.date_built}</h2>
                    <h3 id="description">{this.props.wonder.description}</h3>
                </div>
                <div className="images">
                    <img src={`${this.props.wonder.img_url1}`} alt="img1"></img>
                    <img src={`${this.props.wonder.img_url2}`} alt="img2"></img>
                    <img src={`${this.props.wonder.img_url3}`} alt="img3"></img>
                    <img src={`${this.props.wonder.map_url}`} alt="img4"></img>
                </div>
            </div>
        )
    }
}

export default Wonder