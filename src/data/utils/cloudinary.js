// src/utils/cloudinary.js

import { CLOUD_NAME } from "../config.js";

const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}`;

/**
 * Genera URLs optimizadas para imágenes de Cloudinary
 */
export function cld(
  path,
  { width = 1200, quality = "auto", format = "auto" } = {}
) {
  return (
    `${BASE_URL}/image/upload/` +
    `f_${format},q_${quality},w_${width}/` +
    `${path}`
  );
}

/**
 * Genera URLs optimizadas para video
 */
export function cldVideo(path, { quality = "auto" } = {}) {
  return `${BASE_URL}/video/upload/` + `q_${quality}/` + `${path}`;
}
