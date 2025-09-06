import React, { useState } from "react";
import { Divide } from "lucide-react";
import { Radical } from "lucide-react";
import { Delete } from "lucide-react";
import { X } from "lucide-react";
import { evaluate } from "mathjs";
function Main() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleCalculate = () => {
    console.log("Calculate");
    try {
      setResult(evaluate(input));
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <div className="bg-cyan-500 pt-10 w-full h-screen">
        <div className="flex items-center flex-col ">
          <div className="flex flex-col text-2xl font-bold text-gray-800 p-4 bg-gray-700 ">
            <div className="text-center text-white">
              <h1 className="text-orange-600">Calculator</h1>
            </div>
            <div className="bg-gray-700 ml-2.5 border-2 border-gray-700">
              <input
                type="text"
                className="w-full text-white bg-gray-700 rounded-lg focus:outline-none"
                placeholder="0"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <div className="bg-gray-700 ml-2.5 border-2 border-gray-700">
              <input
                type="text"
                className="w-full mb-2.5 text-white bg-gray-700 rounded-lg focus:outline-none"
                // placeholder={input ? eval(input) : "Result"}
                placeholder="Result"
                value={result}
                onChange={(e) => setResult(e.target.value)}
                readOnly
              />
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-gray-600 text-orange-600 p-2 rounded-xl align-baseline w-15 h-15">
                <Radical className="w-8 h-8 font-bold" />
              </button>
              <button
                onClick={() => {
                  setInput("");
                  setResult("");
                }}
                className="bg-gray-600 text-orange-600 p-2 rounded-xl align-baseline w-15 h-15"
              >
                {input ? "C" : "AC"}
              </button>
              <button
                className="flex items-center justify-center bg-gray-600 text-orange-600 p-2 rounded-xl align-baseline ml-0.5 w-15 h-15"
                onClick={() => {
                  setInput(input.slice(0, -1));
                }}
              >
                <Delete className="font-bold" />
              </button>
              <button
                className="flex items-center justify-center bg-gray-600 text-orange-600 p-2 rounded-xl align-baseline ml-0.5 w-15 h-15"
                onClick={() => {
                  handleButtonClick("(");
                }}
              >
                (
              </button>
              <button
                className="flex items-center justify-center bg-gray-600 text-orange-600 p-2 rounded-xl align-baseline ml-0.5 w-15 h-15"
                onClick={() => {
                  handleButtonClick(")");
                }}
              >
                )
              </button>
            </div>
            <div className="flex items-center justify-between mt-2">
              <button
                className="bg-gray-600 text-white p-2 rounded-xl align-baseline w-15 h-15"
                onClick={() => {
                  handleButtonClick("7");
                }}
              >
                7
              </button>
              <button
                className="bg-gray-600 text-white p-2 rounded-xl align-baseline w-15 h-15"
                onClick={() => {
                  handleButtonClick("8");
                }}
              >
                8
              </button>
              <button
                className="flex items-center justify-center bg-gray-600 text-white p-2 rounded-xl align-baseline ml-0.5 w-15 h-15"
                onClick={() => {
                  handleButtonClick("9");
                }}
              >
                9
              </button>
              <button className="bg-gray-600 text-orange-600 p-2 rounded-xl flex items-center justify-center ml-0.5 w-15 h-15">
                <Divide className="w-8 h-7.5" />
              </button>
              <button className="flex items-center justify-center bg-gray-600 text-orange-600 p-2 rounded-xl align-baseline ml-0.5 w-15 h-15">
                <h1 className="text-5xl font-bold mb-2">-</h1>
              </button>
            </div>
            <div className="flex items-center justify-between mt-2">
              <button
                className="bg-gray-600 text-white p-2 rounded-xl align-baseline w-15 h-15"
                onClick={() => {
                  handleButtonClick("4");
                }}
              >
                4
              </button>
              <button
                className="bg-gray-600 text-white p-2 rounded-xl align-baseline w-15 h-15"
                onClick={() => {
                  handleButtonClick("5");
                }}
              >
                5
              </button>
              <button
                className="flex items-center justify-center bg-gray-600 text-white p-2 rounded-xl align-baseline ml-0.5 w-15 h-15"
                onClick={() => {
                  handleButtonClick("6");
                }}
              >
                6
              </button>
              <button
                className="bg-gray-600 text-orange-600 p-2 rounded-xl flex items-center justify-center ml-0.5 w-15 h-15"
                onClick={() => {
                  handleButtonClick("+");
                }}
              >
                <h1 className="text-4xl font-bold mb-2">+</h1>
              </button>
              <button className="flex items-center justify-center bg-gray-600 text-orange-600 p-2 rounded-xl align-baseline ml-0.5 w-15 h-15">
                <X className="w-8 h-7.5" />
              </button>
            </div>
            <div className="flex items-center justify-between mt-2">
              <button
                className="bg-gray-600 text-white p-2 rounded-xl align-baseline w-15 h-15"
                onClick={() => {
                  handleButtonClick("1");
                }}
              >
                1
              </button>
              <button
                className="bg-gray-600 text-white p-2 rounded-xl align-baseline w-15 h-15"
                onClick={() => {
                  handleButtonClick("2");
                }}
              >
                2
              </button>
              <button
                className="flex items-center justify-center bg-gray-600 text-white p-2 rounded-xl align-baseline ml-0.5 w-15 h-15"
                onClick={() => {
                  handleButtonClick("3");
                }}
              >
                3
              </button>
              <button className="bg-gray-600 text-orange-600 p-2 rounded-xl flex items-center justify-center ml-0.5 w-15 h-15">
                <h1 className="text-4xl font-bold mb-2">.</h1>
              </button>
              <button
                className="flex items-center justify-center bg-gray-600 text-orange-600 p-2 rounded-xl align-baseline ml-0.5 w-15 h-15"
                onClick={handleCalculate}
              >
                <h1 className="text-4xl font-bold mb-2">=</h1>
              </button>
            </div>
            <div>
              <button
                className="bg-gray-600 text-white p-2 rounded-xl  h-15 mt-2 lg:w-52 md:w-45 sm:flex-2 w-full"
                onClick={() => {
                  handleButtonClick("0");
                }}
              >
                0
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Main;
