<template>
  <div class="slider-design">
    <div class="container">
      <div class="row">
        <div class="slider-text col-lg-6 col-md-12 col-sm-12">
          <h1 class="text-center animation-text">Hi, My Name is Hüseyin</h1>

          <p class="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            quibusdam repellat atque?
          </p>
          <center>
            <RouterLink to="/about" class="btn btn-slider">About Me</RouterLink>
          </center>
        </div>
        <div class="slider-img-design mt-5 col-lg-6 col-md-12 col-sm-12">
          <center>
            <img
              src="../assets/service-img-2.png"
              class="slider-img-design"
              alt=""
            />
          </center>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.slider-design {
  width: 100%;
  height: 520px;
  background: rgb(173, 121, 136);
  background: linear-gradient(
    50deg,
    #4d9996,
    #467e86,
    #375e80,
    #124858,
    #0f2e47
  );
}
.slider-text {
  padding-top: 100px;
  color: white;
}

@media only screen and (max-width: 600px) {
  .slider-img-design {
    text-align: center !important;
    width: 320px;
    height: auto;
  }

  .slider-design {
    width: 100%;
    height: 620px;
  }
}

@media only screen and (min-width: 601px) and (max-width: 999px) {
  .slider-img-design {
    text-align: center !important;
    width: 320px;
    height: auto;
    margin-left: 90px;
  }

  .slider-design {
    width: 100%;
    height: 540px;
  }
}

.btn-slider {
  background-color: rgb(181, 66, 125);
  color: #fff;
  padding: 10px 40px 10px 40px;
}

.btn-slider:hover {
  background-color: #fff;
  color: rgb(181, 66, 125);
  border: 2px solid rgb(181, 66, 125);
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.animation-text {
  overflow: hidden; /* İçeriğin taşmasını engeller */
  white-space: nowrap; /* Metni tek satırda tutar */
  border-right: 2px solid #FFF; /* İmleci temsil eder */
  animation: typing 4s steps(40); /* Animasyon adı, süre ve adım sayısı */
}


</style>