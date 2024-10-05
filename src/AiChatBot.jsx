import { useState, useRef, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import "./index.css";
import "./AiChatBot.css";

function AiChatBot() {
  const [question, setQuestion] = useState("");
  const [conversation, setConversation] = useState([]);
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const chatEndRef = useRef(null);

  async function generateAnswer(e) {
    e.preventDefault();
    if (!question.trim()) return;

    const userMessage = { sender: "user", text: question };
    setConversation((prev) => [...prev, userMessage]);
    setGeneratingAnswer(true);

    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${
          import.meta.env.VITE_API_GENERATIVE_LANGUAGE_CLIENT
        }`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      const aiMessage = {
        sender: "ai",
        text: response.data.candidates[0].content.parts[0].text,
      };
      setConversation((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.log(error);
      const errorMessage = { sender: "ai", text: "Sorry - Something went wrong. Please try again!" };
      setConversation((prev) => [...prev, errorMessage]);
    }

    setQuestion("");
    setGeneratingAnswer(false);
  }

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversation]);

  return (
    <div className="bg-gradient-to-br from-[#f4c3e0] via-lime-200 to-[#a6d8f0] min-h-screen p-6 flex flex-col items-center justify-between">
      <div className="w-full max-w-3xl flex flex-col bg-white rounded-lg shadow-lg">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#a6d8f0] via-lime-200 to-[#f4c3e0] text-black text-center py-4 rounded-t-lg">
          <h1 className="text-3xl font-bold tracking-wide">🌈 Chat with Your AI Buddy!</h1>
          <p className="mt-1 text-sm">✨ Let's Dive into Fun Conversations!</p>
        </div>
  
        {/* Chatbox */}
        <div className="flex flex-col h-[400px] overflow-y-auto p-4 space-y-4">
          {conversation.map((msg, index) => (
            <div
              key={index}
              className={`p-3 max-w-lg rounded-lg shadow-md ${
                msg.sender === "user"
                  ? "bg-pink-300 text-white self-end"
                  : "bg-blue-300 text-black self-start"
              }`}
            >
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            </div>
          ))}
          <div ref={chatEndRef}></div>
        </div>
  
        {/* Input and Button */}
        <form
          onSubmit={generateAnswer}
          className="flex flex-col sm:flex-row items-center bg-gray-50 p-4 rounded-b-lg border-t border-gray-200"
        >
          <textarea
            required
            className="flex-1 border border-gray-300 rounded-lg p-3 mb-2 sm:mb-0 sm:mr-2 w-full transition-all focus:border-indigo-400 focus:ring-2 focus:ring-indigo-300"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask anything..."
          ></textarea>
          <button
            type="submit"
            className={`w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 px-4 rounded-lg font-bold transition-all hover:shadow-md hover:scale-105 duration-300 ${
              generatingAnswer ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={generatingAnswer}
          >
            {generatingAnswer ? "Thinking..." : "Send"}
          </button>
        </form>
      </div>
      <br />
    </div>
  );
  
}

export default AiChatBot;
