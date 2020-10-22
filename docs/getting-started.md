# Getting Started
To install UIToolkit-Styles on your project you can either install it with npm or from CDN.


## Install with **npm**:

**Requiremets**

You will need to have Node >= 8.10 and npm >= 5.6 on your machine.

Install the library from npm by running the following command on your project:

```bash
$ npm install @symphony/uitoolkit-styles --save
```

Import the css on your project:

```bash
 import '@symphony/uitoolkit-styles/dist/css/uitoolkit.css';
```

If you are using Webpack or other module bundler you can also import the SASS version:

```bash
  $ICONS_FONTS_PATH: '../dist/fonts';
  @import '../uitoolkit.scss';
```


## Install from **CDN**:

Alternatively, you can use the [symphony](https://cdn.symphony.com/resources/ui-toolkit/{master}/css/uitoolkit.css) CDN to load the compiled CSS version. 

Import the css on your project:
```bash
<link rel="stylesheet" href="https://cdn.symphony.com/resources/ui-toolkit/master/css/uitoolkit.css">
```

**Note**

With this href you will always get the latest version. You can get change it with the stable release versions:

```bash
<link rel="stylesheet" href="https://cdn.symphony.com/resources/ui-toolkit/v1.0.10/css/uitoolkit.css">
```