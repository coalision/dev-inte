<template>
  <div></div>
</template>

<script>
import json from "@/assets/products.json";
export default {
  name: "products",
  data: function() {
    return {
      products: json.data
    };
  },
  mounted: function() {
    // Checking if everything works, delete this right after you see that everything works
    console.log(this.products);
  }
};
</script>

<style></style>
