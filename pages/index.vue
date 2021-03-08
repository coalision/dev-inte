<template>
  <div class="container">
    <header class="header">Header</header>
    <aside class="filters">Filters</aside>
    <main>
      <div v-if="$fetchState.pending">Loading...</div>
      <div v-else-if="$fetchState.error">Failed to load products</div>
      <div v-else class="grid">
        <Product
          v-for="product in filteredProducts"
          :key="product.id"
          :title="product.title"
          :description="product.description"
          :image="product.image"
          :colors="product.colors"
          :price="product.price"
          :discount_price="product.discount_price"
        />
      </div>
    </main>
    <footer class="footer">
      Footer
    </footer>
  </div>
</template>

<script>
import Product from "../components/Product";

export default {
  components: { Product },
  data() {
    return {
      products: []
    };
  },
  computed: {
    filteredProducts: function() {
      return this.products.data
        .filter(product => product.gender === "women")
        .filter(product => product.categories.includes("jacket"));
      /* .filter(product =>
          fetch(product.image).then(res => res.json().response.ok)
        ) */
    }
  },
  async fetch() {
    this.products = await fetch(
      "https://github.com/coalision/dev-inte/raw/master/assets/products.json"
    ).then(res => res.json());
  },
  head() {
    return {
      title: "Women’s New Collection | Lolë",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Discover our large selection of women’s new arrivals."
        }
      ]
    };
  }
};
</script>

<style>
.container {
  display: grid;
  grid-template: auto 1fr auto / minmax(300px, auto) 1fr;
  gap: 1rem;
}
.header,
.footer {
  grid-column: 1 / span 2;
}

.header {
  border-bottom: 0.86px solid #eeeeee;
}

.grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  padding: 1rem;
}
</style>
