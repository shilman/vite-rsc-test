import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// const SyncComp = () => {
//   console.log("SyncComp");
//   return "Component";
// };

const AsyncComp = async () => {
  console.log("ASyncComp");
  return "Component";
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Suspense>
    <AsyncComp />
  </Suspense>
);

ReactDOM.createRoot(document.getElementById("root-2")!).render(
  <Suspense>
    <AsyncComp />
  </Suspense>
);
