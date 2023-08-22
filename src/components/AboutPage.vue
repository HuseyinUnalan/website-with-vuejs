<template>
  <div class="container about-banner-design">
    <div class="image-container">
      <img
        src="../assets/about-banner.jpg"
        class="img-fluid about-banner-img-design"
        alt=""
      />
      <div class="image-text">
        <RouterLink to="/" class="text-white"> Home </RouterLink>
        <i class="fas fa-angle-right"></i>
        <RouterLink to="/about" class="text-white"> About </RouterLink>
      </div>
    </div>
  </div>

  <div class="container mb-5">
    <div class="row">
      <div class="col-lg-12 about-text-design">
        <div class="section-title">
          <h1 class="text-center">Who Are We?</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil magni
          rerum officiis hic amet sapiente id eius. Autem accusamus dolorum
          suscipit, nisi illo, optio odio omnis facilis eaque illum harum!
          Officiis hic amet sapiente id eius. Autem accusamus dolorum suscipit,
          nisi illo, optio odio omnis facilis eaque illum harum! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Nihil magni rerum
          officiis hic amet sapiente id eius. Autem accusamus dolorum suscipit,
          nisi illo, optio odio omnis facilis eaque illum harum!
        </p>

       
      </div>

      <div class="col-lg-6 about-text-design">
        <div class="section-title">
          <h1 class="text-center">Our Vision</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil magni
          rerum officiis hic amet sapiente id eius. Autem accusamus dolorum
          suscipit, nisi illo, optio odio omnis facilis eaque illum harum!
        </p>

        <p>
          Officiis hic amet sapiente id eius. Autem accusamus dolorum suscipit,
          nisi illo, optio odio omnis facilis eaque illum harum! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Nihil magni rerum
          officiis hic amet sapiente id eius. Autem accusamus dolorum suscipit,
          nisi illo, optio odio omnis facilis eaque illum harum!
        </p>
      </div>

      <div class="col-lg-6 about-text-design">
        <div class="section-title">
          <h1 class="text-center">Our Mission</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil magni
          rerum officiis hic amet sapiente id eius. Autem accusamus dolorum
          suscipit, nisi illo, optio odio omnis facilis eaque illum harum!
        </p>

        <p>
          Officiis hic amet sapiente id eius. Autem accusamus dolorum suscipit,
          nisi illo, optio odio omnis facilis eaque illum harum! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Nihil magni rerum
          officiis hic amet sapiente id eius. Autem accusamus dolorum suscipit,
          nisi illo, optio odio omnis facilis eaque illum harum!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.about-banner-design {
  margin-top: 40px;
  margin-bottom: 40px;
}

.about-banner-img-design {
  border-radius: 50px;
}

.image-container {
  position: relative;
}

.image-text {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 20px;
  padding: 10px 20px;
  background-color: #4d9996;
  border-radius: 10px;
}

/* Responsive Tasarım */
@media (max-width: 768px) {
  .image-text {
    font-size: 16px;
    padding: 8px 16px;
  }
}

@media (max-width: 576px) {
  .image-text {
    font-size: 12px;
    padding: 6px 12px;
  }
}

.badge-design {
  background-color: #375e80;
  padding: 10px 20px 10px 20px;
  margin-bottom: 15px;
}
</style>
