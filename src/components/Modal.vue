<template>
  <div>
    <div id="overlay" v-on:click="clickEvent">
      <div id="content" v-on:click="stopEvent">
        <h2>プロフィール</h2>
        <div id="Profile">
          <img src="@/assets/plof.png">
          <div id="P-margin">
            <div>
              <p>氏名</p>
              <p>学年</p>
              <p>学科</p>
            </div>
            <div id="prof-main">
              <p>{{name}}</p>
              <p>{{year}}年</p>
              <p>{{department}}</p>
            </div>
          </div>
          <div id="good">
            <span class="material-icons large">
            star
            </span>
          </div>
          <div id="message">
            <p>{{message}}</p>
          </div>
          <schedule/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import schedule from '@/components/schedule.vue'

export default {
  methods :{
    clickEvent(){
      this.$emit('from-child')
     },
     stopEvent(){
      event.stopPropagation()
    }
  },
  props:{
    name: String,
    personality: String,
    year: String,
    department: String,
    message: String
  },
  components: {
    schedule
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#overlay{
  /*要素を重ねた時の順番*/
  z-index:1;
  position:fixed;
  top:0;
  right:0;
  width:100%;
  height:100%;
  background-color:rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

#content{
  position:fixed;
  top:100px;
  z-index:2;
  width:900px;
  min-width:900px;
  padding: 1em;
  margin-left:250px;
  background:#fff;
  overflow-y: auto;
  max-height: 777px
}

h2{
  font-size:30px;
  text-align:left;
  margin:0 0 30px 10px;
}

#Profile{
  padding:20px;
  display:flex;
  flex-wrap:wrap;
}

img{
  display:block;
  width:200px;
  border-radius:50%;
  border:solid 2px black;
}

#P-margin{
  margin-left:60px;
  display:flex;
  font-size:22px;
}

#prof-main{
  margin-left:30px;
  text-align:left;
}

#message{
  width:100%;
  margin:20px;
  text-align:left;
  font-size:16px;
}

.material-icons.large{
  font-size: 50px;
  color: Gold;
  position:relative;
  top:170px;
  left:100px;
}

</style>
