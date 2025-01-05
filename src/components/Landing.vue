<template>
    <div>
        <!-- start landing -->
        <div class="landing">
            <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" aria-current="true"
                        aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" class="active"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item">
                        <div class="container">
                            <div class="carousel-caption text-start">
                                <h1 class="fw-bold">امنحي بشرتك العناية التي تستحقها </h1>
                                <p class="sub-title fs-5 py-3">جربي مجموعتنا الجديدة</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item active">
                        <div class="container">
                            <div class="carousel-caption h-100 d-flex flex-column justify-content-between">
                                <h1 class="fw-bold" style="margin-top: 8rem;">امنحي بشرتك العناية التي تستحقها </h1>
                                <p class="sub-title fs-5 pb-4">جربي مجموعتنا الجديدة</p>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="container">
                            <div class="carousel-caption text-end">
                                <h1 class="fw-bold">امنحي بشرتك العناية التي تستحقها </h1>
                                <p class="sub-title fs-5 py-3">جربي مجموعتنا الجديدة</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <div class="arrow-icon p-3 d-none d-md-block">
                        <v-icon icon="mdi-arrow-left"></v-icon>
                        <span class="visually-hidden">السابق</span>
                    </div>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <div class="arrow-icon p-3 d-none d-md-block">
                        <v-icon icon="mdi-arrow-right"></v-icon>
                        <span class="visually-hidden">التالي</span>
                    </div>
                </button>
            </div>
        </div>
        <!-- end landing -->
    </div>
</template>
<script>

</script>
<style scoped>
/* start landing */
:root{
  --primary-color: #FCF2D9;
  --sec-color: #690108;
}
.landing .carousel-inner .carousel-item{
    background-image: url(../assets/img/landing.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    width: 100%;
    min-height: 100vh;
}
.landing .carousel-control-prev .arrow-icon,
.landing .carousel-control-next .arrow-icon{
  border-radius: 50%;
  border: 1px solid #ffffff;
  background-color: #dedede;
}
.landing .carousel-inner .carousel-item .sub-title{
  color: #690108;
  word-spacing: 4px;
  letter-spacing: 0.8px;
}
</style>