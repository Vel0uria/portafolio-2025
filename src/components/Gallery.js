import { cld, cldVideo } from "../utils/cloudinary.js";

img.src = cld(work.media.thumbnail, {
  width: 400
});

video.src = cldVideo(work.media.video);
