<template>
  <aside class="sidebar">
    <div class="hamburger">
      <fa class="icon" @click="drop" :icon="['fas', 'bars']" />
    </div>
    <div class="categoryPath">
      <span class="path">Women</span> /
      <span class="path">New Collection</span> /
      <span class="path">Packable</span>
    </div>
    <div class="collection">
      <div class="collectionTitle">Women's New Collection</div>
      Discover our awesome assortment of women's...
    </div>
    <div class="sidewide">
      <div class="sidebardiv categorydiv">
        <h4 class="categoryall category">All ({{ products.length }})</h4>
        <div v-for="category in categories" :key="category">
          <h4 class="category">{{ category }}</h4>
        </div>
      </div>
      <div class="sidebardiv">
        <h4 class="filtertitle">Sort by</h4>
        <div class="sortradio">
          <input type="radio" id="featured" name="sortby" value="featured" />
          <label for="featured">Featured</label><br />
          <input type="radio" id="highlow" name="sortby" value="highlow" />
          <label for="highlow">Price high to low</label><br />
          <input type="radio" id="lowhigh" name="sortby" value="lowhigh" />
          <label for="lowhigh">Price low to high</label><br />
        </div>
      </div>
      <div class="sidebardiv">
        <h4 class="filtertitle">Temperature</h4>
        <div class="tempdiv">
          <input type="checkbox" id="0+" name="0+" value="0+" />
          <label for="0+">0&deg;C & plus</label><br />
          <input type="checkbox" id="0to10" name="0to10" value="0to10" />
          <label for="0to10">0&deg;C to -10&deg;C</label><br />
          <input type="checkbox" id="10to20" name="10to20" value="10to20" />
          <label for="10to20">-10&deg;C to -20&deg;C</label><br />
          <input type="checkbox" id="20to30" name="20to30" value="20to30" />
          <label for="20to30">-20&deg;C to -30&deg;C</label><br />
        </div>
      </div>
      <div class="sidebardiv">
        <h4 class="filtertitle">Colors</h4>
        <div class="colorsdiv">
          <div
            class="colordot"
            v-for="color in colors"
            :key="color"
            :style="{ background: color }"
          ></div>
        </div>
      </div>
      <div class="sidebardiv">
        <h4 class="filtertitle">Size</h4>
        <div class="sizediv">
          <div class="sizebtn">XS</div>
          <div class="sizebtn">S</div>
          <div class="sizebtn">M</div>
          <div class="sizebtn">L</div>
          <div class="sizebtn">XL</div>
          <div class="sizebtn">XXL</div>
        </div>
      </div>
      <button class="reset">Reset filters</button>
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
      products: json.data,
      colors: [],
      categories: []
    };
  },
  methods: {
    drop() {
      this.dropVisible = !this.dropVisible;
    },
    getProps: function() {
      for (let i = 0; i < this.products.length; i++) {
        this.colors.push(...this.products[i].colors);
        this.categories.push(...this.products[i].categories);
      }

      this.colors = [...new Set(this.colors)];
      this.categories = [...new Set(this.categories)];

      console.log(this.colors);
    }
  },
  beforeMount() {
    this.getProps();
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
  margin-left: 12px;
}

.path {
  cursor: pointer;
  margin: 0 7px 0 7px;
  transition: 0.5s ease-in;
}

.path:hover {
  color: black;
  margin: 0 7px 0 9px;
  text-decoration: underline;
}

.collection {
  margin: 20px 20px 40px 20px;
  font-size: 14px;
}

.collectionTitle {
  font-weight: 700;
  font-size: 28px;
  line-height: 30px;
  margin-bottom: 15px;
}

.filtertitle {
  margin-bottom: 10px;
  font-weight: 700;
}

input {
  cursor: pointer;
}

.sidebardiv {
  height: auto;
  margin: 20px;
}

.categorydiv {
  margin-left: 5px;
}

.category {
  font-weight: 400;
  line-height: 2em;
  padding: 2px 15px;
  border-bottom: 1px solid rgb(235, 235, 235);
  transition: 0.5s ease-in;
  cursor: pointer;
}

.category:hover {
  background: rgb(235, 235, 235);
}
.categoryall {
  font-weight: 700;
}

.sortradio {
  line-height: 2em;
}

.tempdiv {
  line-height: 2em;
}

label {
  margin-left: 10px;
}

.colorsdiv {
  display: flex;
  flex-wrap: wrap;
  width: 240px;
  margin-left: -4px;
}

.sizediv {
  display: flex;
  flex-wrap: wrap;
  width: 240px;
  margin-left: -4px;
}

.sizebtn {
  border: 1px solid rgb(235, 235, 235);
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
  width: 50px;
  height: 30px;
  font-size: 14px;
  margin: 10px 10px 0 0;
  padding: 5px;
  transition: 0.5s ease-in;
}

.sizebtn:hover {
  background: rgb(235, 235, 235);
}

.reset {
  background: transparent;
  border: 1px solid #4d4d4f;
  border-radius: 30px;
  font-weight: 700;
  padding: 5px 20px;
  margin: 20px 20px;
  cursor: pointer;
  transition: 0.5s ease-in;
}

.reset:hover {
  background: rgb(235, 235, 235);
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
