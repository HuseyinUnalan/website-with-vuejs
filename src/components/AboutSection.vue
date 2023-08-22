<template>
  <div class="container about-design">
    <div class="row">
      <div class="col-md-6">
        <img src="../assets/service-img-3.png" class="img-fluid" alt="" />
      </div>

      <div class="col-md-6 about-text-design">
        <span class="badge badge-design">About Us</span>
        <h2>Who We Are</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque a
          quibusdam quasi beatae nemo. Dignissimos quibusdam unde nesciunt
          repellat, ea pariatur labore eius laborum deserunt quaerat amet non
          expedita velit.
        </p>

        <p class="quotation-mark">“</p>
        <p class="text-center quotation-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, velit
          laborum aliquid aut excepturi delectus provident. Aut, optio esse
          quibusdam voluptate, aspernatur, consectetur voluptatem enim
          repudiandae facere molestiae sed sit.
        </p>
        <img src="../assets/signature.png" class="img-fluid" alt="" />
        <p class="quotation-mark-right">”</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped >
h2 {
  font-style: initial;
  font-weight: 700;
}
.about-design {
  margin-top: 150px;
  margin-bottom: 150px;
}

.badge-design {
  background-color: #375e80;
  padding: 10px 20px 10px 20px;
  margin-bottom: 15px;
}
.list-group-item {
  border: none;
}
.quotation-text {
  font-weight: 700;
  font-family: "Times New Roman", Times, Serif;
}
.quotation-mark {
  font-weight: bold;
  font-size: 60px;
  color: #375e80;
  font-family: "Times New Roman", Times, Serif;
  margin-bottom: -25px;
}
.quotation-mark-right {
  font-weight: bold;
  font-size: 60px;
  color: #375e80;
  font-family: "Times New Roman", Times, Serif;
  float: right;
}

@media only screen and (max-width: 767px)  {
  .about-text-design {
    margin-top: 80px;
  }
}


</style>