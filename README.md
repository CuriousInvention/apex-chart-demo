# ApexChartDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## create new project
`ng n <projectName>`  

## Create a module
`ng g module home --routing` command will create a new module having name `home`

### Add newly created module to `app.module.ts` path
```
imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule
  ]
```

