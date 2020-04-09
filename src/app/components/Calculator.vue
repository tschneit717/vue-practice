<template>
  <div id="app">
    <div class="row">
      <input type="number" step="1" v-model.number="num1">
      <span>+</span>
      <input type="number" step="1" v-model.number="num2">
      <span>=</span>
      <span>{{num1 + num2}}</span>
    </div>
    <div class="row second">
      <p>My favorite kind of taco is 
        <select type="select">
          <option v-for="name in names" :key="name" :value=name>{{name}}</option>
        </Select>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  el: '#app',
  data() {
    return {
      num1: 0,
      num2: 0,
      names: [
        '',
        'al pastor',
        'el paso',
        'carne asada'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
$primary: #5968d7;

.row {
  margin: 50px;
  display: flex;
  justify-content: center;
  font-family: 'Work Sans', sans-serif;
}

input,select, span {
  padding: 10px;
  font-size: 30px;
  font-family: 'Work Sans', sans-serif;
}

input {
  width: 50px;
}

select {
  font-size: 20px;  
}

span {
  width: 20px;
}

.second {
  font-size: 18px;
  p {
    margin-left: 20px;
  }
}
</style>