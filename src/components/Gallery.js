import { cld, cldThumb, cldVideo } from "../utils/cloudinary.js";

export function renderGallery(works) {
  const gallery = document.querySelector("#gallery");
  works.forEach(work => {
    const card = document.createElement("article");
    card.classList.add("work-card");

    card.innerHTML = `
      <img
        src="${cldThumb(work.media.thumbnail)}"
        alt="${work.nombre}"
      >

      <h2>${work.nombre}</h2>

      <p>${work.fecha}</p>
    `;

    gallery.appendChild(card);
  });
}

//nigredoImg.src = cldThumb("v1783392353/Nigredo/nigredo_thumbnail.png");

//video.src = cldVideo(work.media.video);

//https://res.cloudinary.com/dn1i6hdch/image/upload/c_thumb,w_200,g_face/v1783392353/Nigredo/nigredo_thumbnail.png
