
<template>
  <div class="container">
    <div class="colorful-wave">
      <h2 class="centered-text">Blog Detail</h2>
      <h6 class="centered-text-small">
        <RouterLink to="/" class="text-white"> Home </RouterLink>
        <i class="fas fa-angle-right text-white"></i>
        <RouterLink to="/blog" class="text-white"> Blogs </RouterLink>
        <i class="fas fa-angle-right text-white"></i>
        <RouterLink to="/blog-detail" class="text-white">
          Blogs Detail</RouterLink
        >
      </h6>
    </div>
  </div>
  <div class="container mb-5 mt-5">
    <div class="row">
      <div class="col-md-6">
        <img src="../assets/blog-photo-6.jpg" alt="" class="img-fluid" />
      </div>
      <div class="col-md-6">
        <h2>Contrary to popular belief</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae commodi
          totam, amet quas eaque sit dolores beatae, libero sapiente, temporibus
          rerum perspiciatis saepe quos! Ducimus perspiciatis iusto tenetur
          itaque vero! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Vitae commodi totam, amet quas eaque sit dolores beatae, libero
          sapiente, temporibus rerum perspiciatis saepe quos! Ducimus
          perspiciatis iusto tenetur itaque vero! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Vitae commodi totam, amet quas eaque sit
          dolores beatae, libero sapiente, temporibus rerum perspiciatis saepe
          quos! Ducimus perspiciatis iusto tenetur itaque vero! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Vitae commodi totam, amet
          quas eaque sit dolores beatae, libero sapiente, temporibus rerum
          perspiciatis saepe quos! Ducimus perspiciatis iusto tenetur itaque
          vero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          commodi totam, amet quas eaque sit dolores beatae, libero sapiente,
          temporibus rerum perspiciatis saepe quos! Ducimus perspiciatis iusto
          tenetur itaque vero!
        </p>
      </div>
    </div>
  </div>

  <div class="container mb-5">
    <div class="row">
      <div class="col-md-6">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae commodi
          totam, amet quas eaque sit dolores beatae, libero sapiente, temporibus
          rerum perspiciatis saepe quos! Ducimus perspiciatis iusto tenetur
          itaque vero! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Vitae commodi totam, amet quas eaque sit dolores beatae, libero
          sapiente, temporibus rerum perspiciatis saepe quos! Ducimus
          perspiciatis iusto tenetur itaque vero! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Vitae commodi totam, amet quas eaque sit
          dolores beatae, libero sapiente, temporibus rerum perspiciatis saepe
          quos! Ducimus perspiciatis iusto tenetur itaque vero! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Vitae commodi totam, amet
          quas eaque sit dolores beatae, libero sapiente, temporibus rerum
          perspiciatis saepe quos! Ducimus perspiciatis iusto tenetur itaque
          vero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          commodi totam, amet quas eaque sit dolores beatae, libero sapiente,
          temporibus rerum perspiciatis saepe quos! Ducimus perspiciatis iusto
          tenetur itaque vero!
        </p>
      </div>
      <div class="col-md-6">
        <img src="../assets/blog-photo-8.jpg" alt="" class="img-fluid" />
      </div>
    </div>
  </div>

  <div class="container-fluid mb-5">
    <div class="row">
      <div class="col-md-6 mb-3">
        <img src="../assets/blog-photo-7.jpg" alt="" class="img-fluid" />
      </div>

      <div class="col-md-6">
        <div class="row">
          <div class="col-md-6 pb-3">
            <img src="../assets/blog-photo-9.jpg" alt="" class="img-fluid" />
          </div>
          <div class="col-md-6 pb-3">
            <img src="../assets/blog-photo-10.jpg" alt="" class="img-fluid" />
          </div>
          <div class="col-md-6 pb-3">
            <img src="../assets/blog-photo-11.jpg" alt="" class="img-fluid" />
          </div>
          <div class="col-md-6 pb-3">
            <img src="../assets/blog-photo-12.jpg" alt="" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
</script>

<style scoped>
.colorful-wave {
  height: 120px;
  background: linear-gradient(
    45deg,
    rgba(32, 65, 39, 0.5),
    rgba(145, 239, 164, 0.5),
    rgba(125, 197, 198, 0.5),
    rgba(145, 239, 164, 0.5)
  );
  background-size: 400% 400%;
  animation: wave-animation 6s linear infinite;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

.centered-text,
.centered-text-small {
  text-align: center;
  color: white;
}

.centered-text-small {
  font-size: 14px;
  margin-top: 5px;
}

@keyframes wave-animation {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 100%;
  }
}
</style>