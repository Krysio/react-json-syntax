# react-json-syntax

usage:
```javascript
const reactParse = require('react-json-syntax');
```

```javascript
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
