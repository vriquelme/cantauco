<template>
  <transition name="modal">
   <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <div class="no-padding container align-self-center">
                <div class="padding-login row">
                  <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 pr-4">
                    <p class="title"><b>¡Bienvenido!</b></p>
                    <p class="message">Por favor ingresa tu Rut y Contraseña</p>
                    <br/>
                  </div>
                  <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <p class="message" >Ingresa tu RUT</p>
                    <div class="input-group input-search text-search">
                      <input ref='rutInput' class="form-control form-control-sm message" type="text" aria-label="Search" maxlength="12">
                    </div>
                    <p class="message" >Contraseña</p>
                    <div class="input-group input-search text-search">
                      <input ref='rutInput' class="form-control form-control-sm message" type="text" aria-label="Search"  maxlength="12">
                    </div>
                    <br/>
                  </div>
                  <div class="col-6 col-sm-6 col-md-6 align-self-center">
                    <img class="img-pepita" src="../assets/img/logo.jpg" />
                  </div>
                  <div class="col-12 col-sm-12 col-md-12 div-search text-left">
                    <br/>
                    <button type="button" class="btn btn-sm btn-search btn-secondary">Ingresar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<style scoped>
.modal-mask {
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: table;
  transition: opacity .3s ease;
  background-image: url("../assets/img/fondo.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.modal-content{
  background-color: rgba(255, 255, 255, 0.8);
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
.modal-body {
  padding-left: 0rem;
  padding-right: 0rem;
  margin: 0 0 0 0;
}
.edit-message{
  font-size: 1.125rem;
  text-align: left;
  color: var(--text-secondary);
}

.no-padding {
  padding: 0rem 0rem 0rem 0rem;
}
.modal-container {
  margin: 0px auto;
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0rem 0.625rem 1.23rem 0rem rgba(0, 0, 0, 0.15);
  transition: all .3s ease;
  color: #fff;
}
@media (min-width: 1200px) {
  .modal-container {
    width: 34.63rem;
    min-height: 25.25rem;
  }
  .padding-login{
    padding-top: 1.313rem;
    padding-left: 2.125rem;
    padding-bottom: 2.125rem;
  }
  .img-pepita{
    max-width: 90%;
  }
}
@media (min-width: 768px) and (max-width: 1199px){
  .modal-container {
    width: 34.625rem;
    min-height: 25.25rem;
  }
  .img-pepita{
    max-width: 90%;
  }
  .padding-login{
    padding-top: 1.313rem;
    padding-left: 1.313rem;
    padding-right: 0;
    padding-bottom: 2.125rem;
  }
}
@media (max-width: 767px) {
  .modal-container {
    width: 90vw;
    min-height: 30.9375rem;
  }
  .padding-login{
    padding-top: 1.313rem;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 2.125rem;
  }
  .img-pepita{
    display: none;
  }
}

*::-webkit-input-placeholder {
  color: var(--secondary-color);
  font-size: 1rem;
  font-style: italic;
}
*:-moz-placeholder {
    /* FF 4-18 */
  color: var(--secondary-color);
  font-size: 1rem;
  font-style: italic;
}
*::-moz-placeholder {
    /* FF 19+ */
  color: var(--secondary-color);
  font-size: 1rem;
  font-style: italic;
}
*:-ms-input-placeholder {
    /* IE 10+ */
  color: var(--secondary-color);
  font-size: 1rem;
  font-style: italic;
}

.title{
  font-size: 1.5rem;
  color: var(--text-primary);
  text-align: left;
  letter-spacing: 0.05em;
  padding-bottom:  1rem
}
.message{
  font-size: 0.875rem;
  color: var(--text-secondary);
  text-align: left;
}
.title-input{
  font-size: 0.75rem;
  color: var(--text-secondary);
  text-align: left;
  font-weight: bold;
}
.input-search{
  width: 100%;
  border: 0.0625rem solid rgba(185, 185, 185, 1);
  border-radius: 0.25rem;
  color :var(--text-secondary);
}
.txt-searching{
  border: none;
  font-size: 1rem;
  color :var(--text-secondary);
  height: 100% !important;
  border: none;
  margin-right: 0.3125rem !important;
}
.btn-search {
  background-color: var(--primary-color);
  font-size: 1rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  text-align: left;
  letter-spacing: 0.06em;
  margin-left: 0.85rem;
}
.btn-cancel{
  background-color: var(--text-secondary);
  border-color: var(--text-secondary);
  font-size: 1rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  text-align: left;
  letter-spacing: 0.06em;
  margin-left: 0.85rem;
}
.text-search{
  margin-right: 0.3125rem !important;
  height: 2.125rem;
}
.div-search{
  padding-left: 0px !important;
}
.v-select .selected-tag {
  width: 80%;
}
</style>
