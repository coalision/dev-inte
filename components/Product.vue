<template>
  <div class="product">
    <img class="image" :src="image" :alt="description" />
    <div class="split">
      <h2 class="title">{{ title }}</h2>
      <div v-if="discount_price" class="price_top">
        {{ formatedPrice(discount_price) }}
      </div>
      <div v-else class="price_top">{{ formatedPrice(price) }}</div>
    </div>
    <div class="split">
      <div>{{ colors.length }} colors</div>
      <div v-if="discount_price" class="price_bottom">
        <del>{{ formatedPrice(price) }}</del>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: ["title", "description", "image", "colors", "price", "discount_price"],
  methods: {
    formatedPrice: function(price) {
      const formatedPrice = new Intl.NumberFormat("en-CA", {
        style: "currency",
        currency: "CAD"
      });
      return formatedPrice.format(price / 100);
    }
  }
};
</script>

<style>
.product,
.product .title {
  color: #4d4d4d;
  font-size: 14px;
}

.image {
  width: 100%;
}

.split {
  display: flex;
  justify-content: space-between;
}

.price_top,
.price_bottom {
  font-size: 16px;
}

.title,
.price_top {
  font-weight: 700;
}
</style>
