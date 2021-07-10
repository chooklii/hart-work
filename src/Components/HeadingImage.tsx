import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
interface IProps {
    imageName: string,
    title: string,
    text: string,
    additionaltitle?: string
}

const HeadingImage = (props: IProps) => {
    const imageClassName = "heading-image " + props.imageName
    return (
        <div className={imageClassName}>
            <div className="heading-image-box">
                <div className="headingBox">

                    <div className="hashtag red">
                        <FontAwesomeIcon icon={faHashtag} />
                    </div>
                    <div>
                        <div className="imageHeading">
                            <h1 className="red fontBold heading">
                                {props.title}
                                 <span className="red fontEx">{props.additionaltitle}</span>
                            </h1>
                        </div>
                        <h2 className="grey fontNormal textBox">{props.text}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeadingImage