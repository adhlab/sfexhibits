"use client";

import { useCallback, useSyncExternalStore } from "react";

const CAPTION_STORAGE_KEY = "scott-ford:captions-enabled:v1";
const CAPTION_EVENT = "scott-ford:caption-preference";

export function useCaptionPreference() {
  const captionsEnabled = useSyncExternalStore(
    (onStoreChange) => {
      window.addEventListener(CAPTION_EVENT, onStoreChange);
      window.addEventListener("storage", onStoreChange);
      return () => {
        window.removeEventListener(CAPTION_EVENT, onStoreChange);
        window.removeEventListener("storage", onStoreChange);
      };
    },
    () => {
      try {
        return window.localStorage.getItem(CAPTION_STORAGE_KEY) === "on";
      } catch {
        return false;
      }
    },
    () => false,
  );

  const setCaptionPreference = useCallback((enabled: boolean) => {
    try {
      window.localStorage.setItem(CAPTION_STORAGE_KEY, enabled ? "on" : "off");
    } catch {
      // The in-page preference still works without storage.
    }
    window.dispatchEvent(new CustomEvent<boolean>(CAPTION_EVENT, { detail: enabled }));
  }, []);

  const toggleCaptions = useCallback(() => setCaptionPreference(!captionsEnabled), [captionsEnabled, setCaptionPreference]);
  return { captionsEnabled, setCaptionPreference, toggleCaptions };
}

type CaptionedAudioProps = {
  src: string;
  ariaLabel: string;
  caption: string;
  autoPlay?: boolean;
  onPlay?: (element: HTMLAudioElement) => void;
};

export function CaptionedAudio({ src, ariaLabel, caption, autoPlay = false, onPlay }: CaptionedAudioProps) {
  const { captionsEnabled, toggleCaptions } = useCaptionPreference();
  return (
    <div className="captioned-audio">
      <audio controls autoPlay={autoPlay} preload="metadata" src={src} aria-label={ariaLabel} onPlay={(event) => onPlay?.(event.currentTarget)} />
      <button className="caption-toggle" type="button" aria-pressed={captionsEnabled} onClick={toggleCaptions}>
        {captionsEnabled ? "Hide captions" : "Show captions"}
      </button>
      {captionsEnabled && <p className="audio-caption" role="status">{caption}</p>}
    </div>
  );
}
