
import { useState } from 'react'

function UserComment(props) {
    const [likes, setLikes] = useState(props.likes)

    const handleLike = () => {
        setLikes(likes + 1)
    }

    return (
        <div className="comment">
            <header>
                <strong>{props.user}</strong>
                <i className="fa-regular fa-flag"></i>
            </header>
            <div className="dateWrapper">{(new Date(props.created_at)).toLocaleDateString()}</div>
            <p>{props.comment}</p>
            <div className="likeWrapper">
                <button className="likeButton" onClick={() => setLikes(likes + 1)}>
                    <i className="fa-regular fa-thumbs-up"></i>
                </button> Helpful ({likes})
            </div>
        </div>
    )
}

export default UserComment