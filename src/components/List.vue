<template>
  <div class="list">
    <ul id="example-1">
      <ListDetail
        v-for="i in person"
        v-bind:key="i.id"
        v-bind:name="i.name"
        v-bind:personality="i.personality"
        v-bind:year="i.year"
        v-bind:department="i.department"
        v-bind:message="i.message"
      />
    </ul>
  </div>
</template>

<script>
import ListDetail from '@/components/ListDetail.vue'

export default {
  components: {
    ListDetail
  },
  name: 'lists',
  data(){
    return{
      person: [
        {
          name: '文教太郎',
          personality: '男性',
          year: '2',
          department: '情報学部 情報システム学科',
          message: 'よろしくおねがいします。'
        },{
          name: '文教太郎2',
          personality: '女性',
          year: '3',
          department: '情報学部 情報システム学科',
          message: 'よろしくおねがいします。よろしくおねがいします。よろしくおねがいします。よろしくおねがいします。よろしくおねがいします。よろしくおねがいします。よろしくおねがいします。よろしくおねがいします。よろしくおねがいします。よろしくおねがいします。よろしくおねがいします。よろしくおねがいします。よろしくおねがいします。よろしくおねがいします。よろしくおねがいします。よろしくおねがいします。よろしくおねがいします。よろしくおねがいします。よろしくおねがいします。よろしくおねがいします。よろしくおねがいします。よろしくおねがいします。よろしくおねがいします。'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
  display:flex;
  flex-wrap:wrap;
  justify-content:space-evenly;
  list-style-type:none;
  padding:0 20px;
}
</style>
