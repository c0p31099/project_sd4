<template>
  <li class="chat-list-detail">
   <img src="@/assets/plof.png">
   <div>
    <p id="bold">{{name}}</p>
    <div>
      <p>{{message}}</p>
    </div>
   </div>
  </li>
</template>

<script>
export default {
  props:{
    name: String,
    message: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chat-list-detail{
  background-color: #f7f6f3;
  cursor: pointer;
  padding:20px;
  margin:20px 0;
  display:flex;
}

#bold{
  font-weight:bold;
  font-size:21px;
}

img{
  width:130px;
}

.chat-list-detail>div{
  text-align:left;
  margin-left:20px;
  flex:1;
}

.chat-list-detail>div>div{
  width:100%;
}

p{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 450px;
}

</style>
