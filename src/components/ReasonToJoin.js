import reasonToJoinData from "../api/reasonsToJoinData.json"

export const reasonToJoinCards = async (containerId) => {
    containerId.innerHTML = ""
    let reasoncCards = ""

    for (const item of reasonToJoinData) {
        const {title, content, svgIcon} = item
        let svgContent =  await loadSVG(svgIcon)

        reasoncCards += `<div class="bg-[linear-gradient(149deg,_#192247_0%,_#210e17_99.08%)] rounded-2xl">
          <div class="h-full flex flex-col gap-4 px-4 py-6">
            <h3 class="xl:text-2xl text-xl font-medium text-white">${title}</h3>
            <p class="grow text-semi-white">${content}</p>
            <div class="self-end">
              ${svgContent}
            </div>
          </div>
        </div>`    
    }
    containerId.innerHTML = reasoncCards
}


async function loadSVG (svgUrl) {
  try {
    const response = await fetch(svgUrl)
    return await response.text()
  } catch (error) {
    console.log(error);
  }
}

