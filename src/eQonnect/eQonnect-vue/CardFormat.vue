<!-- eqonnect/CardFormat.vue -->

<template>
    <article class="card-frame">
        <slot />
    </article>
</template>

<style scoped>

.card-frame {
    /* DIMENSIONS STRICTES */
    max-width: 380px;
    max-height: 520px;
    min-width: 280px;
    min-height: 360px;
    
    /* RATIO CARTE PHYSIQUE */
    aspect-ratio: 4 / 5.5;
    
    /* APPARENCE NEUTRE */
    background: white;
    border-radius: 24px;
    overflow: hidden;
    
    /* CENTRAGE */
    margin: 0 auto;
}

@media (max-width: 480px) {
    .card-frame {
        max-width: 320px;
        max-height: 440px;
        aspect-ratio: 9 / 12;
    }
}
</style>
