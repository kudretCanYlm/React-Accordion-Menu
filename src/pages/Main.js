import React, { useContext } from 'react';
import Card from "../components/Card";
import { QuestionContext } from "../context/QuestionContext"

export default function Main() {

    const value = useContext(QuestionContext);


    return (
        <>
            <Card title="Questions And Answers About Login" questions={value} />
        </>
    )
}