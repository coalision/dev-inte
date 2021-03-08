<template>
  <header class="header">
    <ul class="select">
      <li class="gender">Women</li>
      <li class="gender">Men</li>
      <li class="gender">Us</li>
    </ul>
    <img class="logolg" width="80px" src="../assets/loleLogo.png" />
    <img class="logosm" width="60px" src="../assets/loleLogo.png" />

    <div class="menu">
      <img class="flag" width="35px" src="../assets/Flag.jpg" />

      <fa class="icon" :icon="['fas', 'search']" />
      <fa class="icon" :icon="['fas', 'user']" />
      <fa class="icon" :icon="['fas', 'shopping-bag']" />
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader"
};
</script>

<style>
header {
  background: white;
  height: 70px;
  border-bottom: 2px solid rgb(235, 235, 235);
  font-family: "Red Hat Display", sans-serif;
  display: flex;
  margin-bottom: 40px;
}

.select {
  list-style: none;
  display: flex;
  margin-left: 25px;
}

.gender {
  margin: 15px;
  padding: 10px;
  cursor: pointer;
  transition: 0.5s ease-in;
  font-weight: 400;
  border-bottom: 2px solid white;
  text-shadow: 0px 0px 0px white;
}

.gender:hover {
  border-bottom: 2px solid #ffc72c;
  text-shadow: 0.3px 0.3px 0 black, 0.3px -0.3px 0 black, -0.3px 0.3px 0 black;
}

.logolg {
  display: block;
  position: absolute;
  top: 15px;
  left: calc(50vw - 40px);
  opacity: 0.7;
}

.logosm {
  display: none;
}

.menu {
  position: absolute;
  right: 50px;
  top: 20px;
}

.flag {
  position: absolute;
  right: 210px;
  top: 7px;
}

.icon {
  margin: 5px 20px;
  font-size: 1.2em;
  cursor: pointer;
  transition: 0.5s ease-in;
}

.icon:hover {
  opacity: 0.5;
}

@media only screen and (max-width: 768px) {
  header {
    height: 75px;
    display: grid;
    width: 100vw;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 30px;
    grid-template-areas:
      "logo menu"
      "select select";
    margin-bottom: 40px;
  }

  .logolg {
    display: none;
  }

  .logosm {
    display: block;
    grid-area: logo;
    margin: 20px;
  }

  .menu {
    grid-area: menu;
    right: 50px;
  }

  .icon {
    margin: 5px 10px;
    font-size: 1em;
  }

  .flag {
    display: none;
  }

  .select {
    display: none;
  }
}
</style>
