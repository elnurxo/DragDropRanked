let colorBoxes = document.querySelectorAll(".item");
let dropZones = document.querySelectorAll(".drop-zone");
let currentDrag;
colorBoxes.forEach((colorBox)=>{
    colorBox.addEventListener("dragstart",function(e){
        currentDrag = e.target;
    })
    colorBox.addEventListener("dblclick",function(){
        const unRankedZone = document.querySelector("#unranked-drop-zone");
        if (unRankedZone!==this.parentNode) {
            unRankedZone.append(this);
        }
    });
})

dropZones.forEach((dropZone)=>{
    dropZone.addEventListener("drop",function(e){
        if (this !== currentDrag.parentNode) {
            this.appendChild(currentDrag);
        }
    });

    //prevent default for drag over event
    dropZone.addEventListener("dragover",function(e){
        e.preventDefault();
    });
})
