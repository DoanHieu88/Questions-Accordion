import React,{useState} from 'react'
import data from './config/data'
import SingleQuestion from './component/SingleQuestion'

export default function App() {
    const [quesions,setQuestions] = useState(data)
    return (
        <main>
            <div className='container'>
                <h3>questions and answers about login</h3>
                <section className='info'>
                    {quesions.map((question) => {
                    return (
                        <SingleQuestion key={question.id} {...question}></SingleQuestion>
                    );
                    })}
                </section>
            </div>
        </main>
    )
}
