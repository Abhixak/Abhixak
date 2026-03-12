import { NextRequest } from "next/server";

const SCREENSHOT_ENDPOINT = "https://api.screenshotone.com/take";
const DEFAULT_IMAGE_WIDTH = 1200;
const DEFAULT_IMAGE_HEIGHT = 675;
const DEFAULT_VIEWPORT_WIDTH = 1280;
const DEFAULT_VIEWPORT_HEIGHT = 720;
const MAX_IMAGE_DIMENSION = 2000;
const MIN_IMAGE_DIMENSION = 320;

const clampNumber = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export async function GET(request: NextRequest) {
  const accessKey = process.env.SCREENSHOTONE_API_KEY;
  if (!accessKey) {
    return new Response("Missing SCREENSHOTONE_API_KEY", { status: 500 });
  }

  const { searchParams } = new URL(request.url);
  const target = searchParams.get("url");
  if (!target) {
    return new Response("Missing url", { status: 400 });
  }

  let targetUrl: URL;
  try {
    targetUrl = new URL(target);
  } catch {
    return new Response("Invalid url", { status: 400 });
  }

  if (!["http:", "https:"].includes(targetUrl.protocol)) {
    return new Response("Invalid protocol", { status: 400 });
  }

  const imageWidth = clampNumber(
    Number.parseInt(searchParams.get("w") ?? `${DEFAULT_IMAGE_WIDTH}`, 10),
    MIN_IMAGE_DIMENSION,
    MAX_IMAGE_DIMENSION
  );
  const imageHeight = clampNumber(
    Number.parseInt(searchParams.get("h") ?? `${DEFAULT_IMAGE_HEIGHT}`, 10),
    MIN_IMAGE_DIMENSION,
    MAX_IMAGE_DIMENSION
  );

  const params = new URLSearchParams({
    access_key: accessKey,
    url: targetUrl.toString(),
    format: "jpg",
    image_width: `${imageWidth}`,
    image_height: `${imageHeight}`,
    viewport_width: `${DEFAULT_VIEWPORT_WIDTH}`,
    viewport_height: `${DEFAULT_VIEWPORT_HEIGHT}`,
    cache: "true",
    cache_ttl: "604800",
  });

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);

  let upstream: Response;
  try {
    upstream = await fetch(`${SCREENSHOT_ENDPOINT}?${params.toString()}`, {
      method: "GET",
      signal: controller.signal,
    });
  } catch {
    return new Response("Screenshot request timed out", { status: 504 });
  } finally {
    clearTimeout(timeout);
  }

  if (!upstream.ok) {
    const errorBody = await upstream.text();
    return new Response(errorBody || "Screenshot request failed", {
      status: upstream.status,
    });
  }

  return new Response(upstream.body, {
    status: upstream.status,
    headers: {
      "Content-Type": upstream.headers.get("Content-Type") ?? "image/jpeg",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
