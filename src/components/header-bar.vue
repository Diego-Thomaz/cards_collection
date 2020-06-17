<template>
  <header>
    <nav
      class="navbar"
      role="navigation"
      aria-label="main navigation"
    >
      <HeaderBarBrand :menu="showMenu" @burgerClick="displayMenu"></HeaderBarBrand>
      <div id="navbarCards" class="navbar-menu" :class="{ 'is-active': showMenu }">
        <HeaderBarMenu></HeaderBarMenu>
      </div>
    </nav>
  </header>
</template>

<script>
import HeaderBarBrand from '@/components/header-bar-brand';
import HeaderBarMenu from '@/components/header-bar-menu';

export default {
  name: 'HeaderBar',
  data() {
    return {
      showMenu: false
    };
  },
  components: { HeaderBarBrand, HeaderBarMenu },
  methods: {
    displayMenu() {
      return this.showMenu = !this.showMenu;
    }
  }
};
</script>
