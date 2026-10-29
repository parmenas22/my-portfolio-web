"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ArchitectureDiagramPreviewProps = {
  src: string;
  alt: string;
};

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;

export default function ArchitectureDiagramPreview({
  src,
  alt,
}: ArchitectureDiagramPreviewProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [zoom, setZoom] = useState(MIN_ZOOM);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen]);

  function closePreview() {
    setIsOpen(false);
    setZoom(MIN_ZOOM);
  }

  function handleWheel(event: React.WheelEvent<HTMLDivElement>) {
    event.preventDefault();
    const zoomFactor = Math.exp(-event.deltaY * 0.001);
    setZoom((current) =>
      Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, current * zoomFactor)),
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open architecture diagram preview"
        className="relative mt-4 block aspect-video w-full overflow-hidden rounded-xl border border-line bg-card focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-contain p-2 transition-transform duration-200 hover:scale-[1.02]"
        />
        <span className="absolute bottom-3 right-3 rounded-full bg-background/90 px-3 py-1.5 text-xs font-medium text-foreground shadow-sm">
          Click to preview
        </span>
      </button>

      <dialog
        ref={dialogRef}
        aria-labelledby="architecture-preview-title"
        onClose={closePreview}
        onClick={(event) => {
          if (event.target === event.currentTarget) closePreview();
        }}
        className="m-0 h-dvh max-h-none w-screen max-w-none border-0 bg-background p-0 text-foreground backdrop:bg-black/80"
      >
        <div className="flex h-full flex-col">
          <header className="flex items-center justify-between gap-4 border-b border-line px-4 py-3 sm:px-6">
            <h2
              id="architecture-preview-title"
              className="truncate text-sm font-medium"
            >
              Architecture diagram
            </h2>
            <div className="flex shrink-0 items-center">
              <button
                type="button"
                onClick={closePreview}
                aria-label="Close architecture diagram preview"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-lg"
              >
                ×
              </button>
            </div>
          </header>

          <div
            onWheel={handleWheel}
            className="flex min-h-0 flex-1 items-center justify-center overflow-auto p-4 sm:p-6"
          >
            <div
              className="relative shrink-0"
              style={{ width: `${zoom * 100}%`, height: `${zoom * 100}%` }}
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="300vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
