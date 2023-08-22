<template>
  <div class="container mt-3 mb-5">
    <div class="row">
      <div class="section-title">
        <h1 class="text-center">Services</h1>
      </div>

      <!-- Card Item Start -->
      <div class="col-lg-4 col-md-6 col-sm-12 col-12 card-design mt-2 mb-2">
        <div class="card p-5">
          <img class="service-img-design" src="../assets/service-1.png" alt="" />
          <a href=""><h3 class="text-center">Service 1</h3></a>
          <p class="text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga ea
            debitis dolorum consequatur error, numquam commodi dolore aperiam ad
            aliquid adipisci, autem, perspiciatis quod rerum. Corporis natus
            tenetur doloribus asperiores!
          </p>
          <a href="" class="btn btn-primary btn-design">Read More</a>
        </div>
      </div>
      <!-- Card Item End -->

      <!-- Card Item Start -->
      <div class="col-lg-4 col-md-6 col-sm-12 col-12 card-design mt-2 mb-2">
        <div class="card p-5">
          <img class="service-img-design" src="../assets/service-2.png" alt="" />
          <a href=""><h3 class="text-center">Service 2</h3></a>
          <p class="text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga ea
            debitis dolorum consequatur error, numquam commodi dolore aperiam ad
            aliquid adipisci, autem, perspiciatis quod rerum. Corporis natus
            tenetur doloribus asperiores!
          </p>
          <a href="" class="btn btn-primary btn-design">Read More</a>
        </div>
      </div>
      <!-- Card Item End -->

      <!-- Card Item Start -->
      <div class="col-lg-4 col-md-6 col-sm-12 col-12 card-design mt-2 mb-2">
        <div class="card p-5">
          <img class="service-img-design" src="../assets/service-3.png" alt="" />
          <a href=""><h3 class="text-center">Service 3</h3></a>
          <p class="text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga ea
            debitis dolorum consequatur error, numquam commodi dolore aperiam ad
            aliquid adipisci, autem, perspiciatis quod rerum. Corporis natus
            tenetur doloribus asperiores!
          </p>
          <a href="" class="btn btn-primary btn-design">Read More</a>
        </div>
      </div>
      <!-- Card Item End -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h3 {
  color: #375e80;
}
.card {
  background: #eee;
}
.card-design {
  transition: 0.2s;
}
.card-design :hover {
  transform: scale(1.03);
  background: #55a09e;
  color: #fff;
}

.service-img-design {
  width: auto;
  height: 340px;
  
}
</style>