# ThriveDesk Desktop App

## Install from thriveDesk app-frontend 

### Home to build desktop app for electron  

Go to app-frontend repo

Install angular cli

```bash
    npm install -g @angular/cli
```

Then Build with base-href params

```bash
    ng build --base-href "./"
```

Then copy the dist to the electron project/repo, rename the folder dist/spa to app

Then rename|replace add the base url

```txt
/assets To {url}https://app.thrivedesk.com/assets
```

### Electron Install

```bash
    npm install
```

### Good to GO