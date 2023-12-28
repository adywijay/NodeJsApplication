const get_apis = 'https://reqres.in/api/users?page=2';

async function Ceklist(...get_apis_data) {
   let get_data   = await fetch(get_apis_data);
   let fetch_data = await get_data.json();
   //return fetch_data;
    console.log(fetch_data);
}

Ceklist(get_apis);
