<template>
  <div id="top-header-design">
    <div id="top-header-text-design">
      Hello, I'm Hüseyin, welcome to my website, you can check out my blogs and
      content.
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#top-header-design {
  overflow: hidden;
  white-space: nowrap;
  background: linear-gradient(
    50deg,
    #4d9996,
    #467e86,
    #375e80,
    #124858,
    #0f2e47
  );
}

#top-header-text-design {
  display: inline-block;
  animation: marquee 10s linear infinite;
  color: #fff;
}

@keyframes marquee {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}

@keyframes marquee2 {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-200%);
  }
}
</style>