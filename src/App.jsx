import "./App.css";
import { useState } from "react";

function App() {
  let [colour, setColour] = useState("olive");
  return (
    <div style={{ backgroundColor: colour }} className="w-full h-screen">
      <div className="flex fixed flex-wrap justify-center inset-x-0 bottom-36 px-2">
        <div
          className="fixed flex flex-wrap justify-center gap-3 
          outline-none shadow-xl bg-slate-700 rounded-2xl p-2"
        >
          <button
            id="button1"
            onClick={() => {
              setColour("red");
            }}
            style={{ backgroundColor: "red" }}
            className="rounded-xl p-2 shadow-xl"
          >
            Red
          </button>

          <button
            id="button2"
            onClick={() => {
              setColour("blue");
            }}
            style={{ backgroundColor: "blue" }}
            className="rounded-xl p-2 shadow-xl text-white"
          >
            Blue
          </button>

          <button
            id="button3"
            onClick={() => {
              setColour("green");
            }}
            style={{ backgroundColor: "green" }}
            className="rounded-xl p-2 shadow-xl"
          >
            Green
          </button>

          <button
            id="button4"
            onClick={() => {
              setColour("white");
            }}
            style={{ backgroundColor: "white" }}
            className="rounded-xl p-2 shadow-xl"
          >
            White
          </button>

          <button
            id="button5"
            onClick={() => {
              setColour("pink")
            }}
            style={{ backgroundColor: "pink" }}
            className="rounded-xl p-2 shadow-xl"
          >
            pink
          </button>

          <button
            id="button6"
            onClick={() => {
              setColour("brown");
            }}
            style={{ backgroundColor: "brown" }}
            className="rounded-xl p-2 shadow-xl"
          >
            brown
          </button>

          <button
            id="button7"
            onClick={() => {
              setColour("Cyan");
            }}
            style={{ backgroundColor: "Cyan" }}
            className="rounded-xl p-2 shadow-xl"
          >
            Cyan
          </button>

          <button
            id="button8"
            onClick={() => {
              setColour("Purple");
            }}
            style={{ backgroundColor: "Purple" }}
            className="rounded-xl p-2 shadow-xl"
          >
            Purple
          </button>

          <button
            id="button9"
            onClick={() => {
              setColour("Tan");
            }}
            style={{ backgroundColor: "Tan" }}
            className="rounded-xl p-2 shadow-xl"
          >
            Tan
          </button>

          <button
            id="button10"
            onClick={() => {
              setColour("Magenta");
            }}
            style={{ backgroundColor: "Magenta" }}
            className="rounded-xl p-2 shadow-xl"
          >
            Magenta
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default App;
