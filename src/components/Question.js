import React, { useState } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai"
import propTypes from "prop-types"

export default function Question({
    id,
    title,
    content }
) {

    let [isOpen, setIsOpen] = useState("close");

    const accordionControl = () => {
        if (isOpen === "open")
            setIsOpen("close");

        else
            setIsOpen("open");
    }

    return (
        <div className="question" id={id}>
            <div className="title">
                <h3>{title} </h3>
                {
                    isOpen === "close" ?
                        (<AiFillPlusCircle onClick={accordionControl} className="icon" />)
                        :
                        (<AiFillMinusCircle onClick={accordionControl} className="icon" />)
                }
            </div>
            {
                isOpen === "open" ? (
                    <div className={"content "} >
                        {
                            content
                        }
                    </div>
                ) :
                    (
                        <></>
                    )
            }


        </div>
    );
}

Question.propTypes = {
    id: propTypes.number,
    title: propTypes.string,
    content: propTypes.string
}