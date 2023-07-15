import React, { useEffect, useRef, useState } from "react"
import ReactPlayer from "react-player"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const Video = () => {
    const [playing, setPlaying] = useState(false);


    const PlayButton = () => {
        return(
            <div>
            <div className="playButton">
                <FontAwesomeIcon onClick={() => setPlaying(true)} className="basicIcon red playIcon" icon={faPlay}/>
                <h2  className="red fontBold center">#Imagefilm</h2>
            </div>
            </div>
        )
    }

    return (
        <div className={playing ? "" : "playButtonImage"}>
            <ReactPlayer
                controls
                playing
                light
                muted
                playIcon={<PlayButton/>}
                className="videoPlayerComponent"
                url="https://hart-work.de/trailer.mp4" /> 
        </div>
    )

}

export default Video