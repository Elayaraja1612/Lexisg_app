import React, { useState } from "react";
import QueryInput from "./components/QueryInput";
import AnswerCard from "./components/AnswerCard";

const App = () => {
    const [loading, setLoading] = useState(false);
    const [answer, setAnswer] = useState("");
    const [citations, setCitations] = useState([]);

    const handleSubmit = (query) => {
        setLoading(true);

        setTimeout(() => {
            const response = {
                answer:
                    "Yes, under Section 166 of the Motor Vehicles Act, 1988, claimants are entitled to future prospects even when the deceased was self-employed and aged 54–55 years.",
                citations: [
                    {
                        text:
                            "10% of annual income should be awarded on account of future prospects.",
                        source: "Dani_Devi_v_Pritam_Singh.pdf",
                        link: "https://example.com",
                    },
                ],
            };

            setAnswer(response.answer);
            setCitations(response.citations);
            setLoading(false);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-4">
            <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-2xl p-6">
                {/* 🟦 Title */}
                <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">
                    ⚖️ Lexi Legal Assistant
                </h1>

                {/* 📝 Input */}
                <QueryInput onSubmit={handleSubmit} loading={loading} />

                {/* 📄 Answer */}
                <AnswerCard answer={answer} citations={citations} />
            </div>
        </div>
    );
};

export default App;
