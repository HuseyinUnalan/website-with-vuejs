<script>
import { RouterLink, RouterView } from "vue-router";

export default {};

// Sayfa yüklendiğinde ve scroll olayında Navbar'ı dinleyin
document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector(".navbar");

  // Scroll olayını dinleyin
  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      // Scroll değeri sıfırdan büyükse "scrolled" sınıfını ekle
      navbar.classList.add("scrolled");
    } else {
      // Scroll değeri sıfıra eşit veya daha küçükse "scrolled" sınıfını kaldır
      navbar.classList.remove("scrolled");
    }
  });
});
</script>
<template>
  <TopHeader />
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid scrolled">
      <RouterLink to="/" class="navbar-brand"
        ><img src="../assets/logo.png" class="logo-design" alt=""
      /></RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link active"> Home </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link">About</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/blog" class="nav-link">Blogs</RouterLink>
          </li>

          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  <RouterView />
</template>



<style scoped>
.logo-design {
  width: 120px;
  height: auto;
}

/* Navbar'ın Sticky Olarak Kalması */
.navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: top 0.3s ease-in-out;
}

/* Navbar'a özel stil kuralları */
.navbar.scrolled {
  top: -20px; /* Navbar'ın yukarıdan aşağıya gelme mesafesi */
  background-color: #ebf3eb !important; /* Scroll efekti sırasında arkaplan rengini belirleyebilirsiniz */
}
</style>