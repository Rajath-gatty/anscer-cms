"use client";

import Image from "next/image";
import { createElement, useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { imagePath } from "../home/assets";

type ModelViewerElementProps = {
  src: string;
  poster: string;
  alt: string;
  autoplay?: boolean;
  "camera-controls"?: boolean;
  "disable-zoom"?: boolean;
  "disable-pan"?: boolean;
  "ar-modes"?: string;
  "tone-mapping"?: string;
  "shadow-intensity"?: string;
  "camera-orbit"?: string;
  "min-camera-orbit"?: string;
  "max-camera-orbit"?: string;
  "field-of-view"?: string;
  "interaction-prompt"?: string;
  "interaction-prompt-style"?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
};

type ProductHeroModelProps = {
  modelUrl: string;
  fallbackImage: string;
  title: string;
};

export function ProductHeroModel({ modelUrl, fallbackImage, title }: ProductHeroModelProps) {
  const [isReady, setIsReady] = useState(false);
  const poster = `${imagePath}${fallbackImage}`;

  useEffect(() => {
    let cancelled = false;

    import("@google/model-viewer").then(() => {
      if (!cancelled) {
        setIsReady(true);
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="absolute inset-0">
      {isReady ? (
        createElement<ModelViewerElementProps>(
          "model-viewer",
          {
            src: modelUrl,
            poster,
            alt: `${title} 3D model`,
            autoplay: true,
            "camera-controls": true,
            "disable-zoom": true,
            "disable-pan": true,
            "ar-modes": "webxr scene-viewer quick-look",
            "tone-mapping": "neutral",
            "shadow-intensity": "1",
            "camera-orbit": "-35deg 76deg 4.8m",
            "min-camera-orbit": "auto 76deg auto",
            "max-camera-orbit": "auto 76deg auto",
            "field-of-view": "36deg",
            "interaction-prompt": "auto",
            "interaction-prompt-style": "basic",
            style: { width: "100%", height: "100%", display: "block" },
          },
        )
      ) : (
        <div className="relative size-full">
          <Image
            src={poster}
            alt={title}
            fill
            priority
            sizes="(max-width: 1024px) 90vw, 760px"
            className="object-contain drop-shadow-[0_26px_44px_rgba(1,31,64,.16)]"
          />
        </div>
      )}
    </div>
  );
}
