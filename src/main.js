import { renderGallery } from "./components/Gallery";
import { loadWorks } from "./utils/fetchWorks";

async function init() {
  const works = await loadWorks();
  renderGallery(works);
}

init();
