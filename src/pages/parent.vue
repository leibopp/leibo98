<template>
  <div class="parent">
    <h3>这里是父组件</h3>
    <button type="button" @click="clickHandler">修改自己文本</button>
    <button type="button" @click="clickHandler2">修改子组件文本</button>
    <div>Test: {{msg}}</div>
    <div>doneTodosCountobj: {{mapGetObj}}</div>
    <child></child>
    <button type="button" @click="increment">增加action</button>
    <button type="button" @click="decrement">减少action方法</button>
    <div>doneTodosCount3: {{doneTodosCount3}}</div>
    <input type="text" v-model="incrementValue">
    <button @click="incrementWithValue">添加自定义的输入数字{{incrementValue}}</button>
    <!-- 展示信息 -->
    <div v-if ="show">
        waiting 
    </div>
  </div>
</template>
<script>
import Child from '../components/Child.vue'
import {mapState, mapGetters,mapActions} from 'vuex'

export default {
  name: 'parent',
  computed: {
    doneTodosCount3 () {
      return this.$store.getters.getTodoById(2)
    },
    show: function() {
      return this.$store.state.waiting;
    },
    ...mapGetters ({mapGetObj:'doneTodosCount'}),
    ...mapState ({
      msg: 'testMsg'
    })
  },
  data() {
    return {
      incrementValue: 0
    }
  },
  methods: {
    clickHandler () {
      this.$store.commit('changeTestMsg', '父组件修改自己后的文本')
    },
    clickHandler2 () {
      this.$store.commit('changeChildText', '父组件修改子组件后的文本')
    },
    ...mapActions (["increment"]),
    decrement () {
      this.$store.dispatch("decrement",'decrement带参数');
    },
    incrementWithValue() {
      this.$store.dispatch("incrementWithValue", this.incrementValue)
  }
  },
  components: {
    'child': Child
  }
}
</script>
<style scoped>
  .parent{
    background-color: #00BBFF;
    height: 400px;
  }
</style>
