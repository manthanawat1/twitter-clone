let feedData = [
    {
        name: "CNN",
        src: "../image/cnn-profile.png",
        alt: "CNN Account",
        accountName: "@CNN",
        timestamp: "7m",
        content: "President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a 'major breakthrough' that would serve to both strengthen the US steel industry and combat the global climate crisis.",
        likes: "57",
        retweets: "144",
        comments: "184",
        imageAttach: null,
        descriptionImage: null
    },
    {
        name: "The New York Times",
        src: "../image/new-york-times-profile.png",
        alt: "The New York Time Account",
        accountName: "@nytimes",
        timestamp: "2h",
        content: "Gardening boomed during the pandemic. Six Black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land",
        likes: "19",
        retweets: "48",
        comments: "482",
        imageAttach: "../image/feeds/tree.png",
        descriptionImage: "Gardening boomed picture"
    },
    {
        name: "Twitter",
        src: "../image/twitter-profile.png",
        alt: "Twitter Account",
        accountName: "@Twitter",
        timestamp: "Oct 29",
        content: "BIG NEWS lol jk still Twitter",
        likes: "267.1K",
        retweets: "36.6K",
        comments: "6.8K",
        imageAttach: null,
        descriptionImage: null
    },
    {
        name: "Twitter",
        src: "../image/twitter-profile.png",
        alt: "Twitter Account",
        accountName: "@Twitter",
        timestamp: "Oct 4",
        content: "hello literally everyone",
        likes: "3.3M",
        retweets: "785.4K",
        comments: "118.7K",
        imageAttach: null,
        descriptionImage: null
    }
]

for (let i = 0; i < 2; i++) {
    feedData.push(...feedData);
}

