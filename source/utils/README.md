# Utils

Here are all utilities stored which are partially part of the application but fully used by tests and tasks. This utils must be used carefully by the application because it is possible that a util has heavy vulnerabilities.
For example is the requireOverride used to change the behavior of require() in a way that short urls can be used und nunjucks templates are resolved directly.
