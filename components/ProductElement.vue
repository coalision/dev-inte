<template>
  <div v-if="hasImage(product)">
    <div class="overlay">
      <div class="description">
        {{ product.description }}
      </div>
      <div class="colordiv">
        <div class="colorOverlay" v-for="color in product.colors" :key="color">
          <div class="colordot" :style="{ background: color }"></div>
        </div>
      </div>
    </div>
    <img :src="product.image" :alt="product.name" class="productimg" />
    <div class="productinfo">
      <h4 class="title">{{ product.title }}</h4>
      <h4 class="price" v-if="!product.discount_price">
        {{ productPrice }}
      </h4>
      <div>
        <h4 v-if="product.discount_price" class="discount">
          <h4 class="discountPrice">
            {{ discountPrice }}
          </h4>
          <h4 class="fullprice">{{ productPrice }}</h4>
        </h4>
      </div>

      <h4 class="colorsinfo">{{ product.colors.length }} colors</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductElement",
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    hasImage(item) {
      if (
        ![null, ""].includes(item.image) &&
        String(item.image).match(/\.(jpeg|jpg|gif|png)$/) != null
      )
        return true;
    }
  },
  computed: {
    productPrice() {
      if (this.product) {
        const price = (this.product.price / 100).toFixed(2);
        return `$ ${price}`;
      }
    },
    discountPrice() {
      if (this.product) {
        const price = (this.product.discount_price / 100).toFixed(2);
        return `$ ${price}`;
      }
    }
  }
};
</script>

<style>
.productimg {
  height: 400px;
}

.productinfo {
  width: auto;
  grid-area: info;
  position: relative;
  padding: 7px;
}

.title {
  font-size: 14px;
  font-weight: 700;
  width: 180px;
}

.price {
  font-weight: 700;
  font-size: 16px;
  position: absolute;
  top: 7px;
  right: 7px;
}

.discountPrice {
  margin-left: 5px;
}

.fullprice {
  font-weight: 500;
  font-size: 15px;
  position: absolute;
  top: 19px;
  right: 7px;
  text-decoration: line-through;
  color: rgb(155, 155, 155);
  font-weight: 400;
}

.discount {
  font-weight: 700;
  font-size: 16px;
  position: absolute;
  top: 7px;
  right: 0px;
}

.colorsinfo {
  font-size: 14px;
  font-weight: 400;
  position: absolute;
  top: 44px;
  left: 8px;
}

.overlay {
  position: absolute;
  height: 400px;
  width: 267px;
  background: white;
  text-align: center;
  padding: 110px 20px;
  opacity: 0;
  transition: 1s ease-in-out;
  color: black;
}

.colordiv {
  display: flex;
  justify-content: center;
}

.colordot {
  width: 15px;
  height: 15px;
  border-radius: 30px;
  margin: 10px;
  opacity: 0.7;
  border: 1px solid #4d4d4f;
}

.overlay:hover {
  padding: 120px 20px;

  opacity: 0.8;
}

@media only screen and (max-width: 768px) {
  .productimg {
    height: auto;
    width: 82vw;
    margin: 5px 3vw;
  }

  .productinfo {
    width: 80vw;
    grid-area: info;
    margin: auto;
    position: relative;
    padding: 7px 0;
  }

  .colorsinfo {
    left: 0;
  }
}
</style>
