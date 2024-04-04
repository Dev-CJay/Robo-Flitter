import React, { useState } from "react";


const NameFilter = () => {
  // Sample array of objects
  const data = [
    {
        "id": 1,
        "imageUrl": "https://robohash.org/set_set5/48?size200x200",
        "name": "CeeJay",
        "username": "Bret",
        "email": "ceejay@gmail.com",
        "address": {
          "street": "Kulas Right",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "08066446782",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
     },
    {  
        "id": 2,
        "imageUrl": "https://robohash.org/set_set5/57?size200x200",
        "name": "Mary Brown",
        "username": "Antonette",
        "email": "mary@gmail.com",
        "address": {
          "street": "Victor Plains",
          "suite": "Suite 879",
          "city": "Wisokyburgh",
          "zipcode": "90566-7771",
          "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
          }
        },
        "phone": "09034567839",
        "website": "anastasia.net",
        "company": {
          "name": "Deckow-Crist",
          "catchPhrase": "Proactive didactic contingency",
          "bs": "synergize scalable supply-chains"
        }
      
     },
    { "id": 3,
    "imageUrl": "https://robohash.org/set_set5/6?size200x200",
    "name": "Clement Manji",
    "username": "Samantha",
    "email": "manji@gmail.com",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "08123678934",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    } },


    { "id": 4,
    "imageUrl": "https://robohash.org/set_set5/77?size200x200",
    "name": "Patricia John",
    "username": "Karianne",
    "email": "john@gmail.com",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "07034567824",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    } },


    { "id": 5,
    "imageUrl": "https://robohash.org/set_set5/30?size200x200",
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "lucio@gmail.com",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    } },

    { "id": 6,
    "imageUrl": "https://robohash.org/set_set5/88?size200x200",
    "name": "Victor John",
    "username": "Leopoldo_Corkery",
    "email": "karley@gmail.com",
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337",
      "geo": {
        "lat": "-71.4197",
        "lng": "71.7478"
      }
    },
    "phone": "08034454679",
    "website": "ola.org",
    "company": {
      "name": "Considine-Lockman",
      "catchPhrase": "Synchronised bottom-line interface",
      "bs": "e-enable innovative applications"
    } },

    { "id": 7,
    "imageUrl": "https://robohash.org/set_set5/1?size200x200",
    "name": "Kurtis Rinret",
    "username": "Elwyn.Skiles",
    "email": "Hoeger@billy.biz",
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099",
      "geo": {
        "lat": "24.8918",
        "lng": "21.8984"
      }
    },
    "phone": "09134567496",
    "website": "elvis.io",
    "company": {
      "name": "Johns Group",
      "catchPhrase": "Configurable multimedia task-force",
      "bs": "generate enterprise e-tailers"
    } },

    { "id": 8,
    "imageUrl": "https://robohash.org/set_set5/90?size200x200",
    "name": "Nicholas Licto",
    "username": "Maxime_Nienow",
    "email": "rosamond@gmail.com",
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "zipcode": "45169",
      "geo": {
        "lat": "-14.3990",
        "lng": "-120.7677"
      }
    },
    "phone": "08145567854",
    "website": "jacynthe.com",
    "company": {
      "name": "Abernathy Group",
      "catchPhrase": "Implemented secondary concept",
      "bs": "e-enable extensible e-tailers"
    } },



    { "id": 9,
    "imageUrl": "https://robohash.org/set_set5/100?size200x200",
    "name": "Emmanuel Comfort",
    "username": "Delphine",
    "email": "comfort@gmail.com",
    "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109",
      "geo": {
        "lat": "24.6463",
        "lng": "-168.8889"
      }
    },
    "phone": "0805646344",
    "website": "conrad.com",
    "company": {
      "name": "Yost and Sons",
      "catchPhrase": "Switchable contextually-based project",
      "bs": "aggregate real-time technologies"
    } },

    { "id": 10,
    "imageUrl": "https://robohash.org/set_set5/96?size200x200",
    "name": "Mike Shola",
    "username": "Moriah.Stanton",
    "email": "sholex@gmail.com",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "07023456932",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }},
  ];

  const [searchTerm, setSearchTerm] = useState("");
  
  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  // Filter data based on search term
  const searchResults = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="flex flex-col items-center min-h-screen bg-green-500">
      <input 
        className="border border-gray-300 bg-white hover:shadow-xl rounded-md px-4 py-2 focus:outline-none focus:border-blue-300 w-full sm:w-80"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full max-w-screen-xl px-4 py-5">
        {searchResults.length === 0 ? (
          <p className="col-span-full text-center">No results found.</p>
        ) : (
          searchResults.map(result => (
            <div key={result.id} className="bg-white border border-gray-300 p-4 rounded-md">
              <img src={result.imageUrl} alt={result.name} className="rounded-full mb-4 mx-auto sm:mx-0"/>
              <p><strong>Name:</strong>{result.name}</p>
              <p><strong>Username:</strong>{result.username}</p>
              <p><strong>Email:</strong>{result.email}</p>
              <p><strong>Address:</strong>{result.address.street}, {result.address.suite}, {result.address.city},{result.address.zipcode}</p>
              <p><strong>Website:</strong>{result.website}</p>
              <p><strong>Company:</strong>{result.company.name}, {result.company.catchPhrase}, {result.company.bs} </p>
              <p><strong>Phone:</strong>{result.phone}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
  
};

export default NameFilter;
