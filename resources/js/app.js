import './bootstrap';
import ApolloClient from 'apollo-boost';
import AuthorPostList from './AuthorPostList';
import moment from 'moment';
import NotFound from './NotFound';
import Post from './Post';
import PostList from './PostList';
import TopicPostList from './TopicPostList';
import Vue from 'vue';
import VueApollo from 'vue-apollo';
import VueRouter from 'vue-router';




window.Vue = Vue;
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'index',
        component: PostList
    },
    {
        path: '/authors/:id',
        name: 'author',
        component: AuthorPostList
    },
    {
        path: '/post/:id',
        name: 'post',
        component: Post
    },
    {
        path: '/topics/:slug',
        name: 'topic',
        component: TopicPostList
    },
    {
        path: '*',
        name: '404',
        component: NotFound
    }

];

Vue.use(VueApollo);
const apolloClient = new ApolloClient({
    //absolute URL
    //uri: 'https://api.graphcms.com/simple/v1/awesomeTalksClone'
    uri: 'http://127.0.0.1:8000/graphql'
});
const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
});

const router = new VueRouter({
    mode: 'history',
    routes
});

Vue.filter('timeago', value => moment(value).fromNow());
Vue.filter('longDate', value => moment(value).format("MMMM Do YYYY"));

const app = new Vue({
    el: '#app',
    apolloProvider,
    router
});
