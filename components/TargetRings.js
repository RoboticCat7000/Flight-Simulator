AFRAME.registerComponent("target-ring", {
  createRing: function (id, pos) {
    var terrainEl = document.querySelector("#terrain");
    var ringEl = document.createElement("a-entity");
    ringEl.setAttribute("id", id);
    ringEl.setAttribute("position", pos);
    ringEl.setAttribute("material", "color", "#FF9100");
    ringEl.setAttribute("geometry", {
      primitive: "torus",
      radius: 8,
    });
    ringEl.setAttribute("static-body", {
      shape: "sphere",
      sphereRadius: 2,
    });
    ringEl.setAttribute("game-play", {
      elementId: `${id}`,
    });
    terrainEl.appendChild(ringEl);
  },

  init: function () {
    for (var i = 1; i < 20; i++) {
      var id = `ring${i}`;
      var posX = Math.floor(Math.random() * 3000 + -1000);
      var posY = Math.floor(Math.random() * 2 + -1);
      var posZ = Math.floor(Math.random() * 3000 + -1000);

      var position = {
        x: posX,
        y: posY,
        z: posZ,
      };
      this.createRing(id, position);
    }
  },
});
