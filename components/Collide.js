AFRAME.registerComponent("flying-bird",{
    createBird:(id,pos)=>{
        var terrainEl = document.querySelector("#terrain")
        var birdEl = document.createElement("a-entity")
        birdEl.setAttribute("id", id)
        birdEl.setAttribute("position",pos)
        birdEl.setAttribute("scale",{
            x:500,
            y:500,
            z:500
        })
        birdEl.setAttribute("gltf","./assets/models/flying_bird/scene.gtlf")
        birdEl.setAttribute("animation-mixer",{
            
        })
        terrainEl.appendChild(birdEl)
    },

    init:function(){
        for(i=1;i<=20;i++){
            var id =  `bird${i}`
            var posX = Math.floor(Math.random() * 3000 + -1000)
            var posY = Math.floor(Math.random()*2 + -1);
            var posZ = Math.floor(Math.random() *3000 + -1000)
            var pos = {
                x:posX,
                y:posY,
                z:posZ
            }
            this.createBird(id,pos)
        }
    }
})