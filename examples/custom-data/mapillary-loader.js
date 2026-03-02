/**
 * Unified Mapillary module loader with local-first + CDN fallback.
 * This keeps the app working in local dev and Vercel deploys.
 */
const mapillaryModule = await (async () => {
  const candidates = [
    "/dist/mapillary.module.js",
    "https://unpkg.com/mapillary-js@5.0.0-beta.5/dist/mapillary.module.js",
  ];
  let lastError = null;
  for (const url of candidates) {
    try {
      return await import(/* @vite-ignore */ url);
    } catch (err) {
      lastError = err;
    }
  }
  throw lastError || new Error("Could not load mapillary.module.js");
})();

export const Viewer = mapillaryModule.Viewer;
export const DataProviderBase = mapillaryModule.DataProviderBase;
export const S2GeometryProvider = mapillaryModule.S2GeometryProvider;

