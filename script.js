document.querySelectorAll(".accordion-question").forEach((item) => {
    item.addEventListener("click", (event) => {
        console.log("click"); 
        let accCollapse = item.nextElementSibling;

        if(!item.classList.contains("collapsing")){
            if(!item.classList.contains("open")){
                console.log("toggle accordion-button");  
            
                accCollapse.style.display = "block"; 
                let accHeight = accCollapse.clientHeight; 
                console.log("accHeight"); 
    
                setTimeout(() => {
                    accCollapse.style.height= accHeight + 'px';
                    accCollapse.style.display = ''; 
                }, 1); 
            
                accCollapse.classList = "accordion-collapse.collapsing"; 
    
                setTimeout(() => {
                    console.log("open accordion content"); 
                    accCollapse.classList = "accordion-collapse collapse open"; 
                }, 300);
            }
            else {
                accCollapse.classList = "accordion-collapse.collapsing";
                
                setTimeout(() => {
                    accCollapse.style.height = '0px'; 
                }, 1); 
    
                setTimeout(() => {
                    console.log("open accordion content"); 
                    accCollapse.classList = "accordion-collapse collapse"; 
                    accCollapse.style.height = ''; 
                }, 300); 
            }
    
            item.classList.toggle("open"); 

        }
    });
} ); 