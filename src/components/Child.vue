<template>
    <div>
       <button type="button" @click="$emit('child_clicked')">Clicked Me!</button>
    </div>
</template>

<script>
    export default {
        name: "Child"
    }
</script>

<style scoped>

</style>