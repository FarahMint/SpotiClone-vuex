<template>
    <font-awesome-icon 
       icon="heart" 
       @click="buttonClicked" />
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

</style>