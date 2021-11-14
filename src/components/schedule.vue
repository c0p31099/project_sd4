<template>
<div id="table">
  <table class="schedule">
    <thead>
      <tr>
        <th>時間</th>
        <th>月</th>
        <th>火</th>
        <th>水</th>
        <th>木</th>
        <th>金</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>◯</td>
        <td>◯</td>
        <td>◯</td>
        <td>◯</td>
        <td>◯</td>
      </tr>
      <tr>
        <th>2</th>
        <td>a</td>
        <td>◯</td>
        <td>◯</td>
        <td>◯</td>
        <td>◯</td>
      </tr>
      <tr>
        <th>3</th>
        <td></td>
        <td></td>
        <td>◯</td>
        <td>◯</td>
        <td>◯</td>
      </tr>
      <tr>
        <th>4</th>
        <td>◯</td>
        <td>◯</td>
        <td>◯</td>
        <td>◯</td>
        <td>◯</td>
      </tr>
      <tr>
        <th>5</th>
        <td>◯</td>
        <td>◯</td>
        <td>◯</td>
        <td>◯</td>
        <td>◯</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>

export default {
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
#table{
  margin:0 20px;
}


th,td {
  border: solid 1px;
}

table {
  border-collapse:  collapse;
}

th{
  width:  300px;
  height: 50px;
}

thead th{
  height: 30px;
}

th:first-child{
  width: 50px;
}

</style>
