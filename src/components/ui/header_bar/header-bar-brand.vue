<template>
  <div class="navbar-brand">
    <div class="navbar-item">
      <router-link to="/home">
        <img src="https://www.dailyesports.gg/wp-content/uploads/2018/10/untitled-37106.jpg">
      </router-link>
    </div>
    <a role="button"
       class="navbar-burger burger"
       :class="{ 'is-active': isOpen }"
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
    isOpen: {
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
