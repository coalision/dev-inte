<template>
  <div>
    <footer class="footer">
      <div class="info1">
        <ul class="infoul1 infoul">
          <li class="infoHead">About Lol&#235;</li>

          <li class="info1li infoli">Who We Are</li>
          <li class="info1li infoli">Partnership</li>
          <li class="info1li infoli">Community</li>
          <li class="info1li infoli">Careers</li>
          <li class="info1li infoli">Gift Card</li>
        </ul>
      </div>
      <div class="info2">
        <ul class="infoul2 infoul">
          <li class="infoHead">Help & Support</li>

          <li class="info2li infoli">Contact Us</li>
          <li class="info2li infoli">F.A.Q.</li>
          <li class="info2li infoli">Order Status</li>
          <li class="info2li infoli">Delivery</li>
          <li class="info2li infoli">Return Policy</li>
          <li class="info2li infoli">Find a Store</li>
        </ul>
      </div>
      <div class="newsletter"></div>
      <div class="subfoot">
        <img class="footlogo" width="80px" src="../assets/loleLogo.png" />
        <div class="copyright">Coallision Inc. 2020 All rights reserved</div>
        <div class="terms">
          <ul class="termsul">
            <li class="termsli">Terms of Use</li>
            <li class="termsli">Privacy Policy</li>
          </ul>
        </div>
        <div class="social">
          <fa class="icons" :icon="['fab', 'facebook-f']" />

          <fa class="icons" :icon="['fab', 'instagram']" />
          <fa class="icons" :icon="['fab', 'pinterest-p']" />

          <fa class="icons" :icon="['fab', 'twitter']" />
          <fa class="icons" :icon="['fab', 'youtube']" />
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "AppFooter"
};
</script>

<style>
.footer {
  height: 440px;
  background: #f6f6f6;
  display: grid;
  padding-top: 40px;
  grid-template-rows: 350px 90px;
  grid-template-columns: 10vw 1fr 1fr 3fr;
  grid-template-areas:
    ". info1 info2 newsletter"
    " sub sub sub sub";
}

.info1 {
  grid-area: info1;
}

.info2 {
  grid-area: info2;
}

.infoHead {
  font-weight: 600;
  border-bottom: 1px solid rgb(238, 238, 238);
}

.infoul {
  list-style-type: none;
  line-height: 2.5em;
}

.infoli {
  border-bottom: 1px solid rgb(238, 238, 238);
  cursor: pointer;
  transition: 0.7s ease-in-out;
}

.infoli:hover {
  border-bottom: 1px solid #ffc72c;
  color: black;
}

.newsletter {
  grid-area: newsletter;
  background: rgb(238, 238, 238);
  margin: 40px;
}
.subfoot {
  background: white;
  grid-area: sub;
  padding: 30px 50px;
  font-size: 14px;
  display: grid;
  grid-template-columns: 12% 22% 45% 20%;
  grid-template-areas: "footlogo copyright terms social";
}

.footlogo {
  margin-top: -10px;
  grid-area: footlogo;
}

.copyright {
  grid-area: copyright;
  font-weight: 600;
}

.terms {
  grid-area: terms;
}

.termsul {
  display: flex;
}

.termsli {
  margin-right: 40px;
  padding-left: 20px;
  text-decoration: underline;
  cursor: pointer;
  transition: 0.7s ease-in-out;
}

.termsli:hover {
  color: #aaaaaa;
}

.social {
  grid-area: social;
}

.icons {
  font-size: 1.5em;
  margin: 0 10px;
  transition: 0.7s ease-in-out;
  cursor: pointer;
}

.icons:hover {
  opacity: 0.4;
  margin: 0 13px;
}

@media only screen and (max-width: 768px) {
  .footer {
    height: 850px;
    grid-template-rows: 260px 260px 300px 200px;
    grid-template-columns: 100vw;
    text-align: center;
    padding-top: 10px;
    grid-template-areas:
      "info1"
      "info2"
      "newsletter"
      "sub";
  }

  .subfoot {
    grid-template-columns: 100vw;
    grid-auto-rows: 100px 50px 50px 30px;
    text-align: center;
    padding: 0 0;
    grid-template-areas:
      "footlogo"
      "social"
      "terms"
      "copyright";
  }

  .footlogo {
    margin: auto;
    grid-area: footlogo;
  }

  .termsli {
    margin-right: 10px;
    padding-left: 10px;
    list-style-type: none;
  }

  .infoul {
    padding: 0;
  }
}
</style>
