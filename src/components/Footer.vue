<template>
    <div>
        <v-footer>
            <div class="container p-4">
                <v-row>
                    <div class="col-12 col-sm-6 col-md-3">
                        <div class="px-0 pb-4 p-md-0">
                            <a class="navbar-brand py-3" href="#">
                            <v-icon><img class="img-fluid icon" src="/public/logo.svg" alt=""></v-icon>
                            </a>
                            <p class="des-footer">نحن شركة ( SQline )متخصصة في إنتاج منتجات العناية بالبشرة, لا تفوت العروض، تابعنا للحصول على آخر الأخبار</p>
                            <div class="social-media pt-3 d-flex justify-content-md-start align-items-center">
                                <a href="" class="ps-0 ps-lg-3"><v-icon icon="mdi-whatsapp"></v-icon></a>
                                <a href="" class="ps-2 ps-lg-3"><v-icon icon="mdi-instagram"></v-icon></a>
                                <a href="" class="ps-2 ps-lg-3"><v-icon icon="mdi-facebook"></v-icon></a>
                                <a href=""><v-icon icon="mdi-twitter"></v-icon></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-3">
                        <div class="text-end pb-4 pb-md-0">
                            <h5 class="pb-3 footer-header">خدماتنا</h5>
                            <p class="py-1">العناية بالبشرة</p>
                            <p class="py-1">الجودة والتمييز</p>
                            <p class="py-1">توفير أفضل كريمات البشرة</p>
                            <p class="py-1">توصيل الى المنزل</p>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-3">
                        <h5 class="pb-3 footer-header">روابط سريعة</h5>
                        <div class="links text-end m-auto pb-5 pb-md-0">
                            <ul class="list-style-dot">
                                <li class="py-1"><router-link to="/">الرئيسية</router-link></li>
                                <li class="py-1"><a href="/#about-us">من نحن</a></li>
                                <li class="py-1"><router-link to="products">المنتجات</router-link></li>
                                <li class="py-1"><router-link to="articles">المدونة</router-link></li>
                                <li><router-link to="">اتصل بنا</router-link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-3">
                        <h5 class="pb-3 footer-header">لديك أسئلة ؟</h5>
                        <h6 class="py-2">تواصل معنا</h6>
                        <div class="links">
                            <p><v-icon icon="mdi-map-marker" class="ps-3"></v-icon> اليمن - حضرموت</p>
                            <p><v-icon icon="mdi-phone" class="ps-3 py-4"></v-icon> 967733365242</p>
                            <p><v-icon icon="mdi-email" class="ps-3"></v-icon>sqline@gmail.com</p>
                        </div>
                    </div>
                </v-row>
            </div>
        </v-footer>
        <div class="rights text-center p-2 text-light">
            <p>جميع الحقوق محفوظة &copy; 2025 SQline</p>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.v-footer {
    background-color: #FCF2D9;
}
.v-footer .icon{
    max-width: 70px;
}
.footer-header{
    position: relative;
}
.footer-header::before{
    content: '';
    position: absolute;
    right: 0;
    bottom: 4px;
    width: 40%;
    height: 1.3px;
    background-color: #690108;
}
.rights{
    background-color: #690108;
}
@media (min-width: 575px) {
    .des-footer{
        width: 90%;
    }
}
@media (max-width: 992px) {
    .footer-header::before{
    height: 1.2px !important;
}
}
</style>