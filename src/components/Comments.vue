<template>
    <div>
        <div class="container">
            <div class="comments py-5">
                <div
                    class="comment-heading py-3 border-bottom border-1 border-dark d-flex justify-content-right align-items-center">
                    <h4>التعليقات ({{ commentNo }})</h4>
                </div>
                <div class="comments-content pt-3">
                    <div v-for="comment in comments" :key="comment.id" class="comment-section py-3">
                        <div class="name d-flex justify-content-between">
                            <h6 class="py-1">{{ comment.name }}</h6>
                        </div>
                        <div class="d-flex">
                            {{ comment.description }}
                            <button class="share-btn btn border share d-flex justify-content-between align-items-center">رد
                                <v-icon>mdi-share</v-icon>
                            </button>
                        </div>
                        <p class="pt-1">{{ comment.date }}<v-icon class="ps-4">mdi-calendar</v-icon> </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data: () => ({
        commentNo: 5,
        comments: [
            {
                id: 1,
                name: 'فاطمة سعيد',
                date: '4 مايو 2020',
                description: 'مقال رائع ومفيد! طالما كنت ترغب في تحديد معلومات حول الخيارات المتعددة الوظائف، وشرحكم لكيفية جمعها بين الترطيب والتغذية كان دقيقا للشركاء. سؤالي هو: هل تستطيع استخدام كريم متعدد الوظائف كبديل كامل عن السيروم، أم يُفضل دمجهما معًا؟'
            },
            {
                id: 1,
                name: 'نهى',
                date: '12 ديسمبر 2024',
                description: 'مقال رائع ومفيد! طالما كنت ترغب في تحديد معلومات حول الخيارات المتعددة الوظائف، وشرحكم لكيفية جمعها بين الترطيب والتغذية كان دقيقا للشركاء. سؤالي هو: هل تستطيع استخدام كريم متعدد الوظائف كبديل كامل عن السيروم، أم يُفضل دمجهما معًا؟'
            },
            {
                id: 1,
                name: 'حوله',
                date: '1 أكتوير 2022',
                description: 'مقال رائع ومفيد! طالما كنت ترغب في تحديد معلومات حول الخيارات المتعددة الوظائف، وشرحكم لكيفية جمعها بين الترطيب والتغذية كان دقيقا للشركاء. سؤالي هو: هل تستطيع استخدام كريم متعدد الوظائف كبديل كامل عن السيروم، أم يُفضل دمجهما معًا؟'
            },
            {
                id: 1,
                name: 'احمد',
                date: '6 أبريل 2025',
                description: 'مقال رائع ومفيد! طالما كنت ترغب في تحديد معلومات حول الخيارات المتعددة الوظائف، وشرحكم لكيفية جمعها بين الترطيب والتغذية كان دقيقا للشركاء. سؤالي هو: هل تستطيع استخدام كريم متعدد الوظائف كبديل كامل عن السيروم، أم يُفضل دمجهما معًا؟'
            },
        ],
    })
}
</script>
<style scoped>
.share-btn{
    height: fit-content !important;
}
</style>