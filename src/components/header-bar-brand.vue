<template>
  <div class="navbar-brand">
    <div class="navbar-item">
      <router-link to="/home">
        <img src="../assets/logo.png">
      </router-link>
    </div>
    <a role="button"
       class="navbar-burger burger"
       :class="{ 'is-active': menu }"
       aria-label="menu"
       aria-expanded="false"
       data-target="navbarCards"
       @click="showHideMenu"
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    menu: {
      type: Boolean,
      default: () => false
    },
  },
  methods: {
    showHideMenu() {
      this.$emit('burgerClick');
    },
  },
}
</script>
