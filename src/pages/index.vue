<template>
  <div>
    <Landing />
    <div class="container descover-section">
      <div class="main-heading text-center">
        <h2 class="py-5">استكشاف حسب الفئة</h2>
      </div>

      <div class="product">
        <v-row>
          <v-col v-for="(card, index) in cards" :key="index" cols="12" sm="6" md="4">
            <v-card class="mx-auto p-3" max-width="344" @click="goToDetails">
              <v-img :src="card.imgSrc" height="200px" cover></v-img>
              <v-card-title class="text-center">
                <h5>{{ card.title }}</h5>
              </v-card-title>
              <v-card-subtitle>
                <h5 class="text-center">{{ card.price }} <span>ريال</span></h5>
              </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="offers container my-4">
      <div class="main-heading-2 text-center">
        <h2 class="py-5 position-relative">عروض</h2>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-8">
                <div class="card-body text-center">
                  <h5 class="card-title">عرض خاص</h5>
                  <p class="card-text py-3">زيت سكيو لاين جم بخصم يصل الى<span class="fw-bold"> 10%.</span></p>
                  <v-btn class="main-btn py-2 px-5 text-light">اطلبي الآن</v-btn>
                </div>
              </div>
              <div class="col-md-4">
                <img src="/img/card-offer.png" class="img-fluid rounded-start" alt="...">
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-8">
                <div class="card-body text-center">
                  <h5 class="card-title">عرض خاص</h5>
                  <p class="card-text py-3">احصلي على افضل عرض للحصول على بشرة اكثرا نظارة اشراقاً بخصم يصل الى <span
                      class="fw-bold">20
                      %.</span></p>
                  <v-btn class="main-btn py-2 px-5 text-light">اطلبي الآن</v-btn>
                </div>
              </div>
              <div class="col-md-4">
                <img src="/img/card-offer.png" class="img-fluid rounded-start" alt="...">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="special container pb-5">
      <div class="main-heading-2 text-center">
        <h2 class="py-5 position-relative">مميز</h2>
      </div>
      <v-carousel 
          height="400"
          show-arrows="hover"
          cycle
          hide-delimiter-background
      >
        <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
        >
          <v-sheet
            height="100%"
          >
            <div class="d-flex fill-height justify-center align-center">
              <div class="img-card">
                <img src='/img/imgSlider1.png'>
              </div>
              <div class="img-card">
                <img src='/img/imgSlider1.png'>
              </div>
              <div class="img-card">
                <img src='/img/imgSlider1.png'>
              </div>
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
    <div class="special container pb-5">
      <div class="main-heading-2 text-center">
        <h2 class="pb-5 position-relative">جديد</h2>
      </div>
      <v-carousel 
          height="400"
          show-arrows="hover"
          cycle
          hide-delimiter-background
      >
        <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
        >
          <v-sheet
            height="100%"
          >
            <div class="d-flex fill-height justify-center align-center">
              <div class="img-card">
                <img src='/img/imgSlider1.png'>
              </div>
              <div class="img-card">
                <img src='/img/imgSlider1.png'>
              </div>
              <div class="img-card">
                <img src='/img/imgSlider1.png'>
              </div>
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
    <About class="pt-5" id="about-us"/>
    <YemenMap />
    <Footer />
    <!-- <Products /> -->
  </div>
</template>

<script>
import YemenMap from '@/components/YemenMap.vue';
import Footer from '@/components/Footer.vue';
import Products from '@/components/Products.vue';
import { useRoute } from 'vue-router';

// mohammed
export default {
  data() {
    return {
      cards: [
        {
          title: "بكج العناية ٤ منتجات",
          price: 80,
          imgSrc: '/img/ImageContainer.png',
        },
        {
          title: "بكج العناية ٤ منتجات",
          price: 80,
          imgSrc: '/img/ImageContainer.png',
        },
        {
          title: "بكج العناية ٤ منتجات",
          price: 80,
          imgSrc: '/img/ImageContainer.png',
        },
        {
          title: "بكج العناية ٤ منتجات",
          price: 80,
          imgSrc: '/img/ImageContainer.png',
        },
        {
          title: "بكج العناية ٤ منتجات",
          price: 80,
          imgSrc: '/img/ImageContainer.png',
        },
        {
          title: "بكج العناية ٤ منتجات",
          price: 80,
          imgSrc: '/img/ImageContainer.png',
        },
      ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
    };
  },
  methods: {
        goToDetails(id) {
            this.$router.push('/productDetails');
        },
    },
};
</script>

<style scoped>
.v-card_loader h5 {
  color: #000 !important;
}
.v-card{
  /* border: 1px solid #690108; */
  cursor: pointer;
}
.main-heading-2 h2::before{
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 40%;
  height: 0.5px;
  background-color: #690108;
}
.main-heading-2 h2::after{
  content: '';
  position: absolute;
  top: 50%;
  right: 0;
  width: 40%;
  height: 0.5px;
  background-color: #690108;
}
.card{
  border: 1px solid #690108;
}
.card img{
  width: 100%;
  height: 100%;
}
.card .card-body p span{
  color: #690108;
}
.offers .card .card-body a:hover{
  color: #fff !important;
}
</style>
