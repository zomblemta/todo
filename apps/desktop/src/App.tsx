import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { Interface } from "@td/interface";

import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <>
      <Interface />
    </>
  );
}

export default App;
