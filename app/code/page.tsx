"use client";

import CodeEditor from "@/components/CodeEditor/CodeEditor";
import Navbar from "@/components/Navbar/Navbar";
import Output from "@/components/Output/Output";
import Ribbon from "@/components/Ribbon/Ribbon";
import RunCodeButton from "@/components/RunCodeButton/RunCodeButton";
import { useState } from "react";

const defaultPythonCode = `print("Hello, world!")`;

const CodePage = () => {
  const [code, setCode] = useState<string>(defaultPythonCode);
  const [output, setOutput] = useState<string>("");

  return (
    <>
      <Navbar />
      <Ribbon />
      <CodeEditor code={code} onCodeChange={setCode} />
      <div>
        <RunCodeButton code={code} onOutput={setOutput} />
      </div>
      <Output output={output} />
    </>
  );
};

export default CodePage;
