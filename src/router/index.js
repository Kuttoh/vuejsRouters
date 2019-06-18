import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import blog from '@/components/blog'
import services from '@/components/services'
import contactForm from '@/components/contactForms'
import userInfo from '@/components/userInfo'
import companyInfo from '@/components/companyInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/blog',
      name: blog,
      component: blog
    },
    {
      path: '/contactForm',
      name: contactForm,
      component: contactForm,

      children: [{
        path: '/contactForm/user',
        name: userInfo,
        component: userInfo
      },
        {
          path: '/contactForm/company',
          name: companyInfo,
          component: companyInfo
        }]
    },
    {
      path: '/services',
      name: 'services',
      component: services
    }

  ]
})

