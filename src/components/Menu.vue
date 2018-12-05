<template>
  <div>
    <div class="col-md-2 menu p-0">
      <div class="title">
        <p class="titulo">Cantauco</p>
      </div>
      <select class="combo" name="cosa" onchange="cambia()" required>
        <option value="0">Seleccione empresa</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <div class="tab">
        <button class="tablinks" onclick="openCity(event, 'Reclamos')">Reclamos</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.menu {
  background-color: white;
  height: 150vh;
  font-size: 30px;
  border-style: inset;
  max-width: 15%;
}
.title {
  background-color: darkred;
  font-size: 15;
  text-transform: uppercase;
  color: white;
}
.combo {
  font-family: initial;
  border: 3px solid whitesmoke;
  background-color: white;
  color: black;
  font-size: 17px;
  width: 175px;
  height: 35px;
}
.combo:hover {
  background: whitesmoke;
  cursor: pointer;
  transition: all 0.5s ease;
}
.tab {
  float: left;
  border: 0px solid white;
  background-color: #ffffff;
  padding: 5px, 40px;
  margin-left: 20px ;
}
.tab button {
  display: block;
  background-color: inherit;
  color: black;
  padding: 5px 22px;
  border: none;
  outline: none;
  text-align: left;
  cursor: pointer;
  transition: 0.3s;
  font-family: initial;
  font-size: 25px;
}
.tab button:hover {
  background-color: whitesmoke;
}
.tab button.active {
  background-color: whitesmoke;
}
</style>