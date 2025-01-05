<template>
    <div>
        <div class="about p-5">
            <div class="container p-4">
                <div class="heading d-flex justify-content-between align-items-center pb-5">
                    <h1>من نحن</h1>
                    <h1>SQline</h1>
                </div>
                <div class="content pt-3 pb-5">
                    <div class="row">
                        <div class="col-md-8">
                            <div>
                                <p class="lh-lg fw-bold">نحن شركة ( <span class="fw-bold">SQline</span> )متخصصة في إنتاج منتجات العناية بالبشرة، نهدف إلى تمكين الصحة وإظهار البشرة من خلال توفير البيانات الشخصية. تسجيل الدخول على مبادئ الجودة والتميز، حيث تستخدم مكونات طبيعية وآمنة تجربة مميزة لكل عميل. نحن نؤمن بأن العناية بالبشرة ليست مجرد بشرة، بل هي رحلة نحو الجمال والثقة .</p>
                                <p class="lh-lg fw-bold py-4 pb-md-0">نعتز بفريق من الخبراء في الفئات العمالية والجميلة، مما يتيح لنا تطوير حلول الاحتياجات الأساسية لجميع أنواع البشرة. نركز على الاستدامة ونعتمد الممارسات البيئية في عملياتنا. نحن هنا لنكون شريككم في رحلة العناية بالبشرة، ونلتزم بتقديم منتجات جديدة من جمالكم الطبيعية وتحقق نتائج ملموس</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div>
                                <v-img src="../assets/img/about.png"></v-img>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="see-more d-flex justify-content-center align-items-center">
                    <div class="line"></div>
                    <a class="ps-2 text-dark d-flex justify-content-center align-items-center">شاهد أكثر <span class="pe-2 arrow"><v-icon icon="mdi-arrow-left"></v-icon></span></a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.about{
    background-image: url(../assets/img/AboutTheCompany.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.about .see-more .line{
    width: 90%;
    height: 1.4px;
    background-color: #000;
}
.about .see-more a .arrow{
    font-size: 14px !important;
}
.about .content p > span{
    color: #690108;
}
</style>