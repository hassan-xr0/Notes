
# Initial Setup

first we need to make react app
```
npm create vite@latest
```
then install react router
```
npm install react-router-dom
```
to configure react router we need to import it in the main file  `main.jsx`wrap it around our app or any other component where we would like to give the access of router in
```jsx
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,

)
```
To configure the routes of our app we need to import `Routes`and `Route` in our `app.jsx` file and wrap routes around the route
```jsx 
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
 )
}
```
now if we want to navigate to that component or route we can do that as follow
```jsx
<Link to='/'>Home</Link>
<Link to='/about'>About</Link>
<Link to='/contact'>Contact</Link>
```

# New Method To Setup
first we create a folder in src name `Layout` `src/layout` then create a jsx file name `RootLayout.jsx` this will be our root layout before all the pages that are in routes.

Now to use it 
```jsx
 const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    ))
```
 and in Root layout import navbar bec it will showed in all apgews and then `<Outlet/>` it will render the routes after the `'/'`
```jsx
const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet/> // this will show all routes after '/'
    </div>
  )
}
```

#### `<Link/>` and `<NavLink/>`
when we use Navlink it works like link tag but it add a class name `class='active'` to element which can help us in styling
#### `useNavigate()`:
It is used when we have redirect somewhere without clicking like when we login so it redirects to homepage it does need user interaction
#### 404 Page Not Found Page:
we can make 404 page  by making a route but path should `*` 
```jsx
<Route path='*' element={<NotFound />} />
```
this will render the not found component at any route that is not define or made
#### Loader : 
we can make Loader if we want wait for data to load first we need to write loader in route and provide the function that is loading data from API 

```jsx
<Route path='/jobs' element={<JobsLayout/>}>
	<Route index element={<Jobs/>} loader={JobsLoader} />
<Route/>
```

then import useLoaderData in that route 
```jsx
const jobData = useLoaderData()
```
#### Route Parameter:
we can send parameter in link to a another route by defining the apth of route `:id` keep in mind you can write anyting in path after colon not only id  

```jsx
<Route path='/jobs' element={<JobsLayout/>}>
	<Route index element={<Jobs/>} loader={JobsLoader} />
	<Route path=":id" element={<JobDetails/>} />
<Route/>
```
now to acces these param we can 
```jsx
const {id} = useParam()
```
use the path you have written above at the place of id