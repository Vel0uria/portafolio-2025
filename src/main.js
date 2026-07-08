import { renderGallery } from "./components/Gallery.js";
import { loadWorks } from "./utils/fetchWorks.js";

async function init() {
  const works = await loadWorks();
  renderGallery(works);
}

init();
