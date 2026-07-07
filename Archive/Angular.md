# Date Binding

### Interpolation `{{}}`  : 

It can be used when we want to display a property / variable or any value from ts file 

```html
 <div>{{firstName}}</div>
 ```

### Property Binding`[]` :
 
 It is same as interpolation but interpolation does not work with input, whereas this is used only in input fields. It is also one way binding meaning we can only read data from ts file not change it 
 
```html
<input [value]="firstName">
```

This will make `firstname `default value of input field. But if you change it then one  that is mention above div or anywhere will not be change only in input field
### Two way Binding `[(ngModel)]` : 
 
 In this we can read and change data from ts file. It is mainly use in input fields. For this we need to import FormModules in ts file and also mention it in `imports:[]`
 
 ```ts
import { FormsModule } from '@angular/forms';
```

Then when using in html file we need to use it in input tag as :
```html
<input type="text" [(ngModel)]="firstname">
```

This is will change the value of `firstname` throughout the whole code. But when we reload the page the default value that we had written in ts file will display

## Event Binding `(event)`:

Its like OnClick and other event in react 

```html
 <button (click)="Alert()">Show Alert</button>
```

# Directives

## `ngIf`
 
 Its remove element form page and insert it according to the condition. Its is used as if conditional like if a specific string is equal to something then it will true.
 
```html
// when value will be roles then this will display

<div *ngIf="currentComponent=='roles'"><app-roles></app-roles></div>

// this button change the value to role

<button (click)="changeComponent('roles')">Roles</button>
```
 

## `ngClass `

Its changes css value according to condition. For example if condition is true then button colour should be green  or else if false then red

```html
<button [ngClass]="Members =='members' ? 'green' : 'red'">Members</button>
```

For this we also need to add `CommonModule` in the **.ts_file>@Component>imports** of component we want to use

## `ngOnInit`

It execute code at start when the component (*in which it is mentioned*)  is loaded. Its some what function like `useEffect()`Hook in **React**. It is also known as lifecycle function.

For using it we need to import `OnInit` Module from @angular/core in component where we want to use it

```ts
import { Component, OnInit } from '@angular/core';
```

Then add implements `OnInit` on the class. Declare function 

```ts
export class Roles implements OnInit {
    ngOnInit(): void {}
}
```

If we don't use implement then `ngOnInit` will become a simple function and would not execute code at the start

# API Integration

First if we want to send http request to anyone in angular we need to import `provideHttpClient()` in `app.config.ts`

```ts
import { provideHttpClient } from '@angular/common/http';

// In app config add provideHttpClient() in provider

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient()]
};

```

Previously before Angular 18 we use `provideHttpClient()` as `provideHtttpModule()`. 

Now if we want to send or receive date for API  *(GET, PUT, PUSH )*  we need to use Http injection in the component where we want to use

```ts
import { HttpClient } from '@angular/common/http';

http=inject(HttpClient);
```

Before Angular 16 we inject Http by 

```ts
constructor(private:HttpClient){}
```

 To use http we will write it as  

```ts
this.http.get('https://freeapi.com/GetAllRoles').subscribe((res:any)=>{
      this.roleList = res.data
    })
```

To get the data that is returned by API we will need to use `.subscribe()` or else it this will do nothing
