<template>
    <font-awesome-icon 
       icon="heart" 
       @click="buttonClicked"
       />
</template>

<script>
export default {
    name:"toggleFav",
    methods: {
        buttonClicked() {
        this.$emit('button-clicked')
        }
    }
}
</script>

<style>

.meta{
      
    display: flex;
    justify-content: space-evenly;
}
.meta span{
cursor: pointer;
}

.meta svg:hover {
  color:red;
}
.selected svg:hover {
  color:inherit;
}
 
</style>