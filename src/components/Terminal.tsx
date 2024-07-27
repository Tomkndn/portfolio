import React, { useEffect, useRef, useState } from "react";
import { COMMANDS } from "@/commands";

const Terminal: React.FC = () => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const userInputRef = useRef<HTMLSpanElement>(null);
  const dummyKeyboardRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (dummyKeyboardRef.current) {
      dummyKeyboardRef.current.focus();
    }
  }, []);

  const execute = (input: string) => {
    let output;
    input = input.toLowerCase();

    if (input.length === 0) {
      return;
    }

    if (input === "cls") {
      if (terminalRef.current) {
        terminalRef.current.innerHTML = `<div className="terminal-line">
              <span className="help-msg">
                Welcome to my portfolio! — Type${" "}
                <span class="text-blue-700">help</span> for a list of
                supported commands.
              </span>
            </div>`;
      }
      return;
    }

    output = `<div class="terminal-line"><span class="text-green-600">$</span> <span class="text-blue-500">~</span> ${input}</div>`;
    if (!COMMANDS.hasOwnProperty(input)) {
      output += `<div class="text-red-500">no such command: <span class="output">"${input}"</span></div>`;
    } else {
      output += `<div class="text-green-500"> ${COMMANDS[input]} </div>`;
    }

    if (terminalRef.current) {
      terminalRef.current.innerHTML += `<div class="terminal-line">${output}</div>`;
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      execute(input);
      setInput("");
      return;
    }

    setInput((prevInput) => prevInput + e.key);
  };

  const handleBackspace = (e: KeyboardEvent) => {
    if (e.key === "Backspace") {
      setInput((prevInput) => prevInput.slice(0, -1));
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleBackspace);
    document.addEventListener("keypress", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleBackspace);
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [input]);

  return (
    <div className="hero flex flex-col justify-between bg-transparent h-full">
      <canvas id="canvas" className="h-0 w-0"></canvas>
      <div className="flex-grow flex items-center justify-center">
        <div className="terminal flex flex-col p-4 shadow-lg bg-gray-900 rounded-large text-white w-full max-w-4xl h-full">
          <div className="terminal-bar flex items-center p-2 relative">
            <div className="icon-btn close bg-red-500 border border-red-400 rounded-full h-3 w-3 mr-2"></div>
            <div className="icon-btn min bg-yellow-500 border border-yellow-400 rounded-full h-3 w-3 mr-2"></div>
            <div className="icon-btn max bg-green-500 border border-green-400 rounded-full h-3 w-3 mr-2"></div>
            <div className="terminal-bar-text flex-1 text-center text-gray-400 absolute inset-x-0">
              Tom@kndn: ~
            </div>
          </div>
          <div
            className="terminal-window overflow-auto pt-3 max-h-80"
            ref={terminalRef}
          >
            <div className="terminal-line">
              <span className="help-msg">
                Welcome to my portfolio! — Type{" "}
                <span className="text-blue-700">help</span> for a list of
                supported commands.
              </span>
            </div>
          </div>
          <div className="terminal-line flex items-center">
            <span className="text-green-700">$</span>
            <span className=" text-blue-400 px-2">~</span>
            <span className="user-input relative bottom-1" ref={userInputRef}>
              {input}
            </span>
            <input
              type="text"
              id="dummyKeyboard"
              className="dummy-keyboard opacity-0 absolute"
              autoComplete="off"
              ref={dummyKeyboardRef}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
