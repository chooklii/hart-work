import React from "react"

interface IProps {
    imageName: string
}

const BottomImage = (props: IProps) => {
    const imageClassName = "bottom-image " + props.imageName
    return (
        <div className={imageClassName}>
        </div>
    )
}

export default BottomImage