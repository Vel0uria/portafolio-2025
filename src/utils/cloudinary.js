// src/utils/cloudinary.js

import { CLOUD_NAME } from "../config.js";

const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}`;

/**
 * Genera URLs optimizadas para imágenes de Cloudinary
 */
export function cld(
  path
  //{ width = 1200, quality = "auto", format = "auto" } = {}
) {
  return `${BASE_URL}/image/upload/` + `${path}`;
}

export function cldThumb(path) {
  return `${BASE_URL}/image/upload/c_thumb,w_200` + `${path}`;
}

/**
 * Genera URLs optimizadas para video
 */
export function cldVideo(path, { quality = "auto" } = {}) {
  return `${BASE_URL}/video/upload/` + `${path}`;
}

//https://res.cloudinary.com/dn1i6hdch/image/upload/c_thumb,w_200,g_face/v1783484752/Nigredo/nigredo_thumbnail.png
