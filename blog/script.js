
let elem = document.getElementsByClassName('more-btn');

for(let node of elem){
    node.addEventListener('click',()=>{
        let s = node.id;
        const id = s[s.length-1];
        const moreButton = document.getElementById(`show-more-${id}`);
        const moreContent = document.getElementById(`moreText-${id}`);
        const dots = document.getElementById(`dots-${id}`);

        if(dots.style.display === "inline" || !dots.style.display){
            moreContent.style.display = "inline";
            dots.style.display = "none";
            moreButton.innerHTML = "Show Less"; 
        }
        else{
            moreContent.style.display = "none";
            dots.style.display = "inline";
            moreButton.innerHTML = "Show More"; 
        }
    });
}
