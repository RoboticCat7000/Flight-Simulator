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
        birdEl.setAttribute("gltf-model","./assets/models/flying_bird/scene.gltf")
        birdEl.setAttribute("animation-mixer",{
            
        })
        birdEl.setAttribute("static-body",{
            shape:"sphere",
            sphereRadius:5
        })
        birdEl.setAttribute("game-play",{
            elementId:`${id}`
        })
        terrainEl.appendChild(birdEl)
    },

    init:function(){
        for(var i=1;i<=20;i++){
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