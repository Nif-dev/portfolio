<script setup lang="ts">
    import linkedIn from '../../assets/icons/common/icone-linkedin.png';
    import github from '../../assets/icons/common/icone-github.png';
    
</script>

<template>
    <div class=" bcg-blur bcg-blur-bulles is-flex is-flex-direction-row is-justify-content-space-around ">
        <a href="https://www.linkedin.com/in/yoann-le-goff-0129a0283/" target="_blank" rel="noopener" >
            <img :src="linkedIn" alt="linkedin" width="48px"/>
        </a>
        <a href="https://github.com/YLG29fr" target="_blank" rel="noopener" >
            <img :src="github" alt="github" width="48px"/>
        </a>
    </div>
</template>

<style scoped>
    .bcg-blur{
        width: fit-content;
        margin: auto;
    }

    a{
        margin-right: 10px;
        margin-left: 10px;
        margin-top: 3px;
        margin-bottom: 0px;
    }
</style>