# ember-runkit

Ember component for RunKit embeds.

## Install

```sh
$ ember install ember-runkit
```

Add the RunKit embed library to your `app/index.html`:

```hbs
{{content-for "head"}}
...
<script src="https://embed.runkit.com"></script>
...
{{content-for "head-footer"}}
```

If you want to include the embed library on-demand, see [On-Demand Sourcing](#on-demand-sourcing).

## Usage

```hbs
{{runkit-embed source='console.log("Hello, world!")'}}
```

![](http://i.imgur.com/7mH8e6o.png)

Don't forget to check out the [RunKit embed docs](https://runkit.com/docs/embed#options).

## API

### source : string

Specify the source code that the notebook will use.

```hbs
{{runkit-embed
  source='console.log("Hello, world!")'}}
```

### readOnly : boolean

If `true`, the user will not be able to edit or run the embed.

```hbs
{{runkit-embed
  source='console.log("Hello, world!")'
  readOnly=true}}
```

### mode : string

If `'endpoint'`, the notebook will be run as an endpoint and a link to the served page will be shown.

```hbs
{{runkit-embed
  source='exports.endpoint = (req, res) => res.end("Hello, world!")'
  mode='endpoint'}}
```

### nodeVersion : string

Request a version or semver range for the node engine.

```hbs
{{runkit-embed
  source='console.log("Hello, world!")'
  nodeVersion='7'}}
```

### env : [string]

Provide a list of environment variables accessible in the notebook through process.env.

```hbs
{{runkit-embed
  source='console.log(`Hello, ${ process.env.FIRST_NAME } ${ process.env.LAST_NAME }!`)'
  nodeVersion='7'}}
```

### title : string

Provide a title for the notebook when opened on RunKit.

```hbs
{{runkit-embed
  source='console.log("Hello, world!")'
  title='Hello'}}
```

### minHeight : string

Provide a minimum height for the embed (`'130px'` by default).

```hbs
{{runkit-embed
  source='console.log("Hello, world!")'
  minHeight='200px'}}
```

### packageTimestamp : number

Specify the Unix time in milliseconds at which packages should resolved. Packages published after the date will be ignored.

```hbs
{{runkit-embed
  source='console.log("Hello, world!")'
  packageResolutionTimestamp=1468195200000}}
```

### preamble : string

Specify source code that is run before the main source. This code will not be shown in the embed.


```hbs
{{runkit-embed
  source='console.log(_.map(_.add(1), [1, 2, 3]))'
  preamble='const _ = require("lodash/fp")'}}
```

## On-Demand Sourcing

If you don't want the client to download the embed library until embeds are needed, you can use [`ember-script-loader`](https://github.com/edge/ember-script-loader) to dynamically source the library on-demand.

Install by running:
```sh
$ ember install ember-script-loader
```

Then wrap the embed inside the script loader:
```hbs
{{#script-loader script='https://embed.runkit.com'}}
  {{runkit-embed source='console.log("Hello, world!")'}}
{{/script-loader}}
```
