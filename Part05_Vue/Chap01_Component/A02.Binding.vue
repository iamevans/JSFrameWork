<template>
    <div class="card-body">
        <h3></h3>
        <br>

        <div>
            v-text: <span></span><br>
            v-html: <span></span><br>
            v-once: <span></span><br>
            v-pre: <span></span><br>
            <br>
            <button>Change</button>
            <button>Change</button>
            <br>
            <br>
            
            <input type="text">
            <input type="text">
            <input type="text">
            <br>
            
            <input type="checkbox" value="apple">사과, 
            <input type="checkbox" value="banana">바나나, 
            <input type="checkbox" value="melon">멜론<br>
            
            <div></div>
            <div><span></span></div>
        <br>

        computed: <br>
        <br>
      
    </div>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            title: '2. Binding',
            text: '<b>Hello World</b>',
            num: 10,
            formControl: 'form-control',
            fruit: []
        }
  }
  
}
</script>

<style scoped>

</style>