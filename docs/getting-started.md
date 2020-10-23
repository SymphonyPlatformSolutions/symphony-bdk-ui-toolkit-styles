# Getting Started
To install UIToolkit-Styles on your project you can either install it with npm or from CDN.


## Install with **npm**:

Install the library from npm by running the following command on your project:

```bash
$ npm install @symphony/uitoolkit-styles --save
```

Import the css on your project:

```bash
 import '@symphony/uitoolkit-styles/dist/css/uitoolkit.css';
```

You can also import the SASS version:

```bash
  @import '~@symphony/uitoolkit-styles/uitoolkit.scss'
```

In this case, you might need to indicate the fonts path changing  the `$ICONS_FONTS_PATH` variable:

```bash
 $ICONS_FONTS_PATH: '../myPath/fonts';
```


## Install from **CDN**:

Alternatively, you can use the [symphony](https://cdn.symphony.com/resources/ui-toolkit/{master}/css/uitoolkit.css) CDN to load the compiled CSS version. 

Import the prefered css on your project:
```bash
<link rel="stylesheet" href="https://cdn.symphony.com/resources/ui-toolkit/v1.0.10/css/uitoolkit.css">
```

**Note**

 For development purposes, if you want to test the latest features you can use the master version from the CDN:

```bash
<link rel="stylesheet" href="https://cdn.symphony.com/resources/ui-toolkit/master/css/uitoolkit.css">
```