<template>
  <aside class="sidebar">
    <div class="hamburger">
      <fa class="icon" @click="drop" :icon="['fas', 'bars']" />
    </div>
    <div class="categoryPath">
      <span class="category">Women</span> /
      <span class="category">New Collection</span> /
      <span class="category">Packable</span>
    </div>
    <div class="collection">
      <div class="collectionTitle">Women's New Collection</div>
      Discover our awesome assortment of women's...
    </div>
    <div class="sidewide">
      <div class="typeSelect"></div>
      <div class="sortBy"></div>
      <div class="tempSelect"></div>
      <div class="colors"></div>
      <div class="size"></div>
    </div>
    <div class="dropdown" v-if="dropVisible" @click="drop">
      <ul class="dropselect">
        <li class="dropgender">Women</li>
        <li class="dropgender">Men</li>
        <li class="dropgender">Us</li>
      </ul>
      <div class="typeSelect"></div>
      <div class="sortBy"></div>
      <div class="tempSelect"></div>
      <div class="colors"></div>
      <div class="size"></div>
    </div>
  </aside>
</template>

<script>
import json from "@/assets/products.json";

export default {
  name: "AppSidebar",
  data() {
    return {
      dropVisible: false,
      products: json.data
    };
  },
  methods: {
    drop() {
      this.dropVisible = !this.dropVisible;
    }
  },
  mounted: function() {
    // Checking if everything works, delete this right after you see that everything works
    console.log(this.products);
  }
};
</script>

<style>
aside {
  background: white;
  width: 350px;
  height: 400px;
  float: left;
  padding-left: 50px;
}

.categoryPath {
  font-size: 13px;
  color: rgb(117, 117, 117);
}

.category {
  cursor: pointer;
  margin: 0 7px 0 7px;
  transition: 0.5s ease-in;
}

.category:hover {
  color: black;
  margin: 0 7px 0 9px;

  text-decoration: underline;
}

.collection {
  margin-top: 20px;
  font-size: 14px;
}

.collectionTitle {
  font-weight: 700;
  font-size: 28px;
  line-height: 30px;
  margin-bottom: 15px;
}

.typeSelect {
  background: aqua;
  height: 100px;
}

.sortBy {
  background: papayawhip;
  height: 100px;
}

.tempSelect {
  background: goldenrod;
  height: 100px;
}

.colors {
  background: plum;
  height: 100px;
}

.size {
  background: rgb(185, 166, 252);
  height: 100px;
}

.hamburger {
  display: none;
}

.dropselect {
  display: none;
}

@media only screen and (max-width: 768px) {
  @keyframes slide {
    from {
      left: -100vw;
      opacity: 0;
    }
    to {
      left: 0px;
      opacity: 1;
    }
  }

  .sidebar {
    padding: 0;
  }
  aside {
    background: white;
    width: 100vw;
    height: 170px;
    float: none;
    text-align: center;
  }

  .sidewide {
    display: none;
  }

  .collection {
    padding: 0 5vw;
  }

  .dropdown {
    background: white;
    width: 100vw;
    display: grid;
    padding: 20px;
    position: absolute;
    animation: slide 1s ease-in-out;
    top: 80px;
    grid-template-rows: 60px 100px 100px 100px 100px;
    grid-template-areas:
      "select"
      "type"
      "sort"
      "temp"
      "color"
      "size";
  }

  .hamburger {
    display: block;
    position: absolute;
    top: 21px;
    right: 10px;
  }

  .dropselect {
    list-style: none;
    display: flex;
    margin: 0 auto;
    padding: 0;
  }

  .dropgender {
    padding: 10px;
    margin: 0 10px;
  }
}
</style>
