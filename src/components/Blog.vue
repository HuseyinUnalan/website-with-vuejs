<template>
  <div class="container mb-5 mt-5">
    <div class="row">
      <div class="section-title">
        <h1 class="text-center">Blogs</h1>
      </div>

      <div class="col-lg-4 mt-2 mb-2">
        <div class="card card-shadow">
          <img src="../assets/blog-photo-4.jpg" alt="" class="img-fluid" />
          <h2 class="text-center mt-2">Blog 1</h2>
          <p class="text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
            rerum magni reprehenderit sed consectetur esse quisquam dolor quod
            doloribus sit. Suscipit quisquam ea cumque nisi repellendus dolor
            qui aut atque.
          </p>
          <RouterLink to="blog-detail" class="btn btn-blog-design"
            ><i class="fas fa-arrow-right"></i> Read More</RouterLink
          >
        </div>
      </div>

      <div class="col-lg-4 mt-2 mb-2">
        <div class="card card-shadow">
          <img src="../assets/blog-photo-5.jpg" alt="" class="img-fluid" />
          <h2 class="text-center mt-2">Blog 2</h2>
          <p class="text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
            rerum magni reprehenderit sed consectetur esse quisquam dolor quod
            doloribus sit. Suscipit quisquam ea cumque nisi repellendus dolor
            qui aut atque.
          </p>
          <RouterLink to="blog-detail" class="btn btn-blog-design"
            ><i class="fas fa-arrow-right"></i> Read More</RouterLink
          >
        </div>
      </div>

      <div class="col-lg-4 mt-2 mb-2">
        <div class="card card-shadow">
          <img src="../assets/blog-photo-6.jpg" alt="" class="img-fluid" />
          <h2 class="text-center mt-2">Blog 3</h2>
          <p class="text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam
            rerum magni reprehenderit sed consectetur esse quisquam dolor quod
            doloribus sit. Suscipit quisquam ea cumque nisi repellendus dolor
            qui aut atque.
          </p>
          <RouterLink to="blog-detail" class="btn btn-blog-design"
            ><i class="fas fa-arrow-right"></i> Read More</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card-shadow {
  box-shadow: 2px 2px 2px 2px #d6c5c5;
}

.btn-blog-design {
  border: 1px solid #4d9996;
}

h2 {
  color: #4d9996;
}
</style>