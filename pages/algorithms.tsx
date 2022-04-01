import { CodeIcon } from "@heroicons/react/solid";
import axios from "axios";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import monokai from "react-syntax-highlighter/dist/cjs/styles/hljs/monokai";
import { codes } from "../src/algorithms";
import { Accent } from "../src/components/accent";
import { Page } from "../src/components/page";
import { Pill } from "../src/components/pill";

const isProd = process.env.NODE_ENV == "production";

export const getServerSideProps: GetServerSideProps = async () => {
  const challengeCode = await axios
    .get<string>(
      (isProd ? `https://riansaunders.com` : `http://localhost:3000`) +
        "/code/" +
        codes[0].file
    )
    .then((r) => r.data);
  return {
    props: { challengeCode },
  };
};

export default function AlgorithmsPage({
  challengeCode,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [selectedAlgoIndex, setSelectedAlgoIndex] = useState(0);
  const [codeContent, setCodeContent] = useState(challengeCode);

  const selectedAlgo = codes[selectedAlgoIndex];

  useEffect(() => {
    const sc = codes[selectedAlgoIndex];
    axios
      .get("/code/" + sc.file)
      .then((r) => r.data)
      .then((c) => setCodeContent(c));
  }, [selectedAlgoIndex]);
  return (
    <Page>
      <div className={"mt-8"}>
        <Accent color={"4bacfc"} />

        <h2 className={"text-3xl font-semibold"}>
          <CodeIcon
            className={"w-7 h-7 pr-0 inline text-[#4bacfc] relative -top-0.5"}
          />
          Algorithms
        </h2>
      </div>
      <p className={"mt-2  text-white/60"}>
        Solving challenges and creating algorithms is one of my favorite
        pastimes. I have{" "}
        <a
          href="https://github.com/riansaunders/coding-challenges"
          className={"underline text-white/80 "}
        >
          an entire list
        </a>{" "}
        on my{" "}
        <a
          href="https://github.com/riansaunders"
          className={"underline text-white/80"}
        >
          GitHub Page.
        </a>
      </p>

      <div className={"mt-8"}>
        <select
          className={"rounded-md   text-gray-300 bg-[#201B22] p-3 "}
          value={selectedAlgoIndex}
          onChange={(e) => setSelectedAlgoIndex(Number(e.target.value))}
        >
          {codes.map((code, idx) => {
            return (
              <option value={idx} key={`co-${idx}`}>
                {code.name}
              </option>
            );
          })}
        </select>
        <div className={"my-3"}>
          {selectedAlgo.topics.map((t, i) => {
            return <Pill text={t} key={`topic-${selectedAlgo.name}-${i}`} />;
          })}
        </div>

        <p className={"mt-4 uppercase text-sm text-semibold"}>Prompt:</p>
        <p
          className={"mt-2 text-sm p-1.5"}
          dangerouslySetInnerHTML={{
            __html: selectedAlgo.description,
          }}
        ></p>
        <div className={"mt-3"} />
        <div className={"max-h-[60vh] overflow-auto"}>
          <div>
            <SyntaxHighlighter language="python" style={monokai} wrapLines>
              {codeContent}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </Page>
  );
}
