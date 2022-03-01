import React, { useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";

interface IProps {
    imageName: string,
    title?: string,
    link?: boolean,
    url?: string,
    text?: string,
    noBox?: boolean,
    additionaltitle?: string,
    textred?:boolean,
    mobileBottom?: boolean,
    id: number,
    activeElement: number
}

const TopImage = (props: IProps) => {
    const imageClassName = "heading-image " + props.imageName
    const desktopLink = props.link ? "carousel-link-desktop" : ""
    const mobileLink = props.link ? "carousel-link-mobile" : ""
    const hasLink = props.link ? "underline" : ""
    const headerShown = window.innerWidth >= 1200 ? true : false
    const textred = props.textred ? "textredmobile" : ""
    const mobileBottom = props.mobileBottom ? "textmobilebottom" : ""

    if(props.id != props.activeElement){
        return(
            <div>

            </div>
        )
    }
    return (
        <div>
            <div onClick={(!headerShown && props.link) ? () => window.open(props.url, '_blank') : null } className={imageClassName + " " + mobileLink}>
            {!props.noBox &&
                <div onClick={(headerShown && props.link) ? () => window.open(props.url, '_blank') : undefined } className={"heading-image-box " + desktopLink}>
                    <div className={"headingBox " + mobileBottom}>

                        <div className={"hashtag red mobileWhite " + textred}>
                            <FontAwesomeIcon icon={faHashtag} />
                        </div>
                        <div>
                            <div className="imageHeading">
                                <h1 className={"red fontBold heading imageHeading mobileWhite " + textred}>
                                    {props.title}
                                    <span className="red fontEx mobileWhite">{props.additionaltitle}</span>
                                </h1>
                            </div>
                            <h2 className={"grey fontNormal mobileWhite textBox " + hasLink + " " + textred}>{props.text}</h2>
                        </div>
                    </div>
                </div>
}
            </div>
        </div>
    )
}

export default TopImage