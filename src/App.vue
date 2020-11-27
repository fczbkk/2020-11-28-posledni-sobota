<template>
  <nav>
    <router-link
      v-for="(route, i) of routes"
      :key="i"
      :to="route.path"
      :class="{highlight: $router.currentRoute.value.path === route.path}"
    >
      {{ route.name }}
    </router-link>
  </nav>
  <router-view />
</template>

<script>
import { routes } from '@/router'

export default {
  setup () {
    return {
      routes
    }
  }
}
</script>

<style scoped>
  ::v-global(body) {
    background: #fff;
    color: #333;
    font-family: helvetica, arial, sans-serif;
    padding: 2em;
  }

  nav {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 2rem;
  }

  nav a {
    display: block;
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: #333;
    border-bottom: 0.25em solid transparent;
  }

  .highlight {
    border-bottom-color: #333;
  }
</style>
