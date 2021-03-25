const allBtn = document.querySelectorAll(".contLigne"); 

allBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        console.log ("Hello"); 
        btn.classList.toggle("active"); 
    })
})