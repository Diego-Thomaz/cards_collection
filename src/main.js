import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import VueCurrencyInput from 'vue-currency-input'
import VueApollo from 'vue-apollo';

Vue.config.productionTip = false;

const httpLink = new HttpLink({
  uri: 'http://localhost:3000/graphql' //localhost backend api
});

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
});

Vue.use(VueApollo);
Vue.use(VueCurrencyInput);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

new Vue({
  router,
  apolloProvider,
  render: h => h(App)
}).$mount('#app')
