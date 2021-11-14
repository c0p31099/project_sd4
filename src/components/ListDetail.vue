<!-- クラスの名前めちゃくちゃ適当に付けました。ごめんなさい -->

<template>
  <li>
    <modal
      v-show="showContent"
      v-on:from-child="closeModal"
      :name="name"
      :personality="personality"
      :year="year"
      :department="department"
      :message="message"
    />
    <div class="ListDetail" v-on:click="openModal">
      <person
        :name="name"
        :personality="personality"
        :year="year"
        :department="department"
        :message="message"
      />
    </div>
  </li>
</template>

<script>
import modal from '@/components/Modal.vue'
import person from '@/components/Person.vue'

export default {
  name: 'ListDetail',
  components: {
    modal,
    person
  },
  data(){
    return{
      showContent: false
    }
  },
  props:{
    name: String,
    personality: String,
    year: String,
    department: String,
    message: String
  },
  methods: {
    openModal() {
      this.showContent = true
    },
    closeModal () {
      this.showContent = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ListDetail{
  background-color: #f7f6f3;
  cursor: pointer;
  padding:20px;
  margin:10px 5px;
}

p{
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>