import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";

interface IProps {
    imageName: string,
    title: string,
    text: string,
    additionaltitle?: string
}

const TopImage = (props: IProps) => {
    const imageClassName = "heading-image " + props.imageName
    return (
        <div>
            <div className={imageClassName}>
                <div className="heading-image-box">
                    <div className="headingBox">

                        <div className="hashtag red mobileWhite">
                            <FontAwesomeIcon icon={faHashtag} />
                        </div>
                        <div>
                            <div className="imageHeading">
                                <h1 className="red fontBold heading imageHeading mobileWhite">
                                    {props.title}
                                    <span className="red fontEx mobileWhite">{props.additionaltitle}</span>
                                </h1>
                            </div>
                            <h2 className="grey fontNormal mobileWhite textBox">{props.text}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopImage