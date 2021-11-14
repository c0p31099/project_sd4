<template>
  <div class="chat-list">
    <ul>
      <ChatListDetail
        v-for="i in person"
        v-bind:key="i.id"
        v-bind:name="i.name"
        v-bind:message="i.message"
      />
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import ChatListDetail from '@/components/ChatListDetail.vue'

export default {
  components: {
    ChatListDetail
  },
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
          name: '文教太郎',
          personality: '男性',
          year: '2',
          department: '情報学部 情報システム学科',
          message: 'よろしくおねがいします。あああああああああああああああああああああ'
        },{
          name: '文教太郎',
          personality: '男性',
          year: '2',
          department: '情報学部 情報システム学科',
          message: 'よろしくおねがいします。'
        },{
          name: '文教太郎',
          personality: '男性',
          year: '2',
          department: '情報学部 情報システム学科',
          message: 'よろしくおねがいします。'
        },{
          name: '文教太郎',
          personality: '男性',
          year: '2',
          department: '情報学部 情報システム学科',
          message: 'よろしくおねがいします。'
        },{
          name: '文教太郎',
          personality: '男性',
          year: '2',
          department: '情報学部 情報システム学科',
          message: 'よろしくおねがいします。'
        },{
          name: '文教太郎',
          personality: '男性',
          year: '2',
          department: '情報学部 情報システム学科',
          message: 'よろしくおねがいします。'
        },{
          name: '文教太郎',
          personality: '男性',
          year: '2',
          department: '情報学部 情報システム学科',
          message: 'よろしくおねがいします。'
        },{
          name: '文教太郎',
          personality: '男性',
          year: '2',
          department: '情報学部 情報システム学科',
          message: 'よろしくおねがいします。'
        }
      ]
    }
  }
}
</script>

<style scoped>
ul{
  list-style-type:none;
  padding:0 20px;
  width:650px;
  margin:auto;
}
</style>