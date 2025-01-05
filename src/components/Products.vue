<template>
    <div>
        <div class="products py-5 container">
            <v-row>
                <div class="col-12 col-md-3">
                    <div class="title text-center w-75 m-auto">
                        <h4 class="p-3">منتجاتنا</h4>
                    </div>
                    <div class="products-names w-75 m-auto mt-3">
                        <ul class="">
                            <li class="py-2">كريمات التفتيح</li>
                            <li class="py-2">كريمات الترطيب</li>
                            <li class="py-2">ماسك التفتيح وإزالة التصبغات</li>
                            <li class="py-2">بكج العناية</li>
                            <li class="py-2">ماسكات القهوة</li>
                            <li class="py-2">كريمات التفتيح</li>
                            <li class="py-2">كريمات مضادة للشيخوخة</li>
                            <li class="py-2">كريمات التفتيح</li>
                        </ul>
                        <div class="all-types mt-5 text-center py-3">
                            <a href="" class="text-light"><span class="pe-2 arrow"><v-icon icon="mdi-arrow-right"></v-icon></span> جميع الفئات</a>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-md-9">
                    <v-row class="justify-content-evenly mb-3 mt-5 mt-md-0">
                        <div class="col-5">
                            <div class="first-product">
                                <v-img src="../assets/img/product1.png"></v-img>
                            </div>
                        </div>
                        <div class="col-5">
                            <div class="second-product">
                                <v-img src="../assets/img/product2.png"></v-img>
                            </div>
                        </div>
                    </v-row>
                    <v-row class="justify-content-evenly mb-3">
                        <div class="col-5">
                            <div class="thirt-product">
                                <v-img src="../assets/img/product3.png"></v-img>
                            </div>
                        </div>
                        <div class="col-5">
                            <div class="fourth-product">
                                <v-img src="../assets/img/product4.png"></v-img>
                            </div>
                        </div>
                    </v-row>
                    <v-row class="justify-content-evenly">
                        <div class="col-5">
                            <div class="sixth-product">
                                <v-img src="../assets/img/product5.png"></v-img>
                            </div>
                        </div>
                        <div class="col-5">
                            <div class="seven-product">
                                <v-img src="../assets/img/product1.png"></v-img>
                            </div>
                        </div>
                    </v-row>
                </div>
            </v-row>
        </div>
    </div>
</template>
<script>

</script>
<style scoped>
.products .title{
    background-color: #eee;
    border-radius: 8px;
}
.products .all-types{
    background-color: #690108;
    border-radius: 8px;
    font-size: 13px;
}
.products .all-types span i::before{
    color: #fff;
    font-size: 15px;
}
.products .all-types a:hover{
    color: #fff !important;
}
</style>