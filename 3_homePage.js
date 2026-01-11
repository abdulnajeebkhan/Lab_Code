'use strict'

const cardsDetail = [
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeVjWtSOa0uk4hHB3h44oiwICfhNPKJVkszw&s",
        title: 'Laptop',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio animi quod voluptates ipsum ipsa cupiditate iusto asperiores, illo maxime velit rem? Neque odit dolorum maiores quis expedita sint, beatae alias.',
        price: 100,
        id: 1,
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeVjWtSOa0uk4hHB3h44oiwICfhNPKJVkszw&s",
        title: 'Bag',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio animi quod voluptates ipsum ipsa cupiditate iusto asperiores, illo maxime velit rem? Neque odit dolorum maiores quis expedita sint, beatae alias.',
        price: 50,
        id: 2,
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeVjWtSOa0uk4hHB3h44oiwICfhNPKJVkszw&s",
        title: 'Lamp',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio animi quod voluptates ipsum ipsa cupiditate iusto asperiores, illo maxime velit rem? Neque odit dolorum maiores quis expedita sint, beatae alias.',
        price: 60,
        id: 3,
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeVjWtSOa0uk4hHB3h44oiwICfhNPKJVkszw&s",
        title: 'Shirt',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio animi quod voluptates ipsum ipsa cupiditate iusto asperiores, illo maxime velit rem? Neque odit dolorum maiores quis expedita sint, beatae alias.',
        price: 10,
        id: 4,
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeVjWtSOa0uk4hHB3h44oiwICfhNPKJVkszw&s",
        title: 'Pen',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio animi quod voluptates ipsum ipsa cupiditate iusto asperiores, illo maxime velit rem? Neque odit dolorum maiores quis expedita sint, beatae alias.',
        price: 1,
        id: 5,
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeVjWtSOa0uk4hHB3h44oiwICfhNPKJVkszw&s",
        title: 'Mobile',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio animi quod voluptates ipsum ipsa cupiditate iusto asperiores, illo maxime velit rem? Neque odit dolorum maiores quis expedita sint, beatae alias.',
        price: 15,
        id: 6,
    },
];

localStorage.setItem('products', JSON.stringify(cardsDetail));

const container = document.querySelector('.container');

const renderProductsCard = () => {
    for (let i = 0; i < cardsDetail.length; i++) {
        const card = `
            <div class="card">
                <div class="card-image-div">
                    <img src=${cardsDetail[i].img} alt="card">
                </div>
                <div class="card-details">
                    <p class="card-title">${cardsDetail[i].title}</p>
                    <p class="card-description">${cardsDetail[i].description}</p>
                    <p class="card-price">$${cardsDetail[i].price}</p>
                </div>
            </div>
        `;

        container.insertAdjacentHTML('beforeend', card);
    }


};

renderProductsCard();

const cards = document.querySelectorAll('.card');

cards.forEach(function(card, index){
    card.addEventListener('click', () => {
        // Query Parameter
        window.location.href = `./4_detail.html?id=${index+1}`
    });
});







// const ary = [1,2,3,4,6,76,78];

// localStorage.setItem('humanName', 'yasin');
// localStorage.setItem('age', 20);
// localStorage.setItem('arry', JSON.stringify(ary));

// const humanName = localStorage.getItem('humanName');
// const age = localStorage.getItem('age');
// const arry = JSON.parse(localStorage.getItem('arry'));

// console.log(humanName);
// console.log(age);
// console.log('=======>', arry);