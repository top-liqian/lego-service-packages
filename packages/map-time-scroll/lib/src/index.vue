<template>
    <div>
        <div>{{ text }}</div>
        <el-button>123</el-button>
    </div>
    
</template>

<script>
import { getName } from '@gs/utils'
export default {
    name: 'GSMapTimeScroll',
    data() {
        return {
            text: ''
        }
    },
    mounted() {
        this.text = getName()
    }
}
</script>