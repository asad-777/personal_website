"use client";

import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export default function GamePage() {
  const iframeRef = useRef(null);

  function sendKey(key, code) {
    const iframe = iframeRef.current;
    if (!iframe) return;
    const win = iframe.contentWindow;
    if (!win) return;

    ["keydown", "keyup"].forEach((type) => {
      win.dispatchEvent(
        new KeyboardEvent(type, {
          key,
          code,
          keyCode: code === "ArrowUp" ? 38
            : code === "ArrowDown" ? 40
            : code === "ArrowLeft" ? 37
            : code === "ArrowRight" ? 39
            : code === "KeyR" ? 82
            : 0,
          bubbles: true,
          cancelable: true,
        })
      );
    });
  }

  function handlePress(key, code) {
    const iframe = iframeRef.current;
    if (!iframe) return;
    const win = iframe.contentWindow;
    if (!win) return;
    win.dispatchEvent(
      new KeyboardEvent("keydown", {
        key,
        code,
        keyCode: code === "ArrowUp" ? 38
          : code === "ArrowDown" ? 40
          : code === "ArrowLeft" ? 37
          : code === "ArrowRight" ? 39
          : code === "KeyR" ? 82
          : 0,
        bubbles: true,
        cancelable: true,
      })
    );
  }

  function handleRelease(key, code) {
    const iframe = iframeRef.current;
    if (!iframe) return;
    const win = iframe.contentWindow;
    if (!win) return;
    win.dispatchEvent(
      new KeyboardEvent("keyup", {
        key,
        code,
        keyCode: code === "ArrowUp" ? 38
          : code === "ArrowDown" ? 40
          : code === "ArrowLeft" ? 37
          : code === "ArrowRight" ? 39
          : code === "KeyR" ? 82
          : 0,
        bubbles: true,
        cancelable: true,
      })
    );
  }


  return (
    <>
      <div className="min-h-screen bg-base-100 p-4 flex flex-col gap-12 items-center justify-center overflow-hidden">
    <Navbar />

        {/* Game iframe */}
        <div className="w-full lg:mt-16 mx-auto max-w-200 lg:max-w-250 aspect-3/2 shadow-2xl rounded-xl overflow-hidden">
          <iframe
            ref={iframeRef}
            src="/DungeonCrawler/index.html"
            title="Dungeon Crawler"
            className="w-full h-full block rounded-xl"
            style={{ display: "block" }}
            scrolling="no"
          />
        </div>

        {/* On-screen controls — hidden on lg+ */}
        <div className="lg:hidden flex flex-col items-center gap-2 pb-4">
          {/* Up */}
          <button
            onPointerDown={() => handlePress("ArrowUp", "ArrowUp")}
            onPointerUp={() => handleRelease("ArrowUp", "ArrowUp")}
            onPointerLeave={() => handleRelease("ArrowUp", "ArrowUp")}
            className={`btn btn-base btn-solid w-14 h-14`}
            aria-label="Up"
          >
            ▲
          </button>

          {/* Middle row: Left, R, Right */}
          <div className="flex gap-2">
            <button
              onPointerDown={() => handlePress("ArrowLeft", "ArrowLeft")}
              onPointerUp={() => handleRelease("ArrowLeft", "ArrowLeft")}
              onPointerLeave={() => handleRelease("ArrowLeft", "ArrowLeft")}
              className={`btn btn-base btn-solid w-14 h-14`}
              aria-label="Left"
            >
              ◀
            </button>

            <button
              onPointerDown={() => handlePress("r", "KeyR")}
              onPointerUp={() => handleRelease("r", "KeyR")}
              onPointerLeave={() => handleRelease("r", "KeyR")}
              className={`btn btn-base btn-solid w-14 h-14 text-error`}
              aria-label="Restart"
            >
              R
            </button>

            <button
              onPointerDown={() => handlePress("ArrowRight", "ArrowRight")}
              onPointerUp={() => handleRelease("ArrowRight", "ArrowRight")}
              onPointerLeave={() => handleRelease("ArrowRight", "ArrowRight")}
              className={`btn btn-base btn-solid w-14 h-14`}
              aria-label="Right"
            >
              ▶
            </button>
          </div>

          {/* Down */}
          <button
            onPointerDown={() => handlePress("ArrowDown", "ArrowDown")}
            onPointerUp={() => handleRelease("ArrowDown", "ArrowDown")}
            onPointerLeave={() => handleRelease("ArrowDown", "ArrowDown")}
            className={`btn btn-base btn-solid w-14 h-14`}
            aria-label="Down"
          >
            ▼
          </button>
        </div>

      </div>
      <div className="py-12"></div>
      <Footer/>
    </>
  );
}
