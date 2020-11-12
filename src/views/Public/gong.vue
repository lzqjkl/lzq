<template>
    <div>
        <div></div>
        <div>
            <div class="a">
                <Sidebar></Sidebar>
            </div>
            <div class="b">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import Sidebar from "../Public/Sidebar";
export default {
components:{
    Sidebar
}
}
</script>
<style scoped>
.a{
    float: left;
}
.b{
    float: left;
}
</style>