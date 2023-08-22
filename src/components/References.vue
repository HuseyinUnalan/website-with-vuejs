<template>
  <div class="container my-5">
    <div class="row overflow-hidden">
      <div class="section-title">
        <h1 class="text-center">Referances</h1>
      </div>
      <div class="col-12">
        <div class="logo-container">
          <img src="../assets/logo.png" alt="Logo 1" />
          <img src="../assets/logo.png" alt="Logo 2" />
          <img src="../assets/logo.png" alt="Logo 3" />
          <img src="../assets/logo.png" alt="Logo 4" />
          <img src="../assets/logo.png" alt="Logo 4" />
          <img src="../assets/logo.png" alt="Logo 4" />
          <img src="../assets/logo.png" alt="Logo 4" />

          <!-- Eklemek istediğiniz diğer logolar -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.logo-container {
  white-space: nowrap;
  animation: marquee 10s linear infinite;
}

.logo-container img {
  width: 150px;
  margin-right: 20px;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
