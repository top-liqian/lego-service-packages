<template>
    <div>
        <div>{{ text }}</div>
        <el-button>123</el-button>
        <div> 1234 </div>
    </div>
    
</template>

<script>
import { getName } from '@gs/utils'
export default {
    name: 'GSMapTimeScroll',
    data() {
        return {
            text: '123'
        }
    },
    mounted() {
        this.text = getName()
    }
}
</script>