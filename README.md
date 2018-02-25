# react-json-syntax
> An alternative syntax for React.js templates.

[![NPM](https://nodei.co/npm/react-json-syntax.png)](https://nodei.co/npm/react-json-syntax/)

## API

usage:
```javascript
const reactParse = require('react-json-syntax');
```

```jsx
return (
  <tag attribute="value">
    text
    <child>
        { this.state.value }
    </child>
  </tag>
);
```
is the simular as
```javascript
return reactParse(
    ['tag', {'attribute': 'value'}, [
        'text',
        ['child', [
            this.state.value
        ]]
    ]]
);
```

alias:
```javascript
return React.parse(
    ['div', [
        'text',
        [MyComponent, {myProp: 123}]
    ]]
);
```
