bro-template-react
==================

A react template.

Deployment
----------

TODO: automate

* Create a new Pro project on codeship linked to your github repo
* Under `project settings => general` in UI copy the AES key to the file `./deployment/codeship.aes`.
* Copy the `propeller-system` to `./deployment/secrets/args` and `./deployment/secrets/env` in the form `NPM_TOKEN=XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX`
* Run `yarn codeship:encrypt` to encrypt your keys.
* Push your branch for testing.
