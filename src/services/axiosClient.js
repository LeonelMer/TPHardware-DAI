import axios from 'axios'

export const AxiosClient = axios.create({
    baseURL: 'https://api.spoonacular.com'
})

export const AlkemyClient = axios.create({
    baseURL: 'http://challenge-react.alkemy.org'
})

/*

https://api.spoonacular.com/recipes/716423/information?apiKey=1a1fde2048f044529a1e7e749306db44 fede
https://api.spoonacular.com/recipes/716423/information?apiKey=ca984c7738bf44f48ec9d97649409a8a leo
https://api.spoonacular.com/recipes/716423/information?apiKey=a0d6581ea80d4c1b84864c7000c508fd santi

https://api.spoonacular.com/recipes/complexSearch?number=20&apiKey=1a1fde2048f044529a1e7e749306db44 fede 
https://api.spoonacular.com/recipes/complexSearch?number=20&apiKey=ca984c7738bf44f48ec9d97649409a8a leo
https://api.spoonacular.com/recipes/complexSearch?number=20&apiKey=a0d6581ea80d4c1b84864c7000c508fd santi

*/