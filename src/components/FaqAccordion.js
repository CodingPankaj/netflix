import faqData from "../api/faqData.json"

export const FaqAccordion = (faqContainer) => {
    faqContainer.innerHTML = ""

    faqData.forEach(item => {
        const { title, content } = item;

        faqContainer.innerHTML += `<li class="faq-item mb-2 flex flex-col">
          <h3>
            <button class="faq-btn text-left" aria-expanded="false">
            ${title}<span class="faq-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 11V2H13V11H22V13H13V22H11V13H2V11H11Z" fill="currentColor"/></svg></span>
            </button>
          </h3>
          <div class="faq-content">
            <p class="p-6">${content}</p>
          </div>
        </li>`
  })


  const faqItems = faqContainer.querySelectorAll(".faq-item")
  
  faqItems.forEach(faqItem => {
    const faqBtn = faqItem.querySelector(".faq-btn")
    const faqContent = faqItem.querySelector(".faq-content")
    const faqIcon = faqItem.querySelector(".faq-icon")

    faqBtn.addEventListener("click", () => {
        const isExpanded = faqBtn.getAttribute("aria-expanded") === "true";

        faqItems.forEach(item => {
            const btn = item.querySelector(".faq-btn")
            const content = item.querySelector(".faq-content")
            const icon = item.querySelector(".faq-icon")

            btn.setAttribute("aria-expanded", "false")
            content.style.maxHeight = null
            icon.classList.remove("rotate-45") 
        })

        if(!isExpanded) {
            faqBtn.setAttribute("aria-expanded", "true")
            faqContent.style.maxHeight = `${faqContent.scrollHeight}px`
            faqIcon.classList.add("rotate-45")   
        }
    })

  })

}