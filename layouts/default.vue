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

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
