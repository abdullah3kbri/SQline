<template>
    <div>
        <div class="container articles pb-5">
            <div class="main-heading text-center">
                <h2 class="py-5">المقالات</h2>
            </div>
            <v-row>
                <div class="col-12 col-md-3 mb-4 mb-md-0">
                    <div class="title text-center w-75 m-md-auto">
                        <h5 class="p-3">المقالات</h5>
                    </div>
                    <v-text-field class="px-3 py-4" :loading="loading" append-inner-icon="mdi-magnify" density="compact"
                        label="بحث في المقالات .." variant="solo" hide-details single-line @click:append-inner="onClick"
                        clearable></v-text-field>
                    <div class="articles-names w-75 m-md-auto mt-3">
                        <ul class="">
                            <li class="py-2">أفضل 10 الكريمات الشخصية الساخنة: دليلك الشامل</li>
                            <li class="py-2">أحدث صيحات كريمات التجميل: ما يجب أن تعرفه</li>
                            <li class="py-2">كريمات التبييض: فوائدها وأضرارها</li>
                            <li class="py-2">كيفية الاختيار الكريم المناسب لبشرتك: نصائح مهمة</li>
                            <li class="py-2">تجارب حقيقية: كريمات التجميل التي لها فعاليتها</li>
                            <li class="py-2">مكونات كريمات التجميل: ما الذي يجب البحث عنه؟</li>
                            <li class="py-2">أحدث صيحات كريمات التجميل: ما يجب أن تعرفه</li>
                        </ul>
                    </div>
                </div>
                <div class="col-12 col-md-9">
                    <div class="article-heading d-flex justify-content-between">
                        <h5 class="text-dark">كريمات متعددة الوظائف: كيف يجمع بين الترطيب والتغذية؟</h5>
                        <span class="text-light px-3">2025</span>
                    </div>
                    <p class="author py-3">المؤلف : احمد خالد سعيد <v-icon class="me-2">mdi-pen</v-icon></p>
                    <div class="article-img">
                        <v-img src="/img/article2.png"></v-img>
                    </div>
                    <div class="date pt-2">
                        <span class="text-muted">2/1/2025 <v-icon>mdi-calendar</v-icon></span>
                    </div>
                    <div class="des">
                        <p class="paragraph-1 py-3 lh-lg">
                            وتتضمن هذه المقالة كريمات البشرة المتعددة الوظائف، مُبينة كيف يمكن لكريم واحد أن يُرطب
                            البــــــــــشرة ويغذيها في الوقت نفسه. سوف نقوم بشرح آلية عمل كل من الترطيب والتغذية،
                            بالإضافة إلى
                            المكونات الرئيسية التي ستقدر بشكل جيد لتحقيق الوظيفتين معًا. كما ستناقش فوائد استخدام كريمات
                            متعددة
                            الوظائف، ونصائح مفيدة للمناسب.
                        </p>
                        <ul>
                            <li>الترطيب: يعني تأثير خفيف على الجسم. تُحقق كريمات مُرطبة ذلك عن طريق سطح إلزامي على
                                البشرة تمنع بشدة، وبعضها يحتوي على مُركبات مُرطبة تجذب من الجلد إلى البشرة.</li>
                            <li>يحتوي على مكونات أساسية تحتوي على عناصر غذائية مثل الخضروات، الخضروات، ومضادات التغذية،
                                التي تساعد على إصلاح وتجدد البشرة، وبالتالي من التلف.</li>
                            <li>كيف تجمع الكريمات بين الترطيب والتغذية؟ ولهذا السبب، قمنا بتركيب تركيبات متعددة الوظائف
                                ومحددة متعددة بين مُكونات مُرطبة وغذائية. من أمثلة هذه المُكونات:</li>
                            <li>المرطبات (المرطبات): مثل الجلسرين وحمض الهيالورونيك، الذي يجذب الجلد.</li>
                            <li>المُغلّفات (المطريات): مثل الزيوت النباتية والسيراميد، التي تُنعّم البشرة والتي تشكل
                                مانعًا قويًا للماء.</li>
                            <li>المُغذيات: مثل الخضروات (A، C، E)، ومضادات التغذية، التي تُجرب مجانًا وتساعد على تجديد
                                خلايا البشرة.</li>
                            <p class="fw-bold pt-3">فوائد استخدام كريمات متعددة الوظائف:</p>
                            <li>التبسيط: تُقلل من عدد منتجات العناية بالبشرة اللازمة.</li>
                            <li>الفعالية: تُوفر ترطيباً وتغذية مُتكاملة.</li>
                            <li>التوفير: قد تكون أكثر اقتصادية من شراء منتجات مُنفصلة.</li>
                            <p class="fw-bold pt-3">نصائح مفيدة للمناسب:</p>
                            <li>نوع البشرة: اختيار كريم مُناسب لنوع البشرة (جافة، دهنية، مُختلطة، حساسة).</li>
                            <li>المُكونات: التحقق من قائمة المُكونات والتأكد من خلوها من المواد المُهيجة.</li>
                            <li>الخبرة: تجربة كريمة لمساحة صغيرة من البشرة قبل استخدامها على الوجه بالكامل</li>
                            <p class="fw-bold pt-3">اقتباس :</p>
                            <p class="fw-bold"> " ودّعي جفاف البشرة وافتقارها للتغذية بكريمات متعددة الوظائف! سرّ البشرة
                                المُشرقة الخفيف
                                نعمي ببشرة مُرطّبة ومُغذية بكريمات متعددة الوظائف، حليفك إذن لبشرة صحية ومُتألقة
                                الترطيب + التغذية = الجيل الجديد السريع التخصصي في كريمات متعددة الوظائف "</p>
                        </ul>
                    </div>
                </div>
                <div class="my-5 m-auto">
                    <v-pagination v-model="page" :length="5" rounded="1"></v-pagination>
                </div>
            </v-row>
            <Comments />
            <div class="last-articles">
                <div class="last-articles-heading position-relative py-3 mb-5">
                    <h4>آخر المقالات <span class="line me-5"></span></h4>
                </div>
                <v-row class="gap-2 row-gap-5">
                    <div class="col-12 col-md-5 m-auto" v-for="art in lastArticles" :key="art.id">
                        <div>
                            <div class="card-heading py-2 d-flex justify-content-between">
                            <h6 class="text-dark lh-sm">{{ art.title }}</h6>
                            <span class="text-light px-3">{{ art.date }}</span>
                            </div>
                            <div class="author">
                                <span> المؤلف : {{ art.author }} <v-icon class="ms-2">mdi-pen</v-icon></span>
                            </div>
                            <div class="card-img py-2">
                                <v-img :src="art.articleImg"></v-img>
                            </div>
                            <div class="card-desc">
                                <p>{{ art.para1 }}</p>
                                <p class="py-3">{{ art.para2 }}</p>
                                <p>{{ art.para3 }}</p>
                            </div>
                        </div>
                    </div>
                </v-row>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data: () => ({
        loaded: false,
        loading: false,
        page: 1,
        lastArticles: [
            {
                id: 1,
                title: "كريمات متعددة الوظائف: كيف يجمع بين الترطيب والتغذية؟",
                date: '2025',
                author: "احمد سعيد عمر",
                para1: "وتتضمن هذه المقالة كريمات البشرة المتعددة الوظائف، مُبينة كيف يمكن لكريم واحد أن يُرطب البشرة ويغذيها في الوقت نفسه. سوف نقوم بشرح آلية عمل كل من الترطيب والتغذية، بالإضافة إلى المكونات الرئيسية التي ستقدر بشكل جيد لتحقيق الوظيفتين معًا. كما ستناقش فوائد استخدام كريمات متعددة الوظائف، ونصائح مفيدة للمناسب.",
                para2: "لترطيب:   يعني تأثير خفيف على الجسم. تُحقق كريمات مُرطبة ذلك عن طريق سطح إلزامي على البشرة تمنع بشدة، وبعضها يحتوي على مُركبات مُرطبة تجذب من الجلد إلى البشرة                         اقرأ اكثر  ",
                para3: "اقتباس : شرة صحية تحتاج إلى ترطيب وتغذية. كريمات متعددة تقدم حلاًّ شاملة تُغذي البشرة من الداخل وتحميها من الخارج.",
                articleImg: "/img/article2.png"
            },
            {
                id: 1,
                title: "كريمات متعددة الوظائف: كيف يجمع بين الترطيب والتغذية؟",
                date: '2025',
                author: "احمد سعيد عمر",
                para1: "وتتضمن هذه المقالة كريمات البشرة المتعددة الوظائف، مُبينة كيف يمكن لكريم واحد أن يُرطب البشرة ويغذيها في الوقت نفسه. سوف نقوم بشرح آلية عمل كل من الترطيب والتغذية، بالإضافة إلى المكونات الرئيسية التي ستقدر بشكل جيد لتحقيق الوظيفتين معًا. كما ستناقش فوائد استخدام كريمات متعددة الوظائف، ونصائح مفيدة للمناسب.",
                para2: "لترطيب:   يعني تأثير خفيف على الجسم. تُحقق كريمات مُرطبة ذلك عن طريق سطح إلزامي على البشرة تمنع بشدة، وبعضها يحتوي على مُركبات مُرطبة تجذب من الجلد إلى البشرة                         اقرأ اكثر  ",
                para3: "اقتباس : شرة صحية تحتاج إلى ترطيب وتغذية. كريمات متعددة تقدم حلاًّ شاملة تُغذي البشرة من الداخل وتحميها من الخارج.",
                articleImg: "/img/article2.png"
            },
            {
                id: 1,
                title: "كريمات متعددة الوظائف: كيف يجمع بين الترطيب والتغذية؟",
                author: "احمد سعيد عمر",
                date: '2025',
                para1: "وتتضمن هذه المقالة كريمات البشرة المتعددة الوظائف، مُبينة كيف يمكن لكريم واحد أن يُرطب البشرة ويغذيها في الوقت نفسه. سوف نقوم بشرح آلية عمل كل من الترطيب والتغذية، بالإضافة إلى المكونات الرئيسية التي ستقدر بشكل جيد لتحقيق الوظيفتين معًا. كما ستناقش فوائد استخدام كريمات متعددة الوظائف، ونصائح مفيدة للمناسب.",
                para2: "لترطيب:   يعني تأثير خفيف على الجسم. تُحقق كريمات مُرطبة ذلك عن طريق سطح إلزامي على البشرة تمنع بشدة، وبعضها يحتوي على مُركبات مُرطبة تجذب من الجلد إلى البشرة                         اقرأ اكثر  ",
                para3: "اقتباس : شرة صحية تحتاج إلى ترطيب وتغذية. كريمات متعددة تقدم حلاًّ شاملة تُغذي البشرة من الداخل وتحميها من الخارج.",
                articleImg: "/img/article2.png"
            },
            {
                id: 1,
                title: "كريمات متعددة الوظائف: كيف يجمع بين الترطيب والتغذية؟",
                author: "احمد سعيد عمر",
                date: '2025',
                para1: "وتتضمن هذه المقالة كريمات البشرة المتعددة الوظائف، مُبينة كيف يمكن لكريم واحد أن يُرطب البشرة ويغذيها في الوقت نفسه. سوف نقوم بشرح آلية عمل كل من الترطيب والتغذية، بالإضافة إلى المكونات الرئيسية التي ستقدر بشكل جيد لتحقيق الوظيفتين معًا. كما ستناقش فوائد استخدام كريمات متعددة الوظائف، ونصائح مفيدة للمناسب.",
                para2: "لترطيب:   يعني تأثير خفيف على الجسم. تُحقق كريمات مُرطبة ذلك عن طريق سطح إلزامي على البشرة تمنع بشدة، وبعضها يحتوي على مُركبات مُرطبة تجذب من الجلد إلى البشرة                         اقرأ اكثر  ",
                para3: "اقتباس : شرة صحية تحتاج إلى ترطيب وتغذية. كريمات متعددة تقدم حلاًّ شاملة تُغذي البشرة من الداخل وتحميها من الخارج.",
                articleImg: "/img/article2.png"
            },
        ],
    }),

    methods: {
        onClick() {
            this.loading = true
            setTimeout(() => {
                this.loading = false
                this.loaded = true
            }, 2000)
        },
    },
}
</script>
<style scoped>
.articles .title{
    background-color: #eee;
    border-radius: 8px;
}
.articles .article-heading span, .card-heading span{
    background-color: #690108;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.articles .des ul li{
    list-style-type: disc !important;
}
.articles .v-icon{
  color: #690108;
    font-size: 18px;
}
.last-articles .last-articles-heading span{
    height: 1.2px;
    width: 80%;
    background-color: #000;
    color: #000;
    position: absolute;
    top: 50%;
    transform: translateY(50%);
}
@media (max-width: 992px){
    .last-articles .last-articles-heading span{
        width: 70%;
    }
}
@media (max-width: 600px){
    .last-articles .last-articles-heading span{
        width: 60% !important;
    }
}
@media (max-width: 400px){
    .last-articles .last-articles-heading span{
        width: 50% !important;
        margin-right: 15px !important;
    }
}
.last-articles .author span{
    font-size: 13px;
}
</style>