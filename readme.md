<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [front-end-core](#front-end-core)
-   [Element](#element)
    -   [initializeElement](#initializeelement)
    -   [getElement](#getelement)
    -   [renderTo](#renderto)
    -   [on](#on)
    -   [un](#un)
    -   [isDestroyed](#isdestroyed)
    -   [destroy](#destroy)
-   [event.getTarget](#eventgettarget)

## front-end-core

Type: Namespace

**Properties**

-   `Element` **Class** 

## Element

**Parameters**

-   `config` **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** 
    -   `config.elementType` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** type of node we are going to be (optional, default `"div"`)
    -   `config.className` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** class names the self element will take
    -   `config.innerHTML` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** HTML that will be applied when element it's initialized
    -   `config.renderTo` **DOMElement** element on which to render, if not provided, you have to call renderTo manually to render on element (optional, default `null`)
    -   `config.xAutoInitElement` **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** if true initializeElement won't be called (optional, default `false`)

Returns **[Object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)** this

### initializeElement

initializes the DOMElement and renders it to the renderTo config provided

Returns **[undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)** initializes element and sets it's default configs

### getElement

returns the DOMElement for direct access

Returns **DOMElement** 

### renderTo

**Parameters**

-   `domElement` **DOMElement** target on which we appendChild

Returns **[undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)** renders the element on whaterver element provided

### on

attaches event listener to element, it wraps the event and adds functionalities

**Parameters**

-   `eventName` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** e.g. "click", "touchstart" all the default events
-   `callback` **[Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)** your callback where you handle your logic **check event.\* for more details on the event parameter in the callback**
-   `stdArgs` **[Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)** all the standard arguments that follow after callback (optional, default `[]`)

Returns **[undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)** 

### un

detaches event listener from element

**Parameters**

-   `eventName` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** e.g. "click", "touchstart" all the default events

Returns **[undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)** 

### isDestroyed

if destroy() was called it will return true

Returns **[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

### destroy

handles the destruction/removal of listeners and the internal element
adds destroyed propery

Returns **[undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)** 

## event.getTarget

similar to DOMElement.querySelector but instead of propagating from parent to child, it propagates from child to parent

Type: [Function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Statements/function)

**Parameters**

-   `selector` **[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)** Valid CSS selector

Returns **(DOMElement | null)** 