import{c as s,u as e,e as i,b as a,F as u,f as d,o as l,a as m,w as x,d as g,t as y,R as f}from"./index-7tS_8M4f.js";import{u as p}from"./getData-zCA9pAwm.js";const _=a("h1",{class:"text-3xl text-yellow-500 dark:text-yellow-400"},"Pokemons Shiny",-1),k={key:0,class:"text-xl text-yellow-500 dark:text-yellow-400"},w={key:1,class:"flex justify-center items-center flex-col"},b={class:"grid grid-cols-3 gap-4 m-3"},h={class:"flex gap-x-2 m-3"},v=["disabled"],D={__name:"PokemonView",setup(C){const{data:t,getData:r,loading:c}=p();return r("https://pokeapi.co/api/v2/pokemon"),(N,n)=>(l(),s(u,null,[_,e(c)?(l(),s("p",k,"Cargando... ")):i("",!0),e(t)?(l(),s("section",w,[a("ol",b,[(l(!0),s(u,null,d(e(t).results,o=>(l(),s("li",{class:"text-gray-500 dark:text-gray-400 m-2",key:o.name},[m(e(f),{to:`/pokemons/${o.name}`},{default:x(()=>[g(y(o.name),1)]),_:2},1032,["to"])]))),128))]),a("div",h,[a("button",{disabled:!e(t).previous,onClick:n[0]||(n[0]=o=>e(r)(e(t).previous)),class:"focus:outline-none text-gray-700 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"},"Previous",8,v),a("button",{onClick:n[1]||(n[1]=o=>e(r)(e(t).next)),class:"focus:outline-none text-gray-700 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"},"Next")])])):i("",!0)],64))}};export{D as default};
