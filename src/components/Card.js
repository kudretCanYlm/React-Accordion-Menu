import React from "react";
import propTypes from "prop-types";
import Question from "./Question";

export default function Card({ title, questions }) {



    return (
        <div className="card">
            <div className="title">
                <h1>
                    {
                        title
                    }
                </h1>
            </div>
            <div className="content">
                {
                    questions != null ?


                        questions.map(question => (
                            <Question
                                id={question.id}
                                title={question.title}
                                content={question.content}
                            />
                        ))
                        :
                        <>
                        </>


                }
            </div>
        </div>
    )
}

Card.propTypes={
    title:propTypes.string.isRequired,
    questions:propTypes.array
}