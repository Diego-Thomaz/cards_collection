<template>
  <header>
    <nav
      class="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <HeaderBarBrand :is-open="showMenu" @burgerClick="showMenu = !showMenu"></HeaderBarBrand>
      <div id="navbarCards" class="navbar-menu" :class="{ 'is-active': showMenu }">
        <HeaderBarMenu></HeaderBarMenu>
        <HeaderBarLinks></HeaderBarLinks>
      </div>
    </nav>
  </header>
</template>

<script>
import HeaderBarBrand from '@/components/ui/header_bar/header-bar-brand';
import HeaderBarMenu from '@/components/ui/header_bar/header-bar-menu';
import HeaderBarLinks from '@/components/ui/header_bar/header-bar-links';

export default {
  name: 'HeaderBar',
  data() {
    return {
      showMenu: false
    };
  },
  components: { HeaderBarBrand, HeaderBarMenu, HeaderBarLinks },
};
</script>
