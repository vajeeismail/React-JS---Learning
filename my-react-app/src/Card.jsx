import profilePic from './assets/profile.jpg'

function Card() {
    return (
        <div className="card">
            <img src={profilePic} className='card-img' alt="profile picture" />
            <h2 className='card-title'>Bro Card</h2>
            <p className='card-text'>I am am web developer and IT supporter</p>
        </div>
    );
}

export default Card