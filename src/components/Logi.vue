<template>
  <div>
    <div class="login">
      <form>
        <div class="container">
          <img src="src/assets/img/usuario.png" width="50" height="50">
          <b></b>
          <label for="usuario">Usuario</label>
          <input class="text" type="text" placeholder="Digite su Usuario" autofocus required>
          <label for="contraseña">Contraseña</label>
          <input class="text" type="password" placeholder="Digite contraseña" required>
          <button type="submit" class="btn-ingresar">Ingresar</button>
          <a href="#">Olvidaste tu contraseña?</a>
          <a href="#">Registrarse?</a>
        </div>
      </form>
    </div>
    <footer class="row">
      <div class="col-xs-12">
        <div class="footer">
          <h2>Inmobiliaria Cantauco</h2>
        </div>
      </div>
    </footer>
  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}
img {
  text-align: center;
}
.login {
  min-height: 450 px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.container {
  position: absolute;
  right: 150px;
  margin: 20px;
  max-width: 300px;
  padding: 16px;
  background: #fff;
  border-radius: 20px;
  opacity: 0.9;
}
.login .container .text {
  width: 100%;
  padding: 13px;
  margin: 5px 0 22px 0;
  border: none;
  background: #f1f1f1;
  font-size: 15px;
}
.btn-ingresar {
  background: #4caf50;
  color: #fff;
  padding: 13px 20px;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  border-radius: 10px;
  transition: all 0.5s ease;
  font-family: Roboto;
}
.btn-ingresar:hover {
  background: salmon;
  cursor: pointer;
}
* {
  text-decoration: none;
}
footer {
  display: table;
  justify-content: right;
  align-items: right;
  background-color: lightgrey;
  width: 98.4%;
  height: 100%;
  padding-left: 20px;
  color: gray;
}
</style>


