<!-- クラスの名前めちゃくちゃ適当に付けました。ごめんなさい -->

<template>
  <li>
    <div class="ListDetail">
      <img src="@/assets/plof.png">
      <div class="about-wrapper">
        <div>
          <div id="about-n">
            <p>{{ name }}</p>
          </div>
          <div id="about-s">
            <p>＜{{ personality }}＞</p>
          </div>
        </div>
        <div id="between">
          <div id="about-c">
            <p>{{year}}年</p>
          </div>
          <div id="about-d">
            <p>{{department}}</p>
          </div>
        </div>
        <div>
          <p>{{message}}</p>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'ListDetail',
  props:{
    name: String,
    personality: String,
    year: String,
    department: String,
    message: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ListDetail{
  display:flex;
  width:500px;
  padding:20px;
  margin:10px;
  background-color: #f7f6f3;
}

p{
  margin:3px 0;
  font-size: 20px;
  font-weight:bold;
}

.about-wrapper{
  flex:1;
}

.about-wrapper>div{
  display:flex;
  width:300px;
  margin:auto;
}

.about-wrapper>div>p{
  margin-top:15px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align:left;
  font-weight:normal;
  font-size: 17px;
  height:50px;
}

#between{
  justify-content:space-between;
}

img{
  width:160px;
  border-radius:50%;
}

#about-n{
  flex:1;
}

#about-s{
  width:80px;
  order:2;
}

#about-c{
  width:40px;
}

#about-d{
}

</style>
