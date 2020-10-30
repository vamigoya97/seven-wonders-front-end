import React from "react"
import { Link } from 'react-router-dom'

class Header extends React.Component {

    createLinks = () => this.props.wonders.map(wonder => <Link onMouseEnter={(e) => this.props.handleFlags(e, wonder.id)} onMouseLeave={(e) => this.props.handleLeaveFlags(e)} key={wonder.id} to={`/${wonder.id}`}>{wonder.name}</Link>)

    render() {
        return(
            <div className="header" >
                <h1 id="app-title">THE SEVEN WONDERS OF THE WORLD</h1>
                <Link className="home-link" to="/">HOME</Link>
                <nav id="links">
                    {this.createLinks()}
                </nav>
            </div>
        )
    }
}

export default Header