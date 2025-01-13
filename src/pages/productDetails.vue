<template>
    <div>
        <Landing />
        <div class="breadcrumb">
            <div class="container">
                <ol class="d-flex p-3">
                    <li class="breadcrumb-item">
                        <router-link to="/">الرئيسية</router-link>
                    </li>
                    <li class="breadcrumb-item position-relative px-4">
                        تفاصيل المنتج
                    </li>
                </ol>
            </div>
        </div>
        <div class="container">
            <div class="row m-auto products pt-5">
                <div class="col-md-6">
                    <div class="title">
                        <h3 class="py-5">تفاصيل المنتج</h3>
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
                <div class="row">
                    <div class="col-md-6">
                        <div class="product-img-side pb-5 pb-md-0">
                            <v-img src="/img/productImgDetails.png"></v-img>
                            <div class="gap-2 d-flex justify-content-between align-items-center pt-2">
                                <v-img src="/img/productImgDetails.png"></v-img>
                                <v-img src="/img/productImgDetails.png"></v-img>
                                <v-img src="/img/productImgDetails.png"></v-img>
                                <v-img src="/img/productImgDetails.png"></v-img>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="product-details-side">
                            <div
                                class="product-title d-flex justify-content-between align-items-center border-bottom border-1 border-dark pb-4">
                                <div>
                                    <h4 class="fw-bold pb-1">كريم سكيو لاين </h4>
                                    <p>كريم مبيض للبشرة</p>
                                </div>
                                <div class="share-icon">
                                    <v-icon>mdi-share-variant-outline</v-icon>
                                </div>
                            </div>
                            <div
                                class="d-flex justify-content-between align-items-center product-price py-5 border-bottom border-1 border-dark">
                                <div class="price"><span class="fw-bold fs-3">90</span> ريال سعودي</div>
                                <p class="comments p-2">7 تعليقات <span><v-icon
                                            class="fs-6">mdi-comment-processing-outline</v-icon></span></p>
                                <p class="rate p-2">4.8 <v-icon class="fs-6">mdi-star-outline</v-icon></p>
                            </div>
                            <div class="size py-4">
                                <h6 class="pb-3 text-dark">حدد الحجم :</h6>
                                <v-radio-group class="flex" inline>
                                    <v-radio label="كبير" value="one"></v-radio>
                                    <v-radio class="mx-3" label="وسط" value="two"></v-radio>
                                    <v-radio label="صغير" value="three"></v-radio>
                                </v-radio-group>
                            </div>
                            <div class="order-now row">
                                <h6 class="pb-3 text-dark">حدد الكمية :</h6>
                                <v-number-input control-variant="split" min="0"></v-number-input>
                                <div class="button">
                                    <v-btn class="btn-order w-100 text-light" size="large">طلب</v-btn>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div class="tabs">
                <v-tabs v-model="tab" align-tabs="title border-bottom border-1 border-dark">
                    <v-tab v-for="item in description" :key="item.id" :text="item.title"></v-tab>
                </v-tabs>
                <v-tabs-window v-model="tab" class="pt-4 pb-5">
                    <v-tabs-window-item v-for="item in description" :key="item.id">
                        <div>
                            <p class="w-75" v-text="item.details"></p>
                        </div>
                        <h6 class="py-3">المكونات الرئيسية</h6>
                        <ul class="pe-3">
                            <li>حمض الكوجيك: يساعد في تقليل تصبغات الجلد.</li>
                            <li>فيتامين C: ينتج إشراقة اللون وتنوع كمضاد للأكسدة</li>
                            <li>عطر الألوفيرا: يهدئ البشرة ويرطبها.</li>
                            <li>حمض الهيالورونيك: يحافظ على رطوبة التربة ويمنحها مظهرًا تنفيسًا.</li>
                        </ul>
                        <h6 class="py-3">فوائد المنتج:</h6>
                        <ul class="pe-3">
                            <li>توحيد لون البشرة.</li>
                            <li>من المتوقع ظهور البث المباشر.</li>
                            <li>يمنح إشراقة ونضارة رئاسية.</li>
                            <li>مناسب لجميع أنواع البشرة، بما في ذلك البشرة الحساسة.</li>
                        </ul>
                        <h6 class="py-3">طريقة الاستخدام:</h6>
                        <ol class="pe-3">
                            <li>تذهب العدوى ومساءً بعد تنظيف البشرة جيدًا.</li>
                            <li>يتم توزيعه الكريم على الوجه والرقبة.</li>
                            <li>يُفضل استخدام واقي الشمس خلال النهار لحماية البشرة.</li>
                        </ol>
                        <h6 class="py-3">تحذيرات:</h6>
                        <ul class="pe-3"> 
                            <li>يُفضل إجراء اختبار للتكوين قبل الاستخدام.</li>
                            <li>يُخزن في مكان بارد وجاف بعيدًا عن أشعة الشمس المباشرة.</li>
                        </ul>
                    </v-tabs-window-item>
                </v-tabs-window>
            </div>
            <div class="related-products">
                <h4 class="border-bottom border-1 border-dark pb-4">عناصر مشابهة قد تعجبك أيضاً</h4>
                <section class="py-5">
                    <div class="row row-gap-4">
                        <div v-for="product in products" :key="product.id" class="col-md-6 col-lg-4">
                            <div class="product-card p-4">
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
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
export default {
    data () {
      return {
        tab: null,
        description: [
            {
                id: 1,
                title: 'الوصف',
                details: 'كريم تبييض البشرة مصمم خصيصًا لتفتيح لون البشرة ومظهرها. يحتوي على مكونات طبيعية ومركبات فعالة تعمل على تعزيز نمو شهر العسل والصبغات، مما يكسب البشرة إشراقة صحية ونضارة.',
                components : [
                    {
                        id: 1,
                        name: 'حمض الكوجيك: يساعد في تقليل تصبغات الجلد.'
                    },
                    {
                        id: 2,
                        name: 'فيتامين C: ينتج إشراقة اللون وتنوع كمضاد للأكسدة.'
                    },
                    {
                        id: 3,
                        name: 'عطر الألوفيرا: يهدئ البشرة ويرطبها.'
                    },
                    {
                        id: 4,
                        name: 'حمض الهيالورونيك: يحافظ على رطوبة التربة ويمنحها مظهرًا تنفيسًا.'
                    }
                ]
            },
            {
                id: 1,
                title: 'المراجعات',
            },
        ],
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
                productImg: "/img/creame2.png",
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
            }
        ],
      }
    },
}
</script>
<style scoped>
.breadcrumb{
    background-color: #E6C7B2;
    margin-top: -25px;
}
.breadcrumb .breadcrumb-item:last-child::before{
    content: ' / ';
    position: absolute;
    right: 0;
    top: 0;
}
.product-details-side .comments, .product-details-side .rate{
    background-color: #eee;
    border-radius: 12px;
}
.v-radio-group .v-radio{
    background-color: #eee;
    padding: 0 8px;
    border-radius: 12px;
}
.btn-order{
    background-color: #690108;
}
.tabs ul li{
    list-style-type: disc !important;
}
.tabs ol li{
    list-style-type: digit !important;
}
.v-tabs--align-tabs-title:not(.v-slide-group--has-affixes) .v-tab:first-child {
    margin-inline-start: 0;
}
.product-card{
    width: 100%;
    height: 100%;
    background-color: #E6C7B2;
    border-radius: 15px;
}
</style>