<template>
  <div class="grid" role="main">
    <div class="product" v-for="product in products" :key="product.id">
      <ProductElement :product="product" />
    </div>
  </div>
</template>

<script>
import json from "@/assets/products.json";
export default {
  name: "ProductGrid",
  data: function() {
    return {
      products: json.data
    };
  },

  methods: {
    hasImage(item) {
      if (
        ![null, ""].includes(item.image) &&
        String(item.image).match(/\.(jpeg|jpg|gif|png)$/) != null
      )
        return true;
    }
  }
};
</script>

<style>
.grid {
  padding: 10px;
  margin-left: 25vw;
  display: flex;
  flex-wrap: wrap;
}

.product {
  cursor: pointer;
  display: grid;
  grid-template-rows: 400px 65px;
  margin: 20px 10px;
  grid-template-areas:
    "img"
    "info";
}

@media only screen and (max-width: 768px) {
  .grid {
    padding: 10px;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
  }

  .product {
    cursor: pointer;
    display: grid;
    grid-template-rows: 420px 55px;
    margin: auto 10px;
  }
}
</style>
