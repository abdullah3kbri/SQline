<template>
    <div>
        <Landing />
        <div class="container">
            <div class="row m-auto products pt-5">
                <div class="col-md-6">
                    <div class="title">
                        <h3 class="py-5">المنتجات</h3>
                    </div>
                </div>
                <div class="col-md-6 m-auto">
                    <div class="filter d-sm-flex justify-content-start align-items-center">
                        <h6 class="mb-3 pe-3 text-dark">ترتيب</h6>
                        <v-select clearable label="مقترحاتنا"
                            :items="['مرطب', 'كريم', 'شامبو', 'صابون', 'شامبو', 'مرطب كريم']">
                        </v-select>
                    </div>
                </div>
            </div>
            <section class="py-5">
                <div class="row row-gap-4">
                    <div v-for="product in products" :key="product.id" class="col-md-6 col-lg-4">
                        <div class="product-card p-4" @click="goToDetails(product.id)">
                            <div class="card-title text-center pb-3">
                                <h5 class="text-dark">{{ product.title }}</h5>
                            </div>
                            <div class="d-flex product-price justify-content-between align-items-center">
                                <div>
                                    <p>{{ product.price }}</p>
                                    <p class="fw-bold">ساخن</p>
                                </div>
                                <div>
                                    <p>الخصم {{ product.discount }}</p>
                                    <p class="fw-bold">المتبقي {{ product.remins }}</p>
                                </div>
                            </div>
                            <div class="product-img">
                                <v-img :src="product.productImg"></v-img>
                            </div>
                            <div class="d-flex justify-content-between align-items-center bottom-icons">
                                <div class="stars">
                                    <v-icon>mdi-star-outline</v-icon>
                                    <v-icon>mdi-star-half</v-icon>
                                    <v-icon>mdi-star</v-icon>
                                    <v-icon>mdi-star</v-icon>
                                    <v-icon>mdi-star</v-icon>
                                </div>
                                <div class="comment">
                                    <v-icon>mdi-comment-processing-outline</v-icon>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Comments />
        </div>
        <Footer />
    </div>
</template>
<script>
import { useRoute } from 'vue-router';
const router = useRoute();
export default {
    data: () => ({
        products: [
            {
                id: 1,
                title: 'كريم سكيو لاين المغدي',
                productImg: "/img/cream1.png",
                price: "70 ريال",
                discount: "10 %",
                remins: 6
            },
            {
                id: 2,
                title: 'كريم سكيو لاين المغدي',
                productImg: "/img/creame22.png",
                price: "70 ريال",
                discount: "10 %",
                remins: 6
            },
            {
                id: 3,
                title: 'كريم سكيو لاين المغدي',
                productImg: "/img/cream1.png",
                price: "70 ريال",
                discount: "10 %",
                remins: 6
            },
            {
                id: 4,
                title: 'كريم سكيو لاين المغدي',
                productImg: "/img/creame22.png",
                price: "70 ريال",
                discount: "10 %",
                remins: 6
            },
            {
                id: 5,
                title: 'كريم سكيو لاين المغدي',
                productImg: "/img/cream1.png",
                price: "70 ريال",
                discount: "10 %",
                remins: 6
            },
            {
                id: 6,
                title: 'كريم سكيو لاين المغدي',
                productImg: "/img/creame22.png",
                price: "70 ريال",
                discount: "10 %",
                remins: 6
            },
        ],
    }),
    methods: {
        goToDetails(id) {
            this.$router.push('/productDetails');
        },
    },
}
</script>
<style scoped>
.product-card{
    width: 100%;
    height: 100%;
    background-color: #E6C7B2;
    border-radius: 15px;
    cursor: pointer;
}
@media (min-width: 992px) {
    .products .filtering{
        width: 25% !important;
    }
}
@media (min-width: 768px) {
    .products .filtering{
        width: 50%;
    }
}
@media (max-width: 767px) {
    .products .filtering{
        width: 100%;
    }
}
</style>