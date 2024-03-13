
# Vue-component-loader

Vue-component-loader provides a series of loading animations that you can integrate into your Vue.js projects. It also offers different animations for images.

## Installation

You can install Vue-component-loader using npm:

```bash
npm i vue-component-loader
```
Usage
First, import the necessary files and components:

```bash
import VueComponentLoader from 'vue-component-loader'
import 'vue-component-loader/dist/styles.css'
// Then, add the VueSpinnerComponent to your Vue app:

const app = createApp(App);

app.use(VueComponentLoader);
app.mount('#app');
```
Now, you can use the vue-loading-component in your Vue templates:
```bash
<template>
  <vue-component-loader
        type-loading="classic-loading"
        :configLoading="{ color: '#b72222', color2: '#090437' }"
        :hidden="true"
        ize="30px"
    >
  </vue-component-loader>
</template>
```
Props
The vue-loading-component supports the following props:

type-loading: Specifies the type of loading animation to choose from. Available options are classic-loading, gradient-loading, circle-loading, and points-loading.

-configLoading: Accepts an object with the color and color2 properties to define the colors used in the spinner.

-hidden: Accepts a boolean value to hide or show the component.

-size: Defines the size of the spinner.

-fullscreen: Accepts a boolean value to show or not show the component on the entire screen.

-screenBg: If you want to show the component on the entire screen, you can use this property to define the background color.

Feel free to customize and adjust these props based on your project's requirements.


