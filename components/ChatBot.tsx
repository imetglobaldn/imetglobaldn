"use client";
import React, { useState, useEffect, KeyboardEvent, useRef } from "react";
import { FiSend, FiRefreshCw } from "react-icons/fi";
import { FaRobot, FaUser } from "react-icons/fa";
import { faqData } from "@/constants";
import Image from "next/image";
import BotAnimation from "./BotAnimation";

type ChatMessage = {
  sender: "User" | "Bot";
  message: string;
};

type FAQ = {
  question: string;
  answer: string;
};

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const [awaitingName, setAwaitingName] = useState(true);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  const courseLinks = [
    { slug: "/course/ecp", title: "ECP" },
    { slug: "/course/acep", title: "ACEP" },
    { slug: "/course/aecp", title: "AECP" },
  ];

  useEffect(() => {
    setChatHistory([
      { sender: "Bot", message: "Hi, how can I assist you today?" },
      { sender: "Bot", message: "May I know your name?" },
    ]);
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleRefresh = () => {
    setChatHistory([
      { sender: "Bot", message: "Hi, how can I assist you today?" },
      { sender: "Bot", message: "May I know your name?" },
    ]);
    setUserMessage("");
    setUserName(null);
    setAwaitingName(true);
  };

  const normalizeMessage = (message: string) => {
    return message.toLowerCase().replace(/\b(imet|imet global|imet)\b/gi, "imet");
  };

  const getMatchingWordsCount = (faq: FAQ, queryWords: string[]) => {
    const faqWords = faq.question.toLowerCase().split(" ");
    return queryWords.filter((word) => faqWords.includes(word)).length;
  };

  const handleSendMessage = async () => {
    if (!userMessage.trim()) return;

    setChatHistory([...chatHistory, { sender: "User", message: userMessage }]);
    const normalizedMessage = normalizeMessage(userMessage.trim());

    if (awaitingName) {
      setUserName(normalizedMessage);
      setAwaitingName(false);
      simulateBotResponse(`Nice to meet you, ${normalizedMessage}! How can I help you today?`);
      setUserMessage("");
      return;
    }

    setUserMessage("");
    const queryWords = normalizedMessage.split(" ");

    const closestMatch = faqData.reduce<{ faq: FAQ | null; matchCount: number }>(
      (bestMatch, faq) => {
        const matchingWordsCount = getMatchingWordsCount(faq, queryWords);
        if (matchingWordsCount > bestMatch.matchCount) {
          return { faq, matchCount: matchingWordsCount };
        }
        return bestMatch;
      },
      { faq: null, matchCount: 0 }
    );

    if (closestMatch.faq && closestMatch.matchCount > 0) {
      simulateBotResponse(`${closestMatch.faq.answer}, ${userName}.`);
    } else {
      try {
        setLoading(true);
        const response = await fetch("/api/bot", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: normalizedMessage }),
        });
        const data = await response.json();
        simulateBotResponse(`${data.answer}, ${userName}.`);
      } catch (error) {
        console.error("Error fetching data:", error);
        simulateBotResponse(`Sorry, I couldn't retrieve an answer at the moment, ${userName}.`);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  const simulateBotResponse = (response: string) => {
    setLoading(true);
    setTimeout(() => {
      setChatHistory((prev) => [
        ...prev,
        { sender: "Bot", message: response },
        { sender: "Bot", message: "Would you like to explore one of these courses?" },
        {
          sender: "Bot",
          message: courseLinks
            .map(
              (course) =>
                `<a href="${course.slug}" class="text-blue-500 underline">${course.title}</a>`
            )
            .join(", "),
        },
      ]);
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      <button
        onClick={toggleChat}
        className="fixed  bottom-8 right-4 transition"
      >
        <BotAnimation/>
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-4 w-100 bg-white border-2 border-white shadow-lg rounded-lg overflow-hidden z-50">
          <div className="bg-main text-white p-4 flex justify-between items-center">
            <div className="flex flex-row">
              <h3 className="text-lg text-blue font-semibold">
                <Image src="/main.png" width={120} height={100} alt="logo" />
                Chat with us
              </h3>
            </div>
            <div className="flex space-x-2">
              <button onClick={handleRefresh} className="text-indigo-700">
                <FiRefreshCw />
              </button>
              <button onClick={toggleChat} className="font-bold text-red">
                ✖
              </button>
            </div>
          </div>
          <div className="p-4 max-h-96 overflow-y-auto" ref={chatContainerRef}>
            {chatHistory.map((msg, index) => (
              <div key={index} className={`mb-2 ${msg.sender === "Bot" ? "text-left" : "text-right"}`}>
                <div
                  className={`flex items-center ${
                    msg.sender === "Bot" ? "justify-start" : "justify-end"
                  }`}
                >
                  {msg.sender === "Bot" ? (
                    <FaRobot className="text-2xl text-gray-600 mr-2" />
                  ) : (
                    <FaUser className="text-2xl text-gray-600 mr-2" />
                  )}
                  <div
                    dangerouslySetInnerHTML={{ __html: msg.message }}
                    className={`p-2 rounded-lg max-w-xs ${
                      msg.sender === "Bot" ? "bg-main text-gray-800" : "bg-rose-100 text-black"
                    }`}
                  />
                </div>
              </div>
            ))}
            {loading && (
              <div className="text-left text-gray-500">
                <span className="dot-animation">• • •</span>
              </div>
            )}
          </div>
          <div className="flex items-center p-2 border-t border-gray-300">
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your question..."
              className="flex-grow p-2 border rounded-lg focus:outline-none"
            />
            <button
              onClick={handleSendMessage}
              className="ml-2 p-2 bg-blue-500 text-indigo-700 rounded-full hover:bg-blue-600"
            >
              <FiSend />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
