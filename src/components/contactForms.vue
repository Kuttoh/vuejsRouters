<template>
    <div class="container">

<!--        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">-->

        <ul class="nav ">
            <li class="nav-item">
                <router-link to="/contactForm/user" class="nav-link active" >User Information</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/contactForm/company" class="nav-link" >Company Information</router-link>
            </li>
        </ul>

<!--        <div class="tab-content">-->
<!--            <div id="userinfo" class="tab-pane fade in active">-->
<!--                <user-info></user-info>-->
<!--            </div>-->
<!--            <div id="companyinfo" class="tab-pane fade">-->
<!--                <company-info></company-info>-->
<!--            </div>-->
<!--        </div>-->
        <router-view></router-view>
    </div>

</template>

<script>
    import userInfo from './userInfo'
    import companyInfo from './companyInfo'
    import contactForms from './contactForms'

    export default {
        name: "contactForms",

        components: {userInfo, companyInfo, contactForms},
    }
</script>

<style scoped>

    .nav-tabs li a{
            margin-left: 0px;
            margin-right: 10px;
        }

</style>
