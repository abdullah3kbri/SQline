<template>
    <div>
        <div class="yemen-map p-5">
            <v-card class="mx-auto px-6 py-8 text-end" max-width="450">
                <v-card-title class="text-center py-2 pb-5 fs-4 fw-bold">تواصل معنا</v-card-title>
                <v-form v-model="form" @submit.prevent="onSubmit">
                    <div class="d-block d-md-flex justify-content-between">
                        <v-text-field v-model="email" :readonly="loading" class="mb-2" label="العنوان"
                            placeholder="ادخل العنوان" prepend-inner-icon="mdi-map-marker" clearable></v-text-field>
                        <div class="pe-4 d-none d-md-block">
                            <p class="fs-5 fw-bold">اتصل بنا</p>
                            <p>hi@sqline.com</p>
                        </div>
                    </div>

                    <div class="d-block d-md-flex justify-content-between">
                        <div class="flex-column col-md-8">
                            <v-text-field v-model="password" :readonly="loading" label="الايميل"
                            prepend-inner-icon="mdi-email-outline"
                                placeholder="ادخل البريد الالكتروني" clearable></v-text-field>
                                
                            <v-text-field v-model="password" :readonly="loading" label="اترك الرسالة"
                            prepend-inner-icon="mdi-note"
                                placeholder="ادخل الرسالة" clearable></v-text-field>
                        </div>
                        <div class="text-center text-md-end">
                            <p class="fs-5 fw-bold">ارقام التواصل</p>
                            <p>96773337460+</p>
                            <p>96773337460+</p>
                            <p>96773337460+</p>
                        </div>
                        <div class="pe-4 d-inline d-md-none text-center text-md-end">
                            <p class="fs-5 fw-bold">اتصل بنا</p>
                            <p>hi@sqline.com</p>
                        </div>
                    </div>

                    <br>

                    <v-btn :disabled="!form" :loading="loading" size="large" type="submit" variant="elevated" block>
                        ارسال
                    </v-btn>
                    <div class="social-media pt-4 d-flex justify-content-evenly align-items-center">
                        <a href=""><v-icon icon="mdi-whatsapp"></v-icon></a>
                        <a href=""><v-icon icon="mdi-instagram"></v-icon></a>
                        <a href=""><v-icon icon="mdi-facebook"></v-icon></a>
                        <a href=""><v-icon icon="mdi-twitter"></v-icon></a>
                    </div>
                </v-form>
            </v-card>
        </div>
    </div>
</template>
<script>
export default {
    data: () => ({
        form: false,
        email: null,
        password: null,
        loading: false,
    }),

    methods: {
        onSubmit() {
            if (!this.form) return
            this.loading = true
            setTimeout(() => (this.loading = false), 2000)
        },
    },
}
</script>
<style scoped>
.yemen-map {
    background-image: url(../assets/img/yemen.png);
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.yemen-map .v-btn {
    background-color: #690108;
    color: #fff;
}
</style>