function getData() {
    const promise = axios({
        method: 'post',
        url: 'https://products-list.owen.ru',
        data: {
            'query': 'table',
            'data': 'all'
        }
    });
    return promise.then((response) => {
        return response.data;
    });
}

//Я использовал для запроса AXIOS, т.к. он мне очень нравится, но есть рабочий вариант решения с fetch ниже:


// async function getData() {
//     let task = { 'query': 'table', 'data': 'all' };
//     let response = await fetch('https://products-list.owen.ru', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json;charset=utf-8'
//         },
//         body: JSON.stringify(task)
//     });
//     return await response.json();
// }