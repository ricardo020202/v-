const url = 'https://www.googleapis.com/blogger/v3/blogs/2689438930071764234/posts?key=AIzaSyC7tNifcUJvxoy38dozXRwkwfeAmy3jeD8'

document.addEventListener('DOMContentLoaded', () => {
    fetchApi()
})

const fetchApi = async () => {
    try {
        const res = await fetch(url)
        const data = await res.json()

        for (var i = 0; i < data.items.length; i++) {
            const title = data.items[i].title
            const postUrl = data.items[i].url
            const thumbnail = data.items[i].author.image.url

            console.log(title)
            console.log(postUrl)
            console.log(thumbnail)

            const container = document.querySelector('.newsSection')

            const card = document.createElement('div');
            card.className = 'card-body';
            
            const content = `
            <div class="col d-flex justify-content-center">
                <a href="${postUrl}">
                    <div class="wrapper card-news">
                        <div class="card card-img">
                        <img src="${thumbnail}"/>
                            <div class="info">
                                <h2>${title}</h2>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            `
            container.innerHTML += content
        };

        console.log(data)

    } catch (error) {
        console.log(error)
    }
}