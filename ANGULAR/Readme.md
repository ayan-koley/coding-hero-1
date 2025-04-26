Use Cli
    npm i -g @angular/cli@latest
Create new Project
    ng new [project_name]
Generate Component
    ng generate component [component name / component with path]

## File Structure understanding
`main.ts` => It's the ``root`` file of this angular project
        `bootstrapApplication` -> first render hoga
                1. check or say run first `AppComponent`
                    using `appConfig`(configaration of run the app)
        `appConfig` -> kon kon sa route aap ko use karna hain
                     kon kon se provider use karna       
`.spec.ts` => Check all are ok or not
`<router-outlet />` component => to dynamically load different components based on the current URL route 
`services` => provide services like. store in react, suppose store userdata 
we can get userdata in any part of our application

### data transfar from ts ----> html called `Interpulation`
### js logic write on html called `directives`
### directives 
    1. Structural -> *ngIf, *ngFor, *ngSwitch
    2. Attribute -> ngClass, ngStyle
    3. Custom