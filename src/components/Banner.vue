<template>
  <div class="container-fluid banner-design">
    <div class="row">
      <h1 class="text-center banner-text-design">
        <i class="fas fa-phone-volume"></i> Hello, you can call us anytime
      </h1>
      <div class="banner-btn-design">
        <a href="tel:" class="btn btn-xs btn-banner"
          ><i class="fas fa-hand-point-right"></i> Call Us</a
        >
      </div>
    </div>
  </div>


</template>

<script>
export default {};
</script>

<style scoped>
.banner-design {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #559e86, #d43f8d, #4287f5, #ff4c4c);
  background-size: 400% 400%;
  animation: gradientAnimation 10s ease infinite;
}
.banner-text-design {
  color: #fff;
  margin-top: 50px;
  text-align: center;
}
.banner-btn-design {
  text-align: center;
  margin-bottom: 30px;
}
.btn-banner {
  background-color: rgb(181, 66, 125);
  color: #fff;
  padding: 10px 40px 10px 40px;
}

.btn-banner:hover {
  background-color: #fff;
  color: rgb(181, 66, 125);
  border: 2px solid rgb(181, 66, 125);
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

</style>