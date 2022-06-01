const claims = [
    {
        title: 'установить webstorm',
        created: '12/05/2012',
        type: 'Software',
        status: 'new',
        actions: '1'//temp id
     },
    {
        title: 'увеличить пространство HDD',
        created: '14/03/2012',
        type: 'Troubleshooting',
        status: 'new',
        actions: '2'//temp id
     },
    {
        title: 'познакомиться с командой',
        created: '23/11/2021',
        type: 'Networking',
        status: 'done',
        actions: '3'//temp id
     },
    {
        title: 'купить экран',
        created: '10/05/2014',
        type: 'Hardware',
        status: 'in process',
        actions: '4'//temp id
     },
    {
        title: 'сходить на тимбилдинг',
        created: '26/04/2019',
        type: 'Networking',
        status: 'declined',
        actions: '5'//temp id
     },
    {
        title: 'скачать докер',
        created: '19/09/2019',
        type: 'Software',
        status: 'done',
        actions: '6'//temp id
     },
    {
        title: 'скачать pgAdmin',
        created: '19/09/2019',
        type: 'Software',
        status: 'done',
        actions: '7'//temp id
     },
    {
        title: 'скачать figma',
        created: '19/09/2019',
        type: 'Software',
        status: 'done',
        actions: '8'//temp id
     },
    {
        title: 'установить NodeJS',
        created: '19/09/2019',
        type: 'Software',
        status: 'done',
        actions: '9'//temp id
     },
    {
        title: 'купить компьютерную мышь',
        created: '19/09/2019',
        type: 'Hardware',
        status: 'done',
        actions: '10'//temp id
    },
    {
        title: 'купить клавиатуру',
        created: '19/09/2019',
        type: 'Hardware',
        status: 'done',
        actions: '11'//temp id
    },
    {
        title: 'сделать презентацию',
        created: '19/09/2019',
        type: 'Networking',
        status: 'done',
        actions: '12'//temp id
    },
    {
        title: 'посетить лекцию',
        created: '19/09/2019',
        type: 'Networking',
        status: 'done',
        actions: '13'//temp id
    },
    {
        title: 'отдать ноутбук в сервис',
        created: '19/09/2019',
        type: 'Hardware',
        status: 'done',
        actions: '14'//temp id
    },
    {
        title: 'установить React',
        created: '19/09/2019',
        type: 'Troubleshooting',
        status: 'done',
        actions: '15'//temp id
    },
    {
        title: 'скачать докер',
        created: '19/09/2019',
        type: 'Software',
        status: 'done',
        actions: '16'//temp id
     },
    {
        title: 'скачать pgAdmin',
        created: '19/09/2019',
        type: 'Software',
        status: 'done',
        actions: '17'//temp id
     },
    {
        title: 'скачать figma',
        created: '19/09/2019',
        type: 'Software',
        status: 'done',
        actions: '18'//temp id
     },
    {
        title: 'установить NodeJS',
        created: '19/09/2019',
        type: 'Software',
        status: 'done',
        actions: '19'//temp id
     },
    {
        title: 'купить компьютерную мышь',
        created: '19/09/2019',
        type: 'Hardware',
        status: 'done',
        actions: '20'//temp id
    },
    {
        title: 'купить клавиатуру',
        created: '19/09/2019',
        type: 'Hardware',
        status: 'done',
        actions: '21'//temp id
    },
    {
        title: 'сделать презентацию',
        created: '19/09/2019',
        type: 'Networking',
        status: 'done',
        actions: '22'//temp id
    },
    {
        title: 'посетить лекцию',
        created: '19/09/2019',
        type: 'Networking',
        status: 'done',
        actions: '23'//temp id
    },
    {
        title: 'отдать ноутбук в сервис',
        created: '19/09/2019',
        type: 'Hardware',
        status: 'done',
        actions: '24'//temp id
    },
    {
        title: 'установить React',
        created: '19/09/2019',
        type: 'Troubleshooting',
        status: 'done',
        actions: '25'//temp id
    }

]

if (!localStorage.getItem('claims')) {
    localStorage.setItem('claims', JSON.stringify(claims));
}
const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(claims);
        }, 500);
    });

const getById = (id) =>
    new Promise((resolve) => {
        console.log('id', id)
        window.setTimeout(function () {
            resolve(
                JSON.parse(localStorage.getItem('claims')).find(
                    (claim) => claim.actions === id
                )
            );
        }, 500);
    });

export default {
    fetchAll,
    getById
}