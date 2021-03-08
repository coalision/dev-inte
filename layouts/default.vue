<template>
  <div>
    <AppHeader />
    <AppSidebar />
    <ProductGrid />
    <AppFooter />
    <Nuxt />
  </div>
</template>
<script>
import AppHeader from "../components/AppHeader";
import AppSidebar from "../components/AppSidebar";
import ProductGrid from "../components/ProductGrid";
import AppFooter from "../components/AppFooter";

export default {
  components: {
    AppHeader,
    AppSidebar,
    ProductGrid,
    AppFooter
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Red+Hat+Display&display=swap");

* {
  font-family: "Red Hat Display", sans-serif;
  color: #4d4d4f;
  box-sizing: border-box;
}
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
