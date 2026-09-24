"use client";

import { useRef, useState } from "react";

type Props = {
  src: string;
  title: string;
  className?: string;
  children: React.ReactNode;
  /** Muted clips play without sound; films keep their audio. */
  muted?: boolean;
};

/** A button that opens a native <dialog> with the video. The player is only created on request. */
export default function VideoDialog({ src, title, className, children, muted = false }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState(false);

  const open = () => {
    setActive(true);
    ref.current?.showModal();
  };
  const close = () => {
    ref.current?.close();
  };

  return (
    <>
      <button type="button" className={className} onClick={open} aria-haspopup="dialog">
        {children}
      </button>
      <dialog
        ref={ref}
        className="video-dialog"
        aria-label={title}
        onClose={() => setActive(false)}
        onClick={(e) => {
          if (e.target === ref.current) close();
        }}
      >
        <div className="video-dialog__inner">
          <div className="video-dialog__top">
            <p className="eyebrow">{title}</p>
            <button type="button" className="icon-btn" onClick={close} aria-label="Close video">
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden><path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.8" /></svg>
            </button>
          </div>
          {active && (
            <video className="video-dialog__video" src={src} controls autoPlay playsInline muted={muted} preload="auto" />
          )}
        </div>
      </dialog>
    </>
  );
}
