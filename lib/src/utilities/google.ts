import { defineUtility } from "./utilities"


export const GoogleMapsBaseURL: string = "https://maps.google.com/maps" as const 

export type GoogleMapsEmbedOptions = {
  latitude: number;
  longitude: number;
} & Partial<{ width: string; height: string; zoom: number }>;

export function createGoogleMapsEmbedURL(
  options: GoogleMapsEmbedOptions
): string {
  const {
    latitude,
    longitude,
    width = "100%",
    height = "600",
    zoom = 14,
  } = options;

  const queryParameters = new URLSearchParams({
    q: `${latitude},${longitude}`,
    hl: "en",
    t: "",
    z: zoom.toString(),
    iwloc: "B",
    output: "embed",
 
  });

  return `${GoogleMapsBaseURL}?${queryParameters.toString()}`;
}
