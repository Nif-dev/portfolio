<script setup lang="ts">
    import linkedIn from '../../assets/icons/common/icone-linkedin.png';
    import github from '../../assets/icons/common/icone-github.png';
    
</script>

<template>
    <div class="bcg-blur">
        <h1 class="title has-text-centered">{{ $t('common:NETWORKS_TITLE') }}</h1>
        <div class="is-flex is-flex-direction-column">

            <a class="button" href="https://www.linkedin.com/in/yoann-le-goff-0129a0283/" target="_blank" rel="noopener" >
                <img :src="linkedIn" alt="logo linkedin" width="36px"/>
                <p class="link-text">LinkedIn</p>
            </a>
            
            <a class="button" href="https://github.com/nif-dev" target="_blank" rel="noopener" >
                <img :src="github" alt="logo github" width="36px"/>
                <p class="link-text">GitHub</p>
            </a>
        </div>
    </div>
</template>

<style scoped>

    .bcg-blur{
        width: fit-content;
        margin: auto;
        padding: 1rem;
        padding-inline: 3rem;
    }

    .link-text{
        margin-inline: 16px;
        font-size: 1rem;
    }

    a{
        margin-top: 1rem;
    }

</style>