document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.feed-section');
    feedData.forEach((item) => {
        const feedsContainer = document.createElement('div');
        feedsContainer.classList.add('feeds-container');
    
        feedsContainer.innerHTML = `
            <img src="${item.src}" alt="${item.alt}">
            <div>
                <div class="tag-users-tweet">
                    <span>${item.name}</span>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.75 9.41667C17.75 8.1 17.0208 6.95833 15.96 6.41667C16.0883 6.05417 16.1583 5.6625 16.1583 5.25C16.1583 3.40833 14.7333 1.91833 12.9767 1.91833C12.585 1.91833 12.21 1.98833 11.8633 2.12667C11.3483 1.0125 10.2583 0.25 9 0.25C7.74166 0.25 6.65333 1.01417 6.13583 2.125C5.78999 1.9875 5.41416 1.91667 5.02249 1.91667C3.26416 1.91667 1.84083 3.40833 1.84083 5.25C1.84083 5.66167 1.90999 6.05333 2.03833 6.41667C0.978327 6.95833 0.249161 8.09833 0.249161 9.41667C0.249161 10.6625 0.900828 11.7483 1.86749 12.3217C1.85083 12.4633 1.84083 12.605 1.84083 12.75C1.84083 14.5917 3.26416 16.0833 5.02249 16.0833C5.41416 16.0833 5.78916 16.0117 6.13499 15.875C6.65166 16.9867 7.73999 17.75 8.99916 17.75C10.2592 17.75 11.3475 16.9867 11.8633 15.875C12.2092 16.0108 12.5842 16.0817 12.9767 16.0817C14.735 16.0817 16.1583 14.59 16.1583 12.7483C16.1583 12.6033 16.1483 12.4617 16.1308 12.3208C17.0958 11.7483 17.75 10.6625 17.75 9.4175V9.41667ZM12.2367 6.63833L8.625 12.055C8.50416 12.2358 8.30666 12.3333 8.10416 12.3333C7.98499 12.3333 7.86416 12.3 7.75749 12.2283L7.66166 12.15L5.64916 10.1375C5.40499 9.89333 5.40499 9.4975 5.64916 9.25417C5.89333 9.01083 6.28916 9.00917 6.53249 9.25417L8.00749 10.7267L11.195 5.94333C11.3867 5.65583 11.775 5.58 12.0617 5.77083C12.35 5.9625 12.4283 6.35083 12.2367 6.6375V6.63833Z" fill="#D9D9D9"/>
                    </svg>
                    <span>${item.accountName} · ${item.timestamp}</span>
                </div>
            <div class="body-users-tweet">
                ${item.content}
            </div>
            ${
                item.imageAttach && item.descriptionImage ? 
                `<div class="image-tweeted">
                    <img src="${item.imageAttach}" alt="${item.descriptionImage}">
                </div>` 
                : ``
            }
            <div class="action-tweet-button">
                <span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.705 1.86835L8.24834 1.86002H8.24667C4.60167 1.86002 1.74667 4.71585 1.74667 8.36168C1.74667 11.7767 4.40167 14.3667 7.96751 14.5033V17.6933C7.96751 17.7833 8.00417 17.9317 8.06751 18.0292C8.18584 18.2167 8.38751 18.3183 8.59417 18.3183C8.70917 18.3183 8.82501 18.2867 8.92917 18.22C9.14917 18.08 14.3233 14.77 15.6692 13.6317C17.2542 12.29 18.2025 10.3233 18.205 8.37168V8.35752C18.2 4.71835 15.3467 1.86835 11.705 1.86752V1.86835ZM14.8608 12.6783C13.9158 13.4783 10.8092 15.5159 9.21751 16.5475V13.8917C9.21751 13.5467 8.93834 13.2667 8.59251 13.2667H8.26251C5.21251 13.2667 2.99751 11.2034 2.99751 8.36168C2.99751 5.41668 5.30417 3.11002 8.24751 3.11002L11.7033 3.11835H11.705C14.6483 3.11835 16.955 5.42335 16.9567 8.36502C16.9542 9.95668 16.1717 11.5683 14.8617 12.6783H14.8608Z" fill="#6E767D"/>
                    </svg>
                    <span class="count-number-tweet">${item.likes}</span>
                </span>
                <span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.8083 13.0583C19.565 12.8142 19.1692 12.8142 18.925 13.0583L17.075 14.9083V6.37499C17.075 4.65166 15.6725 3.24999 13.95 3.24999H9.07501C8.73001 3.24999 8.45001 3.52999 8.45001 3.87499C8.45001 4.21999 8.73001 4.49999 9.07501 4.49999H13.95C14.9833 4.49999 15.825 5.34166 15.825 6.37499V14.9083L13.975 13.0583C13.7308 12.8142 13.335 12.8142 13.0917 13.0583C12.8483 13.3025 12.8467 13.6983 13.0917 13.9417L16.0083 16.8583C16.1292 16.9808 16.2892 17.0417 16.45 17.0417C16.6108 17.0417 16.7692 16.9817 16.8917 16.8583L19.8083 13.9417C20.0533 13.6983 20.0533 13.3025 19.8083 13.0583ZM10.925 15.7917H6.05001C5.01667 15.7917 4.17501 14.95 4.17501 13.9167V5.38332L6.02501 7.23332C6.14834 7.35582 6.30834 7.41666 6.46834 7.41666C6.62834 7.41666 6.78834 7.35582 6.91001 7.23332C7.15417 6.98916 7.15417 6.59332 6.91001 6.34999L3.99334 3.43332C3.74917 3.18832 3.35334 3.18832 3.11001 3.43332L0.19334 6.34999C-0.0516599 6.59332 -0.0516599 6.98916 0.19334 7.23332C0.43834 7.47749 0.832507 7.47749 1.07667 7.23332L2.92667 5.38332V13.9167C2.92667 15.64 4.32917 17.0417 6.05167 17.0417H10.9267C11.2717 17.0417 11.5517 16.7617 11.5517 16.4167C11.5517 16.0717 11.2708 15.7917 10.9267 15.7917H10.925Z" fill="#6E767D"/>
                    </svg>
                    <span class="count-number-tweet">${item.retweets}</span>
                </span>
                <span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 18.0317H9.98834C7.83584 17.9917 1.62501 12.38 1.62501 7.06499C1.62501 4.51166 3.72917 2.26999 6.12751 2.26999C8.03584 2.26999 9.31918 3.58666 9.99918 4.54499C10.6775 3.58832 11.9608 2.26999 13.87 2.26999C16.27 2.26999 18.3733 4.51166 18.3733 7.06582C18.3733 12.3792 12.1617 17.9908 10.0092 18.03H10V18.0317ZM6.12834 3.52082C4.39501 3.52082 2.87584 5.17749 2.87584 7.06666C2.87584 11.85 8.73751 16.73 10.0008 16.7817C11.2658 16.73 17.1258 11.8508 17.1258 7.06666C17.1258 5.17749 15.6067 3.52082 13.8733 3.52082C11.7667 3.52082 10.59 5.96749 10.58 5.99166C10.3883 6.45999 9.61668 6.45999 9.42418 5.99166C9.41251 5.96666 8.23667 3.52082 6.12917 3.52082H6.12834Z" fill="#6E767D"/>
                    </svg>
                    <span class="count-number-tweet">${item.comments}</span>
                </span>
                <span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.6083 6.22501L10.4417 2.05834C10.1975 1.81417 9.80167 1.81417 9.55833 2.05834L5.39167 6.22501C5.14667 6.46917 5.14667 6.86501 5.39167 7.10834C5.63667 7.35167 6.03083 7.35334 6.275 7.10834L9.375 4.00834V12.5C9.375 12.845 9.655 13.125 10 13.125C10.345 13.125 10.625 12.845 10.625 12.5V4.00834L13.725 7.10834C13.8467 7.23084 14.0067 7.29167 14.1667 7.29167C14.3267 7.29167 14.4867 7.23167 14.6083 7.10834C14.8525 6.86417 14.8525 6.46917 14.6083 6.22501Z" fill="#6E767D"/>
                        <path d="M16.4233 18.2867H3.57667C2.52334 18.2867 1.66667 17.43 1.66667 16.3767V11.6667C1.66667 11.3217 1.94667 11.0417 2.29167 11.0417C2.63667 11.0417 2.91667 11.3217 2.91667 11.6667V16.3767C2.91667 16.7408 3.2125 17.0367 3.57667 17.0367H16.4233C16.7875 17.0367 17.0833 16.7408 17.0833 16.3767V11.6667C17.0833 11.3217 17.3633 11.0417 17.7083 11.0417C18.0533 11.0417 18.3333 11.3217 18.3333 11.6667V16.3767C18.3333 17.43 17.4767 18.2867 16.4233 18.2867Z" fill="#6E767D"/>
                    </svg>
                </span>
            </div>
            </div>
        `;
        
        container.appendChild(feedsContainer);
    });
});