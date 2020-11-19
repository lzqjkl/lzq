<template>
    <div class="eheader">
        <div class="title">
            <p class="fgx"><span class="eheadername">{{title}}</span></p>
            </div>
    </div>
</template>
<script>
export default {
    props:{
        title:{
            type:String,
            default:'商品类别'
        }
    }
}
</script>
<style scoped>
.title{
    width: 1131px;
    height: 56px;
    background: #ffffff;
    position: absolute;
    top: -65px;
    right: -39px;
    z-index: 2;
}
.eheadername{
    width: 150px;
    font-size: 18px;
    margin: -2px 10px;
    float: left;
}
.fgx{
    width: 2px;
    height: 20px;
    background: blue;
    margin: 20px 30px;
}
</style>