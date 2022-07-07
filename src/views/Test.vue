<template>
    <div>

    </div>
</template>
<script lang='ts' setup>
import response from "@/hooks/response.json"
console.log(response)
const { data } = response
data.forEach(item => {
    item.name = <any>String(item.name)
})
console.log(data)

</script>
<style lang='scss' scoped>
</style>