
const openMenu = () => {
    const menuHamburguer = document.querySelector(".hamburguer");
    const mobileEffect = document.querySelector(".mobile-effect");
    const span1 = document.querySelectorAll(".span-hamburguer")[0];
    const span2 = document.querySelectorAll(".span-hamburguer")[1];
    const span3 = document.querySelectorAll(".span-hamburguer")[2];



    const body = document.body;

    menuHamburguer.addEventListener("click", () => {
        if (!mobileEffect.classList.contains("openMenu")) {
            mobileEffect.classList.remove("removeMenu");
            mobileEffect.classList.add("openMenu");
            body.style.overflow = "hidden"
            span1.classList.remove("off-1")
            span2.classList.remove("off-2")
            span3.classList.remove("off-3")
            span1.classList.add("effect-1")
            span2.classList.add("effect-2")
            span3.classList.add("effect-3")


        } else {
            mobileEffect.classList.remove("openMenu");
            mobileEffect.classList.add("removeMenu");
            body.style.overflow = "auto"
            span1.classList.remove("effect-1")
            span2.classList.remove("effect-2")
            span3.classList.remove("effect-3")
            span1.classList.add("off-1")
            span2.classList.add("off-2")
            span3.classList.add("off-3")
   
       
        
        }
    }); 

    const li = document.querySelectorAll(".anchor-effect")

     li.forEach((li) => {
    
       li.addEventListener("click", () => {
        mobileEffect.classList.remove("openMenu");
        mobileEffect.classList.add("removeMenu");
        body.style.overflow = "auto"
        span1.classList.remove("effect-1")
        span2.classList.remove("effect-2")
        span3.classList.remove("effect-3")
        span1.classList.add("off-1")
        span2.classList.add("off-2")
        span3.classList.add("off-3")

       })
    })


}

openMenu();


const openAccordion = () => {
  
    const accordionHeader = document.querySelectorAll(".accordion-header");

    accordionHeader.forEach((header) => {
        const nextEl = header.nextElementSibling;
     
        header.addEventListener("click", () => {
               
           if(!nextEl.classList.contains("open-accordion")){
            header.classList.remove("desactive")
            nextEl.classList.remove("close-accordion")
            nextEl.classList.add("open-accordion")
             header.setAttribute("aria-expanded", "true")
             header.classList.add("active")
             
           } else{
            nextEl.classList.add("close-accordion")
            nextEl.classList.remove("open-accordion")
            header.setAttribute("aria-expanded", "false")
            header.classList.remove("active")
            header.classList.add("desactive")
             
             
           }
            
        })

    })


}

openAccordion()


const responseModal = () => {


    const sendMessage = document.querySelector(".send-message")
    const agentResponseAnswer = document.querySelector(".response-answer-interactive")
    const userResponse = document.querySelector(".user-response")
    const agentImage = document.querySelector("#agent-image")

    sendMessage.addEventListener("click", () => {
    
        const input = document.querySelector("input").value;
        agentResponseAnswer.textContent = "";
        userResponse.textContent  = "";


        
        const responses = {
            "1": "We are a company specialized in residential and commercial services. We have more than 10 years of experience in the area.            ",
            "2": "We offer services such as: Home addition,Carpentry, Demolition,Deck, Framing service, Residential Cleaner, Window Installation",
            "3": "We are located at: 48 North Mill St Holliston - MA",
            "4": "Call for us: 774-707-0942, 508-405-6364 ",
            "5": "From Monday to Friday. 7:00am to 7:00pm ",
            
        
          };


        switch(input){
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            userResponse.textContent = input;
            agentResponseAnswer.textContent = "Wait 1 moment";
            agentResponseAnswer.classList.add("borde")
            agentImage.style.display = "block"


            if(responses[input]){
     
               setTimeout(() => {
               agentResponseAnswer.classList.add("borde")
                agentResponseAnswer.textContent = responses[input];
               },1500) 
                 
                        
            } break;        
             default: 
             agentResponseAnswer.textContent = "Invalid number"
             agentResponseAnswer.classList.add("borde")
             agentImage.style.display = "block"
    
    }  
       
    



}) 
   




 
}

responseModal()


const closeModalInteractive = () => {
    
    const showModal = document.querySelector("#icon-up")
    const close = document.querySelector(".close-interactive");
    const modalContainer = document.querySelector(".company-answer-container");


    close.addEventListener("click", () => {
        
        modalContainer.classList.remove("open-modal-interactive")
        showModal.classList.remove("rotate-item-close")
        showModal.classList.add("rotate-item-up")
      

    })


    // control modal interactive

    
   
   

    showModal.addEventListener("click", () => { 

        if(!modalContainer.classList.contains("open-modal-interactive")){
            
        modalContainer.classList.remove("close-modal-interactive")
          modalContainer.classList.add("open-modal-interactive")
          showModal.classList.add("rotate-item-close")
          showModal.classList.remove("rotate-item-up")
        } else{
            modalContainer.classList.remove("open-modal-interactive")
            modalContainer.classList.add("close-modal-interactive")
              showModal.classList.remove("rotate-item-close")
          showModal.classList.add("rotate-item-up")
        }
      

    })
}

    
  

       
   
closeModalInteractive()



const voltarPaginaInicial = () => {
    const logo = document.querySelector(".logo")

    logo.addEventListener("click", () => {
        window.location.href = "index.html"
    })
}

voltarPaginaInicial()