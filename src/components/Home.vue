<template>
  <div class="top">
    <p>{{ msg }}</p>
    <Child v-on:child_clicked="handler"></Child>
  </div>
</template>

<script>
  import Child from './Child'
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    components: {
      Child
    },
    methods: {
      handler: function() {
        console.log('nothing special');
      }
    }
  }
</script>

<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
