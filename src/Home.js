import React from 'react'

class Home extends React.Component {

    createButtons = () => {
        return this.props.wonders.map(wonder => <button onClick={(e) => this.handleVote(e, wonder)} id={wonder.id} key={wonder.id} type="submit">{wonder.name}<br/><span id="numb-votes">Number of votes: {wonder.votes}</span></button>)
    }

    handleVote = (e, clickedWonder) => {
        e.preventDefault()
        let updatedVotes = clickedWonder.votes + 1
        console.log(updatedVotes)
        fetch(`http://localhost:3000/wonders/${clickedWonder.id}`, {
            method: "PATCH", 
            headers: {
                'Action': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ votes: updatedVotes })
        }).then(response => response.json())
            .then(wonder => this.props.handleVotes(wonder))
    }


    render() {
        return (
            <div className="home">
                <h1>Check out the 7 wonders of the world and vote for your favorites!</h1>
                <div className="voting-buttons">
                    {this.createButtons()}
                </div>
                {/* <div class="chart-wrap vertical">
                    <h2 class="title">Bar Chart HTML Example:  Using Only HTML And CSS</h2>
                    <div class="grid">
                        <div class="bar" style={"--bar-value:85%;"} data-name="Your Blog" title="Your Blog 85%"></div>
                        <div class="bar" style={"--bar-value:23%;"} data-name="Medium" title="Medium 23%"></div>
                        <div class="bar" style={"--bar-value:7%;" }data-name="Tumblr" title="Tumblr 7%"></div>
                        <div class="bar" style={"--bar-value:38%;"} data-name="Facebook" title="Facebook 38%"></div>
                        <div class="bar" style={"--bar-value:35%;"} data-name="YouTube" title="YouTube 35%"></div>
                        <div class="bar" style={"--bar-value:30%;"} data-name="LinkedIn" title="LinkedIn 30%"></div>
                        <div class="bar" style={"--bar-value:5%;" }data-name="Twitter" title="Twitter 5%"></div>
                        <div class="bar" style={"--bar-value:20%;"} data-name="Other" title="Other 20%"></div>    
                    </div>
                </div> */}
            </div>
        )
    }
}

export default Home