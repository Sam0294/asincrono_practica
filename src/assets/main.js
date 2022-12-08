const API =
  "https://youtube-v31.p.rapidapi.com/search?channelId=UCiBwOVBljEjcsLUjwI274Xw&part=snippet%2Cid&order=date&maxResults=9";

const content = null || document.getElementById("content");

//PARA BUSCAR ID DE CANALES DE YOUTUBE: https://commentpicker.com/youtube-channel-id.php

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a056e2223fmshbe7f44cae4e5779p1891aajsnf93884e7be1b",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(API);
    let view = `
    ${videos.items
      .map(
        (video) => `
    <div class="group relative">
    <div
      class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
    >
      <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full" />
    </div>
    <div class="mt-4 flex justify-between">
      <h3 class="text-sm text-gray-700">
        <span aria-hidden="true" class="absolute inset-0"></span>
        ${video.snippet.title}
      </h3>
    </div>
  </div>
    `
      )
      .join("")}
    `;
    content.innerHTML = view;
  } catch (error) {
    console.log(error);
  }
})();
