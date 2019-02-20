<template>
  <div id="app">
  	<div class="hello">Hello {{ who }}</div> <br>
  	<p>
      <router-link to="/">Go To Home</router-link>
      <router-link to="/page2">Go To page2</router-link>
    </p>
  	<router-view></router-view>

  </div>
</template>

<script>
export default {
  data() {
    return {
      who: 'Vue and Webpack !!'
    }
  }
};
</script>

<style scoped>
.hello {
  padding: .5em;
  font-size: 2em;
  background-color: #fcf;
}
</style>