<template>
  <div>
    <!-- start header  -->
    <header class="position-absolute" style="z-index: 99;">
        <nav class="navbar position-fixed w-100 navbar-expand-lg p-4">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <v-icon><img class="img-fluid icon" src="/public/logo.svg" alt=""></v-icon>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between" id="navbarsExample07">
                    <ul class="navbar-nav nav-pills mb-2 mt-3 mt-lg-0 mb-lg-0 m-auto border-bottom pb-2">
                        <li class="nav-item me-3 m-auto">
                          <router-link to="/">الرئيسية</router-link>
                            <!-- <a class="nav-link active-link" @click="setActiveLink" aria-current="page" href="#landing">الرئيسية</a> -->
                        </li>
                        <li class="nav-item me-3 m-auto">
                            <a class="nav-link text-dark" href="/#about-us">
                              من نحن ؟
                            </a>
                        </li>
                        <li class="nav-item me-3 m-auto pb-2 pb-lg-0">
                          <router-link to="/products">المنتجات</router-link>
                        </li>
                        <li class="nav-item me-3 m-auto">
                            <router-link to="/articles">المدونة
                            </router-link>                            
                        </li>
                        <li class="nav-item me-3">
                            <a class="nav-link text-dark" href="#footer">اتصل بنا </a>
                        </li>
                    </ul>
                    <div>
                      <a href="" class="p-2">
                        <v-icon icon="mdi-account-circle"></v-icon>
                      </a>
                      <a href="" class="mx-4 p-2">
                        <v-icon icon="mdi-cart"></v-icon>
                      </a>
                      <a href="" class="p-2">
                        <v-icon icon="mdi-magnify"></v-icon>
                      </a>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    <!-- end header  -->
  </div>
</template>

<script>
import { mergeProps } from "vue";
export default {
  data() {
    return {};
  },
};
function setActiveLink(){
  const link = document.querySelector('.nav-item')
  link.onClick = console.log(link.innerHTML)
}
</script>
<style>
@import '../assets/_reset.css';
header .icon {
  max-width: 70px;
}
.active-link{
  color: #690108 !important;
}
.collapse .navbar-nav{
  border-color: #d5d5d5 !important;
}
@media (min-width: 992px){
  .collapse .navbar-nav{
    border: none !important;
  }
}
</style>