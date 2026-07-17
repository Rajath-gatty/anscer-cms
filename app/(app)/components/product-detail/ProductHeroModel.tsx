"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { createElement, useEffect, useState } from "react";
import { imagePath } from "../home/assets";
import type { ProductModelViewerConfig } from "./product-detail-data";

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
  style?: CSSProperties & Record<"--poster-color", string>;
  children?: React.ReactNode;
};

type ProductHeroModelProps = {
  modelUrl: string;
  fallbackImage: string;
  title: string;
  config?: ProductModelViewerConfig;
};

const defaultModelViewerConfig: Required<ProductModelViewerConfig> = {
  cameraOrbit: "-35deg 76deg 20m",
  minCameraOrbit: "auto 76deg auto",
  maxCameraOrbit: "auto 76deg auto",
  fieldOfView: "20deg",
  shadowIntensity: "1",
  toneMapping: "neutral",
  arModes: "webxr scene-viewer quick-look",
  interactionPrompt: "auto",
  interactionPromptStyle: "wiggle",
  autoplay: true,
  disableZoom: true,
  disablePan: true,
};

export function ProductHeroModel({
  modelUrl,
  fallbackImage,
  title,
  config,
}: ProductHeroModelProps) {
  const [isReady, setIsReady] = useState(false);
  const poster = `${imagePath}${fallbackImage}`;
  const viewerConfig = { ...defaultModelViewerConfig, ...config };

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
    <div className="absolute inset-0 ">
      {isReady ? (
        createElement<ModelViewerElementProps>("model-viewer", {
          src: modelUrl,
          poster,
          alt: `${title} 3D model`,
          autoplay: viewerConfig.autoplay,
          "camera-controls": true,
          "disable-zoom": viewerConfig.disableZoom,
          "disable-pan": viewerConfig.disablePan,
          "ar-modes": viewerConfig.arModes,
          "tone-mapping": viewerConfig.toneMapping,
          "shadow-intensity": viewerConfig.shadowIntensity,
          "camera-orbit": viewerConfig.cameraOrbit,
          "min-camera-orbit": viewerConfig.minCameraOrbit,
          "max-camera-orbit": viewerConfig.maxCameraOrbit,
          "field-of-view": viewerConfig.fieldOfView,
          "interaction-prompt": viewerConfig.interactionPrompt,
          "interaction-prompt-style": viewerConfig.interactionPromptStyle,
          style: {
            width: "50%",
            height: "100%",
            margin: "0 auto",
            display: "block",
            backgroundColor: "transparent",
            "--poster-color": "transparent",
          },
        })
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
