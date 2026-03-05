<!-- src/components/ui/ToggleDarkMode.vue -->
<script setup>
    import { ref, watch } from 'vue';

    import SunIcon from '../../assets/icons/common/sun-shape.svg';
    import MoonIcon from '../../assets/icons/common/moon-shape.svg';


    // Clé pour le localStorage
  const STORAGE_KEY = 'theme';

    // Détection de la préférence du navigateur
    const prefersDarkScheme = globalThis.matchMedia('(prefers-color-scheme: dark)');
  
    // Fonction pour obtenir le thème sauvegardé
    function getSavedTheme() {
      return localStorage.getItem(STORAGE_KEY);
    }

    // Fonction pour enregistrer le thème
  function setStoredTheme(theme) {
    localStorage.setItem(STORAGE_KEY, theme);
  }

  // Initialisation : thème stocké ou préférence système
  const selectedTheme = ref(
    getSavedTheme() || (prefersDarkScheme.matches ? 'dark' : 'light')
  );

    // Appliquer le thème initial
    document.documentElement.dataset.theme = selectedTheme.value;
    // Mettre à jour le thème quand selectedTheme change
    watch(selectedTheme, (newTheme) => {
        document.documentElement.dataset.theme = newTheme;
        setStoredTheme(newTheme);
    });

    // Écouter les changements de préférence du système en temps réel
    prefersDarkScheme.addEventListener('change', (event) => {
      if(!getSavedTheme()){
        selectedTheme.value = event.matches ? 'dark' : 'light';
      }
    });
</script>

<template>

    <label class="switch" aria-label="switch dark mode">
        <input 
          type="checkbox" 
          :checked="selectedTheme === 'dark'" 
          @change="selectedTheme = selectedTheme === 'dark' ? 'light' : 'dark'"
        />
        
        <!-- <div class="slider-icons">
          <SunIcon class="icon sun" />
          <MoonIcon class="icon moon" />
        </div> -->
        <span class="slider round"></span>
    </label>


</template>

<style scoped>
  
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  z-index: 0;
  position: absolute;
  cursor: pointer;
  height: 34px;
  width: 80px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-sable);
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: var(--color-orange);
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: var(--color-light-purple);
}

input:focus, input:hover + .slider {
  box-shadow: 0 0 10px var(--color-purple);
}

[data-theme="dark"] {
  input:focus, input:hover + .slider {
    box-shadow: 0 0 10px var(--color-orange);
  }
}

input:checked + .slider:before  {
  -webkit-transform: translateX(44px);
  -ms-transform: translateX(44px);
  transform: translateX(44px);
}


/* Rounded sliders */
.slider.round {
  border-radius: 32px;
}

.slider.round:before {
  border-radius: 50%;
}
.slider:after {
  position: absolute;
  content: '';
  width: 20px;
  height: 20px;
  top: 50%;
  transform: translateY(-50%);
  background-size: 20px;
  background-repeat: no-repeat;
  background-position: center;

  /* Sun light */
  background-image: url('../../assets/icons/common/sun-shape.svg');
  right: 8px;
}

[data-theme="dark"] .slider:after {
  /* Moon dark */
  background-image: url('../../assets/icons/common/moon-shape.svg');
  right: auto;
  left: 8px;
}


</style>